import {createStackNavigator, createAppContainer} from 'react-navigation';

import LoginScreen from './screens/login'
import SignUpScreen from './screens/signup'
import MainScreen from './screens/main'

const MainNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        },
    },
    SignUp: {
        screen: SignUpScreen,
        navigationOptions: {
            header: null
        },
    },
    Main: {
        screen: MainScreen,
        navigationOptions: {
            header: null
        },
    },
},{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#ff3f34'
        },
        headerTintColor: '#fff'
    }
});

const App = createAppContainer(MainNavigator);

export default App;