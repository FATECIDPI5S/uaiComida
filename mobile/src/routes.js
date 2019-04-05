import { createDrawerNavigator } from 'react-navigation';
import Login from './screens/Login'
import NewUser from './screens/NewUser'
// import Intro from './screens/Intro'
import Main from './screens/Main'
// import About from './screens/About'

export default AppNavigator = createDrawerNavigator({

    Login: {
        screen: Login,
        navigationOptions: () => ({
            title: 'uaiComida',
        }),
    },

    NewUser: {
        screen: NewUser,
        navigationOptions: () => ({
            title: 'Cadastro',
        }),
    },

    // Intro: {
    //     screen: Intro,
    //     navigationOptions: () => ({
    //         title: 'Introdução',
    //     }),
    // },

    Main: {
        screen: Main,
        navigationOptions: () => ({
            title: 'Menu principal',
        }),
    },

    // About: {
    //     screen: About,
    //     navigationOptions: () => ({
    //         title: 'Sobre',
    //     }),
    // },
});