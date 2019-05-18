import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class KitchenList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>KitchenList</Text>
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