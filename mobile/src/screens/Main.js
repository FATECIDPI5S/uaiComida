import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Picker, FlatList } from 'react-native';
//import firebase, { Firebase } from 'react-native-firebase'
import Icon from 'react-native-vector-icons/FontAwesome';

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
            { key: 'Mesa 01' },
            { key: 'Mesa 02' },
            { key: 'Mesa 03' },
            { key: 'Mesa 04' },
            { key: 'Mesa 05' },
            { key: 'Mesa 06' },
            { key: 'Mesa 07' },
            { key: 'Mesa 08' },
            { key: 'Mesa 09' },
            { key: 'Mesa 10' },
            { key: 'Mesa 11' },
            { key: 'Mesa 12' },
            { key: 'Mesa 13' },
            { key: 'Mesa 14' },
            { key: 'Mesa 15' },
        ]
    }

    renderItem = ({ item }) => (
        <View style={styles.mesaContainer}>
            <TouchableOpacity style={styles.mesa} onPress={() => { }}>
                <Text style={styles.mesaText}>{item.key}</Text>
            </TouchableOpacity>
        </View>
    )

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
                    data={this.state.mesas}
                    renderItem={this.renderItem}
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
        marginVertical: 50,
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
    mesaText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 16,
    },
});