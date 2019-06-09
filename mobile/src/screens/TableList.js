import React, { Component } from 'react';
import { StyleSheet, View, Text, Picker, FlatList, TouchableOpacity, Alert } from 'react-native';
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
            const { nome, emUso, valor } = doc.data();

            mesas.push({
                key: doc.id,
                doc, // DocumentSnapshot                
                nome,
                emUso,
                valor,                
            });
        });      
        this.setState({
            mesas,
        });
    }

    renderMesa = ({ item }) => (
        <View
            style={styles.mesaContainer}
        >
            <TouchableOpacity
                style={styles.mesa}
                onPress={
                    async () => {
                        if(!item.emUso){
                            await item.doc.ref.update({
                                emUso: true,
                            });
                        };
                        this.props.navigation.navigate('Bill', { id: item.id, });
                }}
            >
                <View
                    style={[
                        styles.mesaTitle,
                        {backgroundColor: item.emUso==false?'green':color.red},
                    ]}
                >
                    <Text
                        numberOfLines={1}
                        style={styles.mesaTitleText}
                    >
                        {item.nome}
                    </Text>
                </View>
                <View
                    style={styles.preco}
                >
                    <Icon
                        name='money'
                        color='green'
                        size={30}
                    />
                    <Text
                        numberOfLines={1}
                        style={styles.precoText}
                    >
                        Valor: {item.valor==''?'0.00':item.valor}
                    </Text>
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
                    numColumns={2}
                    data={this.state.mesas}
                    renderItem={this.renderMesa}
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
        padding: 10,
        height: 80,
        width:'50%',
        borderRadius: 5,
    },
    mesa: {
        flex:1,
        backgroundColor: color.white,
        borderRadius: 10,
        borderWidth:1,
        borderColor:'black',
    },
    mesaTitle:{
        flex:1,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        alignItems:'center',
        justifyContent:'center'
    },
    mesaTitleText: {
        color: color.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    preco:{
        flex:1,
        flexDirection:'row'
        ,alignItems:'center'
        ,justifyContent:'space-around',
    },
    precoText: {
        color: color.black,
        fontSize: 16,
    },
});