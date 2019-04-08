import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Picker } from 'react-native';
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
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFF', }}>

                <View style={styles.buttonContainer}>
                    <Picker
                        selectedValue={this.state.ambiente}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ ambiente: itemValue })
                        }>
                        <Picker.Item label="Selecione o ambiente" value="0" />
                        <Picker.Item label="Entrada" value="1" />
                        <Picker.Item label="Piso superior" value="2" />
                        <Picker.Item label="Externo" value="3" />
                    </Picker>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Mesa 01</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Mesa 02</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Mesa 03</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Mesa 04</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Mesa 05</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Mesa 06</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Mesa 07</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Mesa 08</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };

    componentWillUnmount() {
        //this.signOutUser();
    }
}

const styles = StyleSheet.create({
    picker: {
        height: 50,
        width: '90%',
        borderWidth: 1,
        borderColor: '#ff3f34',
        backgroundColor: '#ff3f34',
        justifyContent: 'center',
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
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
    buttonText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 16,
    },
});