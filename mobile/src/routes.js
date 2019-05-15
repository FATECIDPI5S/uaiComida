import React from 'react'
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from './screens/Login'
import TableListScreen from './screens/TableList'
import TableScreen from './screens/Table'
import AddItemScreen from './screens/AddItem'
import ProductListScreen from './screens/ProductList'
import KitchenListScreen from './screens/KitchenList'
import ConfigScreen from './screens/Config'

const AuthStack = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        },
    },
});

const TableStack = createStackNavigator({
    TableList: {
        screen: TableListScreen,
    },
    Table: {
        screen: TableScreen,
    },
    AddItem: {
        screen: AddItemScreen,
    }
},{
    defaultNavigationOptions: {
        headerStyle: {
            color: '#FFF',
            backgroundColor: '#ff3f34',
        },
        headerTintColor: '#FFF',
    }
});

const ProductStack = createStackNavigator({
    ProductList: {
        screen: ProductListScreen,
    },
},{
    defaultNavigationOptions: {
        headerStyle: {
            color: '#FFF',
            backgroundColor: '#ff3f34',
        },
        headerTintColor: '#FFF',
    }
});

const KitchenStack = createStackNavigator({
    KitchenList: {
        screen: KitchenListScreen,
    },
},{
    defaultNavigationOptions: {
        headerStyle: {
            color: '#FFF',
            backgroundColor: '#ff3f34',
        },
        headerTintColor: '#FFF',
    }
});

const ConfigStack = createStackNavigator({
    Config: {
        screen: ConfigScreen,
    },
},{
    defaultNavigationOptions: {
        headerStyle: {
            color: '#FFF',
            backgroundColor: '#ff3f34',
        },
        headerTintColor: '#FFF',
    }
});

const AppStack = createBottomTabNavigator(
{
    Mesas: TableStack,
    Produtos: ProductStack,
    Cozinha: KitchenStack,
    Configuração: ConfigStack,
},
{
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
            const { routeName } = navigation.state;
            let iconName;
            switch(routeName) {
                case 'Mesas':
                    iconName = `room-service${focused ? '' : '-outline'}`;
                break;
                case 'Produtos':
                    iconName = `file-document-box${focused ? '' : '-outline'}`;
                break;
                case 'Cozinha':
                    iconName = `tea${focused ? '' : '-outline'}`;
                break;
                case 'Configuração':
                    iconName = `settings${focused ? '' : '-outline'}`;
                break;
            }
            return <IconMCI name={iconName} size={25} color={tintColor} />;
        },
    }),
    tabBarOptions: {
        activeTintColor: '#ff3f34',
        inactiveTintColor: '#515151',
        labelStyle: {
            fontSize: 12,
        }
    }
});

export default createAppContainer(
    createSwitchNavigator({
        Auth: AuthStack,
        App: AppStack,        
    },
));