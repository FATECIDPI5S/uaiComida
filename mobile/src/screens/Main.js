import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
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

    render() {
        return (
            <View style={{ flex: 1,backgroundColor: '#ff3f34', }}>
                <View style={{ alignSelf: 'center', marginTop: 10 }}>
                    <Text style={{ fontSize: 18, color: '#FFF' }}>Ferramentas</Text>
                </View>
            </View>
        );
    };

    componentWillUnmount() {
        //this.signOutUser();
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'transparent',
        height: 75,
        width: 130,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 14,
    },
});