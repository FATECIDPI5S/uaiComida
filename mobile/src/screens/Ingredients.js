import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import firebase from 'react-native-firebase';
import color from '../styles/Colors';

export default class Ingredients extends Component {
    constructor(){
        super();
        this.produtoRef = firebase.firestore().collection('produto');
        this.produtoIngredienteListening = null;

        this.state = {
            ingredientes: [],
        };
    }

    componentDidMount() {
        this.produtoIngredienteListening = this.produtoRef.doc(this.props.navigation.state.params.produtoID).collection('ingredientes').onSnapshot(this.onCollectionProdutoIngredientesUpdate);
    }

    componentWillUnmount() {
        console.log('IngredientscomponentWillUnmount',new Date());
        this.produtoIngredienteListening();
    }

    onCollectionProdutoIngredientesUpdate = (querySnapshot) => {
        const ingredientes = [];
        querySnapshot.forEach((doc) => {
            const { nome, precoVenda } = doc.data();

            ingredientes.push({
                key: doc.id,
                doc, // DocumentSnapshot  
                nome,
                precoVenda
            });
        });
        this.setState({
            ingredientes,
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
                    data={this.state.ingredientes}
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