import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Picker, FlatList, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Moment from 'moment';
//import firebase, { Firebase } from 'react-native-firebase'
//import { KeyboardAvoidingView } from 'react-native';


export default class Table extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
    });

    state = {
        dicount: 0.0,
    }

    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={styles.infoContainer}>
                    <View style={styles.info}>
                        <Icon style={styles.infoIcon} name="group" color="#ff3f34" size={20} />
                        <Text style={styles.infoText}>
                            {this.props.navigation.state.params.table.pessoas} pessoas
                        </Text>
                    </View>

                    <View style={styles.info}>
                        <Icon style={styles.infoIcon} name="clock-o" color="#ff3f34" size={20} />
                        <Text style={styles.infoText}>
                            Entrada: {Moment(this.props.navigation.state.params.table.entrada).format('HH:mm')}
                        </Text>
                    </View>
                </View>

                <View style={styles.itemContainer}></View>

                <View style={styles.discountContainer}>
                    <Text style={styles.discountText}>Desconto:</Text>
                    <View style={styles.discountInputContainer}>
                        <Text style={styles.discountTextSymbol}>R$</Text>
                        <TextInput
                            placeholder="0,00"
                            placeholderStyle={{ marginBottom: 0 }}
                            style={styles.discountInputText}
                            value={this.state.discount}
                            keyboardType={'numeric'}
                        />
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}
                        onPress={() => this.props.navigation.navigate('AddItem', { title: `Adicionar itens a ${this.props.navigation.state.params.table.mesa.toLowerCase()}`, table: this.props.navigation.state.params.table })}>
                        <Icon style={styles.buttonIcon} name="cart-plus" color="#ff3f34" size={20} />
                        <Text style={styles.buttonText}>Adicionar item</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <Icon style={styles.buttonIcon} name="check" color="#ff3f34" size={20} />
                        <Text style={styles.buttonText}>Fechar conta</Text>
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
        justifyContent: 'flex-end',
        marginBottom: 20,
    },
    button: {
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