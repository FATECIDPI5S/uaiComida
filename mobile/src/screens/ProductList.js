import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class ProductList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>ProductList</Text>
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