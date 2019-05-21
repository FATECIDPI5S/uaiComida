import React, {Component} from 'react';
import {StyleSheet, View } from 'react-native';
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
                    placeholderTextColor='rgba(255, 255, 255, 0.6)'
                    lightTheme={true}
                    searchIcon={{color:'#fff'}}
                    clearIcon={{color:'#fff'}}
                    inputStyle={{color:'#fff'}}
                    containerStyle={{backgroundColor: '#ff3f34',}}                    
                    inputContainerStyle={{backgroundColor: '#ff3f34'}}
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