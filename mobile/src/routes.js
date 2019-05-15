import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './screens/Login'
import MainScreen from './screens/Main'
import TableScreen from './screens/Table'
import AddItemScreen from './screens/AddItem'

const AuthStack = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        },
    },
});

const TableStack = createStackNavigator({
    Main: {
        screen: MainScreen,
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

const AppStack = createBottomTabNavigator({
    Table: TableStack,
});

export default createAppContainer(
    createSwitchNavigator({
        Auth: AuthStack,
        App: AppStack,        
    },
));