import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Picker, FlatList } from 'react-native';
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TableList extends Component {

    state = {
        ambiente: '',
        mesas: [],
    }

    loadMesas() {
        const mesasRef = firebase.firestore().collection('mesas');
        mesasRef
            .where('ativa', '==', true)
            .orderBy('entrada', 'desc')
            .onSnapshot(
                querySnapshot => {
                    const loadedMesas = [];
                    querySnapshot
                        .forEach(
                            doc => {
                                loadedMesas.push(doc.data());
                            }
                        )
                    this.setState({ mesas: [] });
                    this.setState({ mesas: loadedMesas });

                }, error => { console.log(error) })  
    }

    renderMesa = ({ item }) => ( // RENDERIZA CADA ELEMENTO DA FLATLIST
        <View style={styles.mesaContainer}>
            <TouchableOpacity style={styles.mesa} key={item.mesa} onPress={() => this.props.navigation.navigate('Table', { title: item.mesa, table: item })}>

                <View style={{ flexDirection: 'row' }}>
                    <Text numberOfLines={1} style={styles.mesaTitle}>{item.mesa}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Icon style={styles.mesaIcon} name="group" color="#ff3f34" size={15} />
                    <Text style={styles.mesaContent}>Pessoas: {item.pessoas}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Icon style={styles.mesaIcon} name="money" color="#ff3f34" size={15} />
                    <Text style={styles.mesaContent}>Valor: {item.valor}</Text>
                </View>

            </TouchableOpacity>
        </View>
    )

    componentWillMount() {
        this.loadMesas();
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.pickerContainer}>
                    <Text styles={styles.pickerContainerTitle}>
                        Selecione o ambiente
                    </Text>
                    <Picker
                        selectedValue={this.state.ambiente}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ ambiente: itemValue })
                        }>
                        <Picker.Item label="Entrada" value="1" />
                        <Picker.Item label="Piso superior" value="2" />
                        <Picker.Item label="Externo" value="3" />
                        <Picker.Item label="Externo" value="3" />
                        <Picker.Item label="Externo" value="3" />
                        <Picker.Item label="Externo" value="3" />
                        <Picker.Item label="Externo" value="3" />
                        <Picker.Item label="Externo" value="3" />
                        <Picker.Item label="Externo" value="3" />
                        <Picker.Item label="Externo" value="3" />
                        <Picker.Item label="Externo" value="3" />
                        <Picker.Item label="Externo" value="3" />
                        <Picker.Item label="Externo" value="3" />
                        <Picker.Item label="Externo" value="3" />
                        <Picker.Item label="Externo" value="3" />
                        <Picker.Item label="Externo" value="3" />
                        <Picker.Item label="Externo" value="3" />
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
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pickerContainer: {
        height: 60,
        backgroundColor: '#ff3f34',
    },
    pickerContainerTitle: {
        fontSize: 3,
        color: '#FFF',
    },
    picker: {
        height: 50,
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
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFF',
        borderRadius: 5,
    },
    mesa: {
        height: 75,
        width: 160,
        backgroundColor: '#ff3f34',
        borderColor: '#AAA',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    mesaIcon: {
        color: '#FFF',
        alignSelf: 'center',
    },
    mesaTitle: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderColor: '#AAA',
        width: '100%',
        marginBottom: 2,
    },
    mesaContent: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 12,
        marginLeft: 5,
        marginVertical: 2.5,
    },
});