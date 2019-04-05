import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, Image, Alert } from 'react-native';
//import firebase from 'react-native-firebase';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {

    state = {
        email: '',
        password: '',
        isAuthenticated: false,
        abc: '',
    };

    mensagem = (msg) => {
        Alert.alert(
            'Falha ao acessar',
            msg.toString(),
            [
                { text: 'Quero me cadastrar', onPress: () => this.props.navigation.navigate('CadastrarUsuario') },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false },
        );
    };

    login = async () => {
        const { email, password } = this.state;
        if (email && password) {

            try {
                //const user = await firebase.auth().signInWithEmailAndPassword(email, password);
                this.setState({ isAuthenticated: true });
                this.props.navigation.navigate('Main');
                console.log(user);

            } catch (error) {
                console.log(error);
                this.mensagem(error);
            }

        } else {
            this.mensagem('Preencha os campos.');
        }
    };

    render() {
        return (
            <View style={styles.container}>

                <View style={{}}>
                    <Image
                        style={styles.logo}
                        source={require('../img/logo.png')}>
                    </Image>
                </View>

                <View style={styles.inputContainer}>
                    <Icon style={styles.inputIcon} name="user" color="#4F8EF7" size={35} />
                    <TextInput
                        placeholder="Digite seu e-mail"
                        placeholderStyle={{ marginBottom: 0 }}
                        style={styles.input}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        returnKeyType={"next"}
                        onSubmitEditing={() => { this.secondTextInput.focus(); }}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Icon style={styles.inputIcon} name="lock" color="#4F8EF7" size={35} />
                    <TextInput
                        placeholder="Digite sua senha"
                        placeholderStyle={{ marginBottom: 0 }}
                        style={styles.input}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        secureTextEntry={true} returnKeyType={"go"}
                        ref={(input) => { this.secondTextInput = input; }}
                        // onSubmitEditing={this.login}
                        onSubmitEditing={this.props.navigation.navigate('Main')}
                    />
                </View>


                <TouchableOpacity style={styles.link} onPress={() => this.props.navigation.navigate('NewUser')}>
                    <Text style={styles.linkText}>Cadastre-se agora!</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity style={styles.button} onPress={this.login}> */}
                <TouchableOpacity style={styles.button} onPress={this.props.navigation.navigate('Main')}>
                    <Icon name="sign-in" color="#4F8EF7" size={50} />
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </View >
        );
    };

    componentDidMount() {
        console.log('Usuário logado: ', this.state.isAuthenticated)
    }

    componentDidUpdate() {
        console.log('Usuário logado: ', this.state.isAuthenticated)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        width: 175,
        height: 175,
        marginBottom: 15,
    },
    link: {

    },
    linkText: {
        color: '#9CC',
        fontSize: 12,
        margin: 10,
        marginBottom: 0,
    },
    button: {
        backgroundColor: 'transparent',
        height: 60,
        width: 250,
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "#CCC",
    },
    buttonText: {
        textAlign: 'center',
        paddingLeft: 10,
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#fff',
        width: '90%',
        height: 48,
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 8,
        margin: 5,
    },
    inputIcon: {
        paddingLeft: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        paddingRight: 38,
        textAlign: 'center',
    },
});