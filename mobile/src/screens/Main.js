import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Picker, FlatList } from 'react-native';
import firebase, { Firebase } from 'react-native-firebase'
import Icon from 'react-native-vector-icons/FontAwesome';
//import MesaService from '../service/MesaService';

export default class Main extends Component {

    // signOutUser = async () => {
    //     try {
    //         await firebase.auth().signOut().then(
    //             console.log('SAIU E ENCERROU')
    //         );
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    state = {
        ambiente: '',
        mesas: [
            { key: 'Mesa 01', pessoas: 5, valor: 225 },
            { key: 'Mesa 02', pessoas: 7, valor: 350 },
            { key: 'Mesa 03', pessoas: 3, valor: 145 },
        ],
    }

    async loadMesas() {
        this.setState({ mesas: [] });
        const loadedMesas = [];
        const mesasRef = firebase.firestore().collection('mesas');
        await mesasRef.orderBy('entrada', 'desc').get()
            .then(
                querySnapshot => {
                    querySnapshot.forEach(doc => {
                        loadedMesas.push(doc.data());
                    })
                })
            .catch(err => {
                console.log('Error getting documents => ', err);
            });
        this.setState({ mesas: loadedMesas });
        console.log('MESAS DEPOIS', this.state.mesas);
    }

    renderMesa = ({ item }) => ( // RENDERIZA CADA ELEMENTO DA FLATLIST
        <View style={styles.mesaContainer}>
            <TouchableOpacity style={styles.mesa} key={item.mesa} onPress={() => { }}>
                <Text style={styles.mesaTitle}>{item.mesa}</Text>
                <Text style={styles.mesaContent}>Pessoas: {item.pessoas}</Text>
                <Text style={styles.mesaContent}>Valor: {item.valor}</Text>
            </TouchableOpacity>
        </View>
    )

    componentWillMount() {
        this.loadMesas();
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF', }}>

                <View style={styles.pickerContainer}>
                    <Picker
                        mode={'dialog'}
                        selectedValue={this.state.ambiente}
                        style={styles.picker}
                        itemStyle={styles.pickerItem}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ ambiente: itemValue })
                        }>
                        <Picker.Item label="Selecione o ambiente" value="0" />
                        <Picker.Item label="Entrada" value="1" />
                        <Picker.Item label="Piso superior" value="2" />
                        <Picker.Item label="Externo" value="3" />
                    </Picker>
                </View>

                <FlatList
                    numColumns={2} // Número de colunas
                    data={this.state.mesas} // AS MESAS QUE SÃO INICIADAS
                    // MAS SÃO ATUALIZADAS (this.setState({})) NO COMPONENTWILLMOUNT()
                    renderItem={this.renderMesa}
                    keyExtractor={(item, index) => index.toString()} // PARA INSERIR UM KEY EM CADA COMPONENT ITEM
                />

            </View>
        );
    };

    componentWillUnmount() {
        //this.signOutUser();
    }
}

const styles = StyleSheet.create({
    pickerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 25,
    },
    picker: {
        height: 50,
        width: '92%',
        borderWidth: 1,
        borderColor: '#ff3f34',
        color: '#FFF',
        borderRadius: 999,
        backgroundColor: '#ff3f34',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pickerItem: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ff3f34',
        color: '#FFF',
        borderRadius: 999,
        backgroundColor: '#ff3f34',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mesaContainer: {
        //flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        borderTopWidth: 1,
        borderColor: '#DDD',
        borderRadius: 5,
        padding: 10,
        //marginBottom: 20
    },
    mesa: {
        height: 75,
        width: 150,
        backgroundColor: '#ff3f34',
        borderColor: '#AAA',
        borderWidth: 1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    mesaTitle: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
    },
    mesaContent: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 12,
    },
});