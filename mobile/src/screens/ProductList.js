import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { SearchBar } from 'react-native-elements';

export default class ProductList extends Component {

    state = {
        search: '',
    }

    render() {
        return (
            <View style={styles.container}>
                <SearchBar
                    placeholder='Buscar itens...'
                    round={true}
                    lightTheme={true}
                    containerStyle={{backgroundColor: '#ff3f34',}}                    
                    inputContainerStyle={{backgroundColor: '#ff3f34'}}
                    placeholderTextColor='white'
                    onChangeText={search => this.setState({ search })}
                    value={this.state.search}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 20,
    },
});