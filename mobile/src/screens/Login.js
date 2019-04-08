import React, {Component} from 'react';
import {View, StyleSheet,  Image, Text, TextInput, TouchableOpacity} from 'react-native';
import {Button, Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {
    render() {
        return (
          //<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
          //For apps:
          //Place the attribution on the credits/description page of the application.
          <View style={styles.container}>

            <View style={styles.logoContainer}>
              <Image
                style={styles.logo}
                source={require('../img/logo.png')}/>    
              <Text style={styles.title}>uaiComida</Text>        
            </View>

            <View style={styles.formContainer}>

              <View style={styles.inputContainer}>
                <Icon
                  style={styles.inputIcon}
                  name='user'
                  size={25}
                />
                <TextInput
                  placeholder='Digite seu e-mail'
                  keyboardType='email-address'
                  placeholderTextColor='rgba(255, 255, 255, 0.6)'
                  returnKeyType='next'
                  onSubmitEditing={() => this.passwordInput.focus()}
                  autoCapitalize='none'
                  autoCorrect={false}
                  style={styles.inputText}
                />
              </View>
              
              <View style={styles.inputContainer}>
                <Icon
                  style={styles.inputIcon}
                  name='lock'
                  size={25}
                />
                <TextInput
                  placeholder='Digite sua senha'
                  keyboardType='email-address'
                  placeholderTextColor='rgba(255, 255, 255, 0.6)'
                  returnKeyType='go'
                  ref={(input) => this.passwordInput = input}
                  style={styles.inputText}
                />
              </View>

              <Button
                title="ENTRAR"
                containerStyle={{
                  width: '85%',                  
                }}
                buttonStyle={styles.buttonContainer}
                titleStyle={styles.buttonText}
                onPress={() => this.props.navigation.navigate('Main')}
              />

              <Button
                title="INSCREVA-SE"
                containerStyle={{
                  width: '85%',                  
                }}
                buttonStyle={styles.buttonContainer}
                titleStyle={styles.buttonText}
                onPress={() => this.props.navigation.navigate('SignUp')}
              />

            </View>

          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff3f34',
    justifyContent: 'space-evenly',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 26,
    marginTop: 5,    
    textAlign: 'center',
    opacity: 0.8,
  },
  logo: {
    width: 100,
    height: 100,
  },
  formContainer: {
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ff5e57',
    width: '85%',
    height: 40,
    borderRadius: 30,
    marginBottom: 10,
  },
  inputIcon: {
    paddingLeft: 20,
    paddingRight: 10,
    color: '#fff',
    opacity: 0.6,
  },
  inputText: {
    flex: 1,
    paddingRight: 20,
    color: '#fff',
    fontSize: 16,
  },
  buttonContainer: {
    backgroundColor: '#c0392b',
    height: 40,
    marginTop: 10,
    borderRadius: 30,
  },
  buttonText: {
    color: 'rgba(255, 255, 255, 0.6)',
  },
});