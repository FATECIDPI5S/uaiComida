import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import { SearchBar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ProductList extends Component {

    state = {
        search: '',
        docs: [
            {key: 'pedido 01',color: '#808080'},
            {key: 'pedido 02',color: '#006400'},
            {key: 'pedido 03',color: '#ffd700'},
            {key: 'pedido 04',color: '#808080'},
            {key: 'pedido 05',color: '#006400'},
            {key: 'pedido 06',color: '#ffd700'},
            {key: 'pedido 07',color: '#808080'},
            {key: 'pedido 08',color: '#006400'},
            {key: 'pedido 09',color: '#ffd700'},
            {key: 'pedido 10',color: '#808080'},
            {key: 'pedido 11',color: '#006400'},
            {key: 'pedido 12',color: '#ffd700'},
        ]
    }

    renderItem = ({ item }) => (

        <View
            style={{
                flexDirection: 'row',
                height: 50,
                borderWidth: 1,
                borderColor: 'red',
                borderRadius: 5,
                marginBottom: 10}}>

            <View 
                style={{
                    flex: 0.95,
                    justifyContent: 'center',
                    borderRadius:5,
                    backgroundColor:'white'}}>

                <Text
                    style={{
                        color:'black',
                        marginLeft:10}}>
                    
                    {item.key}
                    
                </Text>

            </View>

            

        </View>

    )

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

                <View style={{flex:1,padding: 20}}>

                    <FlatList
                        data={this.state.docs}
                        renderItem={this.renderItem}
                    />

                </View>

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