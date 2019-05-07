//metrics.js: Margens, paddings, tamanhos configurados pela plataforma (ex.: StatusBar),
//Border Radius, etc. Tudo que está ligado diretamente com espaçamento e ocupação de um 
//componente em tela vai nesse arquivo.

import { Dimensions, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

const metrics = {
  smallMargin: 5,
  baseMargin: 10,
  doubleBaseMargin: 20,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  tabBarHeight: 54,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  statusBarHeight: (Platform.OS === 'ios') ? 20 : 0,
  baseRadius: 3,
};

export default metrics;