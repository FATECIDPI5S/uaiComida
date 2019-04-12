import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './screens/Login'
import MainScreen from './screens/Main'
import TableScreen from './screens/Table'
import AddItemScreen from './screens/AddItem'

const MainNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        },
    },
    Main: {
        screen: MainScreen,
        navigationOptions: {
            title: 'Mesas',
        },
    },
    Table: {
        screen: TableScreen,
    },
    AddItem: {
        screen: AddItemScreen,
    }
}, {
        defaultNavigationOptions: {
            headerStyle: {
                color: '#FFF',
                backgroundColor: '#ff3f34',
            },
            headerTintColor: '#FFF',
        }
    });

const App = createAppContainer(MainNavigator);

export default App;