import React from 'react';
import { createAppContainer } from 'react-navigation'
import AppNavigator from './routes';
import './config/StatusBarConfig'

const AppContainer = createAppContainer(AppNavigator);
const App = () => <AppContainer />

export default App;