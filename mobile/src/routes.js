import {createStackNavigator, createAppContainer} from 'react-navigation';

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
            header: null
        },
    },
});

const App = createAppContainer(MainNavigator);

export default App;