import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class Config extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Config</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    },
});