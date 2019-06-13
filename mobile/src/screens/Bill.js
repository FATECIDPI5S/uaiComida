import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native';
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
            docs: [
                {key: 'Pedido 011111111',price:'10000000,00'},
                {key: 'Pedido 02',price:'132424,00'},
                {key: 'Pedido 03',price:'324324,00'},
                {key: 'Pedido 04',price:'223,00'},
                {key: 'Pedido 05',price:'234,00'},
                {key: 'Pedido 06',price:'545,00'},
                {key: 'Pedido 07',price:'64566,00'},
            ],
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
            tempo: moment.utc(moment(new Date(),'DD/MM/YYYY HH:mm:ss').diff(moment(dataAbertura.toDate(),'DD/MM/YYYY HH:mm:ss'))).format('HH:mm:ss'),
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

    renderPedido = ({ item }) => (
        <View style={styles.pedidoContainer}>
            <View style={{flex: 3,justifyContent:'center'}}>
                <Text style={styles.infoText} numberOfLines={1}>{item.key}</Text>
            </View>
            <View style={{flex: 3,justifyContent:'center'}}>
                <Text style={styles.infoText} numberOfLines={1}>{item.price}</Text>
            </View>
            <TouchableOpacity style={styles.button}>
                <Icon
                    name='remove'
                    color={color.white}
                    size={25}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Icon
                    name='send'
                    color={color.white}
                    size={25}
                />
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <View style={styles.info}>
                        <Icon
                            name='group'
                            color='#ff3f34'
                            size={30}
                        />
                        <Text style={styles.infoText}>
                            {this.state.pessoas}
                        </Text>
                    </View>
                    <View style={styles.info}>
                        <Icon
                            name='clock-o'
                            color='#ff3f34'
                            size={30}
                        />
                        <Text style={styles.infoText}>
                            {this.state.tempo}
                        </Text>
                    </View>
                </View>

                <View style={styles.itemContainer}>
                    <FlatList
                        data={this.state.docs}
                        renderItem={this.renderPedido}
                    />
                </View>

                <View style={styles.infoContainer}>
                    <View style={styles.info}>
                        <Text style={styles.infoText}>
                            Desconto: R$ {this.state.desconto}
                        </Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.infoText}>
                            Total: R$ {this.state.valor}
                        </Text>
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.removerConta()}
                    >
                        <Icon
                            name='trash'
                            color={color.white}
                            size={30}
                        />
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.button}>
                        <Icon
                            name='check'
                            color={color.white}
                            size={30}
                        />
                    </TouchableOpacity>                    
                    <TouchableOpacity style={styles.button}
                        onPress={() => {}/*this.props.navigation.navigate('AddItem', { title: `Adicionar itens a ${this.props.navigation.state.params.table.mesa.toLowerCase()}`, table: this.props.navigation.state.params.table })*/}>
                        <Icon
                            name='cart-plus'
                            color={color.white}
                            size={30}
                        />
                    </TouchableOpacity>
                </View>
            </View >
        );
    };

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    infoContainer: {
        flex: 1,
        flexGrow:1,
        flexDirection: 'row',
    },
    info: {
        flex:1,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
    },
    infoText: {
        fontSize: 20,
        marginLeft: 10,
    },
    itemContainer: {
        flex: 7,
        borderRadius: 10,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    button: {
        flex: 1,
        backgroundColor: color.red,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        margin:5,
    },
    pedidoContainer: {
        flexDirection: 'row',
        height: 50,
        borderWidth: 1,
        borderColor: color.red,
        borderRadius: 5,
        marginBottom: 10
    },
});