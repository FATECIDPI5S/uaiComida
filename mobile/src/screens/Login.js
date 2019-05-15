import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase'

export default class Login extends Component {

  componentWillMount() {
    if(firebase.auth().currentUser){
      this.props.navigation.navigate('TableList')
    }
  }

  state = {
    email: 'teste@teste.com',
    password: 'teste1',
    errorMessage: null,
    handleLogin: false,
  }
  
  handleLogin = () => {
    this.setState({handleLogin: true})
    const { email, password } = this.state

    if(email == '' || password == '' || email == null || password == null){
      this.setState({ errorMessage: 'Por favor, preencha todos os campos' })
      return
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(
        () => {
          this.setState({ handleLogin: false })
          this.props.navigation.navigate('TableList')          
        }
      )
      .catch(error => this.setState({ errorMessage: error.message, handleLogin: false }))
  }

  render() {
    return (
      //<div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
      //For apps:
      //Place the attribution on the credits/description page of the application.
      <View style={styles.container}>

        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require('../img/logo.png')} />
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
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
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
              placeholderTextColor='rgba(255, 255, 255, 0.6)'
              returnKeyType='go'
              ref={(input) => this.passwordInput = input}
              style={styles.inputText}
              secureTextEntry={true}              
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
          </View>

          {this.state.errorMessage && <Text style={{ color: 'white' }}>{this.state.errorMessage}</Text>}

          <Button
            title="ENTRAR"
            containerStyle={{
              width: '85%',
            }}
            icon={{
              type: "font-awesome",
              name: "sign-in",
              size: 30,
              color: "white",
              opacity: 0.6,
              marginRight: 5,
            }}
            buttonStyle={styles.buttonContainer}
            titleStyle={styles.buttonText}
            loading={this.state.handleLogin}
            onPress={this.handleLogin}
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
    height: 60,
    marginTop: 10,
    borderRadius: 30,
  },
  buttonText: {
    color: 'rgba(255, 255, 255, 0.6)',
  },
});