import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './screens/Login'
import MainScreen from './screens/Main'
import TableScreen from './screens/Table'

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