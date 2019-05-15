import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Picker, FlatList } from 'react-native';
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TableList extends Component {

    static navigationOptions = ({navigation}) => ({
        headerRight:(
            <TouchableOpacity
                onPress={
                    async () => {
                        try{
                            await firebase.auth().signOut()
                            navigation.navigate('Login')
                        }catch(error){
                            console.log(error)
                        }           
                    }
                }
                style={{marginRight:10}}
            >
                <Icon
                    name='sign-out'
                    size={30}
                    color='white'
                />
            </TouchableOpacity>
    )})

    state = {
        ambiente: '',
        mesas: [],
    }

    async loadMesas() {
        this.setState({ mesas: [] });
        const loadedMesas = [];
        const mesasRef = firebase.firestore().collection('mesas');
        await mesasRef.where('ativa', '==', true).orderBy('entrada', 'desc').get()
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
    }

    renderMesa = ({ item }) => ( // RENDERIZA CADA ELEMENTO DA FLATLIST
        <View style={styles.mesaContainer}>
            <TouchableOpacity style={styles.mesa} key={item.mesa} onPress={() => this.props.navigation.navigate('Table', { title: item.mesa, table: item })}>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.mesaTitle}>{item.mesa}</Text>
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
            <View style={{ flex: 1 }}>

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
}

const styles = StyleSheet.create({
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    picker: {
        height: 50,
        width: '94%',
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
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFF',
        //borderTopWidth: 1,
        //borderColor: '#DDD',
        borderRadius: 5,
        //marginBottom: 20
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