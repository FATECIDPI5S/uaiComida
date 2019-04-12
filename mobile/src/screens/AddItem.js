import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Picker, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Moment from 'moment';

export default class AddItem extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.title}`,
    });

    state = {
        search: '',
        itens: [
            { nome: 'Hambúrguer', valor: 12.99 },
            { nome: 'Suco', valor: 4.75 },
            { nome: 'Batata frita', valor: 2.5 },
        ]
    };

    updateSearch = search => {
        this.setState({ search });
    };

    renderItem = ({ item }) => ( // RENDERIZA CADA ELEMENTO DA FLATLIST
        <View style={styles.itemContainer}>
            <TouchableOpacity style={styles.item} key={item.nome} onPress={() => { }}>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.itemTitle}>{item.nome}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Icon style={styles.itemIcon} name="money" color="#ff3f34" size={15} />
                    <Text style={styles.itemContent}>Valor: R${item.valor}</Text>
                </View>

            </TouchableOpacity>
        </View>
    )

    render() {
        const { search } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <SearchBar
                    placeholder="Buscar itens..."
                    onChangeText={this.updateSearch}
                    value={search}
                    lightTheme={true}
                    containerStyle={{ backgroundColor: '#ff3f34' }}
                    inputContainerStyle={{ backgroundColor: '#FFF', borderRadius: 10 }}

                />

                <View style={{ flex: 1, marginTop: 10 }}>
                    <FlatList
                        numColumns={2} // Número de colunas
                        data={this.state.itens} // AS MESAS QUE SÃO INICIADAS
                        // MAS SÃO ATUALIZADAS (this.setState({})) NO COMPONENTWILLMOUNT()
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => index.toString()} // PARA INSERIR UM KEY EM CADA COMPONENT ITEM
                    />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 10,
    },
    picker: {
        height: 50,
        width: '94%',
        borderWidth: 1,
        borderColor: '#ff3f34',
        color: '#FFF',
        borderRadius: 999,
        backgroundColor: '#ff3f34',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pickerItem: {
        height: 50,
        width: '100%',
        borderWidth: 1,
        borderColor: '#ff3f34',
        color: '#FFF',
        borderRadius: 999,
        backgroundColor: '#ff3f34',
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemContainer: {
        //flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFF',
        //borderTopWidth: 1,
        //borderColor: '#DDD',
        borderRadius: 5,
        //marginBottom: 20
    },
    item: {
        height: 75,
        width: 160,
        backgroundColor: '#ff3f34',
        borderColor: '#AAA',
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    itemIcon: {
        color: '#FFF',
        alignSelf: 'center',
        marginTop: 10,
    },
    itemTitle: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        borderBottomWidth: 1,
        borderColor: '#AAA',
        width: '100%',
        marginBottom: 2,
    },
    itemContent: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 12,
        marginLeft: 5,
        marginTop: 10,
    },
});