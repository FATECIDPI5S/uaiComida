import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import firebase from 'react-native-firebase';
import color from '../styles/Colors';

export default class Additionals extends Component {
    constructor(){
        super();
        this.produtoRef = firebase.firestore().collection('produto');
        this.produtoAdicionaisListening = null;

        this.state = {
            adicionais: [],
        };
    }

    componentDidMount() {
        this.produtoAdicionaisListening = this.produtoRef.doc(this.props.navigation.state.params.produtoID).collection('adicionais').onSnapshot(this.onCollectionProdutoAdicionaisUpdate);
    }

    componentWillUnmount() {
        console.log('AdditionalscomponentWillUnmount',new Date());
        this.produtoAdicionaisListening();
    }

    onCollectionProdutoAdicionaisUpdate = (querySnapshot) => {
        const adicionais = [];
        querySnapshot.forEach((doc) => {
            const { nome, precoVenda } = doc.data();

            adicionais.push({
                key: doc.id,
                doc, // DocumentSnapshot  
                nome,
                precoVenda
            });
        });
        this.setState({
            adicionais,
        });
    }

    renderItem = ({ item }) => (
        <View style={styles.produtoContainer}>
            <View style={{flex: 3,justifyContent:'center'}}>
                <Text style={styles.infoText} numberOfLines={1}>{item.nome}</Text>
            </View>
            <View style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
                <Text style={styles.infoText} numberOfLines={1}>{item.precoVenda}</Text>
            </View>
        </View>
    )

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.adicionais}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
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