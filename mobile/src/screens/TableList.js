import React, { Component } from 'react';
import { StyleSheet, View, Text, Picker, FlatList, TouchableOpacity } from 'react-native';
import firebase from 'react-native-firebase'
import color from '../styles/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TableList extends Component {
    constructor(){
        super();
        this.ambienteRef = firebase.firestore().collection('ambiente').where('ativo', '==', true);
        this.ambienteListening = null;
        this.mesaRef = firebase.firestore().collection('mesa').where('ativo', '==', true);
        this.mesaListening = null;

        this.state = {
            empresaID: '',
            ambientes: [],
            ambienteID: '',
            mesas: [],            
        };
    }

    componentDidMount() {
        this.getUserData();
    }
    
    componentWillUnmount() {
        this.ambienteListening();
        this.mesaListening();
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
        
        this.ambienteListening = this.ambienteRef.where('empresa', '==', this.state.empresaID).onSnapshot(this.onCollectionAmbienteUpdate);
    }

    onCollectionAmbienteUpdate = (querySnapshot) => {
        const ambientes = [];
        querySnapshot.forEach((doc) => {
            const { nome } = doc.data();

            ambientes.push({
                key: doc.id,
                doc, // DocumentSnapshot
                nome,
            });
        });      
        this.setState({
            ambientes,
        });
    }

    onPickerValueChange = (itemValue) => {
        this.setState({ ambienteID: itemValue })
        this.mesaListening = this.mesaRef.where('ambiente', '==', itemValue).onSnapshot(this.onCollectionMesaUpdate);
    }

    onCollectionMesaUpdate = (querySnapshot) => {
        const mesas = [];
        querySnapshot.forEach((doc) => {
            const { nome } = doc.data();

            mesas.push({
                key: doc.id,
                doc, // DocumentSnapshot
                nome,
            });
        });      
        this.setState({
            mesas,
        });
    }

    renderMesa = ({ item }) => ( // RENDERIZA CADA ELEMENTO DA FLATLIST
        <View style={styles.mesaContainer}>
            <TouchableOpacity style={styles.mesa} key={item.nome} onPress={() => this.props.navigation.navigate('Table', { title: item.nome, table: item })}>
                <View style={{ flexDirection: 'row' }}>
                    <Text numberOfLines={1} style={styles.mesaTitle}>{item.nome}</Text>
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

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.pickerContainer}>
                    <Text styles={styles.pickerContainerTitle}>
                        Selecione o ambiente
                    </Text>
                    <Picker
                        style={styles.picker}
                        selectedValue={this.state.ambienteID}
                        onValueChange={this.onPickerValueChange}
                    >
                        {
                            this.state.ambientes.map(element =>
                                <Picker.Item label={element.nome} value={element.key} key={element.key}/>
                            )
                        }
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
        backgroundColor: color.red,
    },
    pickerContainerTitle: {
        height: 10,
        fontSize: 53,
        color: color.white,
    },
    picker: {
        height: 50,
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