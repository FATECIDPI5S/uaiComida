import { createStackNavigator, createAppContainer } from 'react-navigation';

import LoginScreen from './screens/Login'
import MainScreen from './screens/Main'

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
            title: 'uaiComida',
            headerStyle: {
                backgroundColor: '#ff3f34'
            },
            headerTintColor: '#fff'
        },
    },
}, {
        defaultNavigationOptions: {
            headerStyle: {
                color: '#FFF',
            },
            headerTintColor: '#FFF',
        }
    });

const App = createAppContainer(MainNavigator);

export default App;