import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
//import firebase from 'react-native-firebase';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Selecione sua foto de perfil',
    takePhotoButtonTitle: "Tirar foto",
    chooseFromLibraryButtonTitle: "Selecionar da galeria",
    cancelButtonTitle: "Cancelar",
    cameraType: 'front',
    storageOptions: {
        skipBackup: true,
        path: 'GETapp',
    },
};

export default class NewUser extends Component {

    state = {
        email: '',
        password: '',
        passwordConfirm: '',
        isAuthenticated: false,
        foto: require('../img/profile.png'),
    };

    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
    */
    chooseProfilePicture = () => {
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);


            if (response.didCancel) {
                console.log('User cancelled image picker');
                this.setState({ foto: require('../img/profile.png') });
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({ foto: { uri: response.uri } })
            }
        });
    }

    mensagem = (titulo, mensagem) => {
        Alert.alert(
            titulo.toString(),
            mensagem.toString(),
            [
                { text: 'OK', onPress: () => { } },
            ],
            { cancelable: false },
        );
    };

    mensagemRedirect = () => {
        Alert.alert(
            'Usuário cadastrado com sucesso',
            'Acesse o sistema para utilizar os recursos.',
            [
                { text: 'Voltar para a tela de login', onPress: () => this.props.navigation.goBack() }
            ],
            { cancelable: false },
        )
    }

    cadastrar = async () => {
        const { email, password, passwordConfirm } = this.state;
        if (email && password && passwordConfirm) {
            if (password === passwordConfirm) {

                try {
                    //const newUser = await firebase.auth().createUserWithEmailAndPassword(email, password).then(
                    () => { this.mensagemRedirect(); }
                    //);

                } catch (error) {
                    //console.log(error);
                    this.mensagem('Não foi possível concluir o cadastro', error);
                    return;
                }
            } else {
                this.mensagem('Senhas diferentes', 'Confirme se a senha que foi inserida nos campos estão corretas e coincidem.');
                return;
            }
        } else {
            this.mensagem('Campos vazios', 'Preencha os campos necessários para o cadastro do usuário.');
            return;
        }
    };

    render() {
        return (
            <View style={styles.container}>

                <TouchableOpacity onPress={this.chooseProfilePicture}>
                    <Image source={this.state.foto} style={styles.foto} />
                </TouchableOpacity>

                <View style={styles.inputContainer}>
                    <Icon style={styles.inputIcon} name="user" color="#4F8EF7" size={35} />
                    <TextInput
                        placeholder={'Digite seu e-mail'}
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
                        placeholder={'Digite sua senha'}
                        style={styles.input} value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        secureTextEntry={true}
                        ref={(input) => { this.secondTextInput = input; }}
                        returnKeyType={"next"}
                        onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Icon style={styles.inputIcon} name="lock" color="#4F8EF7" size={35} />
                    <TextInput
                        placeholder={'Confirme sua senha'}
                        style={styles.input} value={this.state.passwordConfirm}
                        onChangeText={passwordConfirm => this.setState({ passwordConfirm })}
                        secureTextEntry={true}
                        ref={(input) => { this.thirdTextInput = input; }}
                        returnKeyType={"done"}
                        onSubmitEditing={this.cadastrar}
                    />
                </View>

                {/* <TouchableOpacity style={styles.button} onPress={this.cadastrar}> */}
                <TouchableOpacity style={styles.button} onPress={this.props.navigation.goBack()}>
                    <Icon name="user-plus" color="#4F8EF7" size={50} />
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

            </View >
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center'
    },
    foto: {
        width: 180,
        height: 180,
        margin: 15,
        borderRadius: 999,
        //marginBottom: 15,
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