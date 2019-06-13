import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Text, TouchableOpacity} from 'react-native';
import { SearchBar } from 'react-native-elements';
import firebase from 'react-native-firebase';
import color from '../styles/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class ProductList extends Component {
    constructor(){
        super();
        this.produtoRef = firebase.firestore().collection('produto');
        this.produtoListening = null;

        this.state = {
            empresaID: '',
            search: '',
            produtos: [],
        };
    }

    componentDidMount() {
        this.getUserData();
    }

    componentWillUnmount() {
        console.log('ProductListcomponentWillUnmount',new Date());
        this.produtoListening();
    }

    async getUserData(){
        await firebase.firestore().collection('funcionario').doc(firebase.auth().currentUser.uid).get()
            .then((doc) => {
                const { empresa } = doc.data();
                this.setState({
                    empresaID: empresa,
                });
            })
            .catch((error) => {
                console.log('Erro ao recuperar dados do funcionário',error.message);
            })
        
        this.produtoListening = this.produtoRef.where('empresa', '==', this.state.empresaID).onSnapshot(this.onCollectionProdutoUpdate);
    }

    onCollectionProdutoUpdate = (querySnapshot) => {
        const produtos = [];
        querySnapshot.forEach((doc) => {
            console.log(doc)
            const { codigo, descricao, nome, precoVenda } = doc.data();

            produtos.push({
                key: doc.id,
                doc, // DocumentSnapshot
                codigo,
                descricao,
                nome,
                precoVenda
            });
        });
        this.setState({
            produtos,
        });
    }

    renderItem = ({ item }) => (
        <View style={styles.produtoContainer}>
            <View style={{flex: 3,justifyContent:'center'}}>
                <Text style={styles.infoText} numberOfLines={1}>{item.nome}</Text>
            </View>
            <View style={{flex: 3,justifyContent:'center'}}>
                <Text style={styles.infoText} numberOfLines={1}>{item.precoVenda}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Icon
                    name='leanpub'
                    color={color.white}
                    size={25}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Icon
                    name='list-alt'
                    color={color.white}
                    size={25}
                />
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
            <View style={styles.container}>
                <SearchBar
                    placeholder='Buscar itens...'
                    placeholderTextColor='rgba(255, 255, 255, 0.6)'
                    lightTheme={true}
                    searchIcon={{color:color.white}}
                    clearIcon={{color:color.white}}
                    inputStyle={{color:color.white}}
                    containerStyle={{backgroundColor: color.red,}}                    
                    inputContainerStyle={{backgroundColor: color.red}}
                    onChangeText={(search) => {
                        this.setState({ search })
                        this.produtoListening();
                        if(search.length > 3){
                            this.produtoListening = this.produtoRef.where('empresa', '==', this.state.empresaID).orderBy('nome').startAt(search).endAt(search + '\uf8ff').onSnapshot(this.onCollectionProdutoUpdate);
                        }else{
                            this.produtoListening = this.produtoRef.where('empresa', '==', this.state.empresaID).onSnapshot(this.onCollectionProdutoUpdate);
                        }
                    }}
                    value={this.state.search}
                />
                <View style={styles.flatContainer}>
                    <FlatList
                        data={this.state.produtos}
                        renderItem={this.renderItem}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    flatContainer: {
        flex: 1,
        padding: 10,
    },
    produtoContainer: {
        flexDirection: 'row',
        height: 50,
        borderWidth: 1,
        borderColor: color.red,
        borderRadius: 5,
        marginBottom: 10
    },
    button: {
        flex: 1,
        backgroundColor: color.red,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin:5,
    },
    infoText: {
        fontSize: 20,
        marginLeft: 10,
    },
});