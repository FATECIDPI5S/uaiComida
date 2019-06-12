import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Button, } from 'react-native-elements';
import moment from 'moment';
import firebase from 'react-native-firebase'
import color from '../styles/Colors'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Bill extends Component {
    constructor(){
        super();
        this.mesaRef = firebase.firestore().collection('mesa')
        this.mesaListening = null;
        this.contaRef = firebase.firestore().collection('conta')
        this.contaListening = null;

        this.state = {
            tempo:'',
            desconto:0.00,
            pessoas:0,
            valor:0.00,
        };
    }

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        return {
            title: params.title,
        };
    };

    componentDidMount(){
        this.mesaListening = this.mesaRef.doc(this.props.navigation.state.params.mesaID).onSnapshot(this.onCollectionMesaUpdate);
        this.contaListening = this.contaRef.doc(this.props.navigation.state.params.contaID).onSnapshot(this.onCollectionContaUpdate);
    }

    componentWillUnmount() {
        console.log('BillcomponentWillUnmount',new Date());
        this.mesaListening();
        this.contaListening();        
    }

    onCollectionMesaUpdate = (doc) => {
        const { nome, ativo } = doc.data();
        this.props.navigation.setParams({ title: nome });
    }

    onCollectionContaUpdate = (doc) => {
        const { dataAbertura, desconto, pessoas, valor } = doc.data();
        this.setState({
            tempo: moment.utc(moment(new Date(),"DD/MM/YYYY HH:mm:ss").diff(moment(dataAbertura.toDate(),"DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss"),
            desconto,
            pessoas,
            valor,
        });
    }

    async removerConta(){
        await this.mesaRef.doc(this.props.navigation.state.params.mesaID).update({
            conta: '',
        });

        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={{ flex: 1 }}>    

                <View style={styles.infoContainer}>
                    <View style={styles.info}>
                        <Icon style={styles.infoIcon} name="group" color="#ff3f34" size={20} />
                        <Text style={styles.infoText}>
                            {this.state.pessoas}
                        </Text>
                    </View>
                    <View style={styles.info}>
                        <Icon style={styles.infoIcon} name="clock-o" color="#ff3f34" size={20} />
                        <Text style={styles.infoText}>
                            {this.state.tempo}
                        </Text>
                    </View>
                </View>

                <View style={styles.itemContainer}></View>

                <View style={styles.discountContainer}>                
                    <Text style={styles.discountText}>Desconto: R$ {this.state.desconto}</Text>
                    <Text style={styles.discountText}>Total: R$ {this.state.valor}</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Icon style={styles.buttonIcon} name="remove" color="#ff3f34" size={20} />
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.button}>
                        <Icon style={styles.buttonIcon} name="check" color="#ff3f34" size={20} />
                    </TouchableOpacity>                    
                    <TouchableOpacity style={styles.button}
                        onPress={() => {}/*this.props.navigation.navigate('AddItem', { title: `Adicionar itens a ${this.props.navigation.state.params.table.mesa.toLowerCase()}`, table: this.props.navigation.state.params.table })*/}>
                        <Icon style={styles.buttonIcon} name="cart-plus" color="#ff3f34" size={20} />
                    </TouchableOpacity>
                </View>

            </View >
        );
    };

}

const styles = StyleSheet.create({
    infoContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 10,
    },
    info: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    infoIcon: {
        alignSelf: 'center',
    },
    infoText: {
        fontSize: 20,
        marginLeft: 5,
    },
    itemContainer: {
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: '#CCC',
        width: '92%',
        height: '50%',
        borderRadius: 10,
        marginTop: 20,
    },
    discountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        marginHorizontal: 75,
    },
    discountText: {
        fontSize: 18,
        textAlign: 'justify'
    },
    discountTextSymbol: {
        fontSize: 18,
        textAlign: 'right'
    },
    discountInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    discountInputText: {
        fontSize: 18,
        textAlign: 'center',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20,
    },
    button: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#ff3f34',
        borderWidth: 1,
        borderColor: '#CCC',
        height: 50,
        width: '92%',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 5,
    },
    buttonIcon: {
        color: '#FFF',
        alignSelf: 'center',
    },
    buttonText: {
        fontSize: 16,
        marginLeft: 5,
        textAlign: 'center',
        color: '#FFF',
    },
});