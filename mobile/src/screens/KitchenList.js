import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

export default class KitchenList extends Component {

    state = {
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
    };

    renderItem = ({ item }) => (

        <View
            style={{
                flexDirection: 'row',
                height: 50,
                borderWidth: 1,
                borderColor: item.color,
                backgroundColor: item.color,
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

            <View
                style={{
                    flex: 0.05}}>

            </View>

        </View>

    )

    render() {
        return (
            
            <View style={styles.container}>

                <FlatList
                    data={this.state.docs}
                    renderItem={this.renderItem}
                />

            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    companyContainer: {
        
    },
});