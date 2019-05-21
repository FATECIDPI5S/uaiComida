import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import { Avatar, Divider } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import firebase from 'react-native-firebase'
import color from '../styles/Colors'

export default class Config extends Component {

    state = {
        apelido:'',
        email:'',
        empresaUid:'',
        nomeFantasia:'',        
        logoUri:'https://fundacaofat.org.br/wp-content/uploads/2019/03/logo-centropaulasouza-corfatec2.png'
    };

    async getUserData(){        
        const userUID = firebase.auth().currentUser.uid
        
        await firebase
                .firestore()
                .collection("funcionario")
                .doc(userUID)
                .get()
                .then(doc => {
                    if (doc.exists) {
                        this.setState({ apelido: doc.get('apelido') })
                        this.setState({ email: doc.get('email') })
                    } else {
                        console.log("funcionario: No such document!");
                    }
                })
                .catch(function(error) { 
                    console.log(error);
                })

        await firebase
                .firestore()
                .collection("empresaFuncionarios")
                .where(userUID, "==", true)
                .get()
                .then(query => {
                    const doc = query.docs[0]
                    if (doc.exists) {
                        this.setState({ empresaUid: doc.id })
                    } else {
                        console.log("empresaFuncionarios: No such document!");
                    }
                })
                .catch(function(error) {
                    console.log(error);  
                })

        await firebase
                .firestore()
                .collection("empresa")
                .doc(this.state.empresaUid)
                .get()
                .then(doc => {
                    console.log(doc)
                    if (doc.exists) {
                        this.setState({ logoUri: doc.get('logoURL') })
                        this.setState({ nomeFantasia: doc.get('nomeFantasia') })
                    } else {
                        console.log("funcionario: No such document!");
                    }
                })
                .catch(function(error) { 
                    console.log(error);
                })    
    }

    componentWillMount() {
        this.getUserData()            
    }
      
    render () {
        return (
            <View style={styles.container}>

                <View style={styles.containerInfo}>
                    <View style={{flex:4,flexDirection:'row'}}>
                        <View style={styles.containerInfoLogo}>
                            <Avatar
                                rounded
                                source={{
                                    uri: this.state.logoUri,
                                }}
                                size={130}
                            />
                        </View>
                        <View style={styles.containerInfoText}>
                            <Text numberOfLines={1} style={styles.text}>Empresa:</Text>
                            <Text numberOfLines={1} style={styles.text}>{this.state.nomeFantasia}</Text>
                            <Text numberOfLines={1} style={styles.text}>Usuário:</Text>
                            <Text numberOfLines={1} style={styles.text}>{this.state.apelido}</Text>
                        </View>
                        
                    </View>

                    <Divider style={styles.divider} />

                    <View style={{flex:1,paddingLeft:20,paddingRight:20,alignItems:'center',justifyContent:'center',}}>
                        
                        <Text numberOfLines={1} style={styles.text}>{this.state.email}</Text>

                    </View>

                    <Divider style={styles.divider} />
                    
                </View>                

                <View style={styles.containerOptions}>                    

                    <TouchableOpacity style={styles.button}>
                        <View style={styles.iconContainer}>
                            <Icon
                                name='edit'
                                size={30}
                                color={color.red}
                            />
                        </View>                        
                        <Text
                            style={styles.buttonText}>
                            Alterar senha
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <View style={styles.iconContainer}>
                            <Icon
                                name='flag'
                                size={30}
                                color={color.red}
                            />
                        </View>
                        <Text
                            style={styles.buttonText}>
                            Idioma
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <View style={styles.iconContainer}>
                            <Icon
                                name='info-circle'
                                size={30}
                                color={color.red}
                            />
                        </View>
                        <Text
                            style={styles.buttonText}>
                            Sobre
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button}>
                        <View style={styles.iconContainer}>
                            <Icon
                                name='book'
                                size={30}
                                color={color.red}
                            />
                        </View>
                        <Text
                            style={styles.buttonText}>
                            Termo de uso
                        </Text>
                    </TouchableOpacity>
                    
                    <Divider style={styles.divider} />

                    <TouchableOpacity
                        style={styles.button}
                        onPress={
                            async () => {
                                try{
                                    await firebase.auth().signOut()
                                    this.props.navigation.navigate('Login')
                                }catch(error){
                                    console.log(error)
                                }           
                            }
                        }>
                        <View style={styles.iconContainer}>
                            <Icon
                                name='sign-out'
                                size={30}
                                color={color.red}
                            />
                        </View>
                        <Text
                            style={styles.buttonText}>
                            Sair
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerInfo: {
        flex: 2,
    },
    containerInfoLogo: {
        flex: 2,
        alignItems:'center',
        justifyContent:'center',
    },
    containerInfoText: {
        flex: 3,
        paddingLeft:5,
        justifyContent:'space-around',
    },
    containerOptions: {
        flex: 3,
        padding: 20,
        justifyContent:'space-around', 
    },
    button: {
        flexDirection:'row',
        borderWidth: 1,
        borderColor: color.red,
        height:50,
        alignItems:'center',
        borderRadius:10,
    },
    iconContainer: {
        flex: 1,
        alignItems:'center',
    },
    buttonText: {
        flex:3,
        fontSize: 18,
        color:color.black
    },
    text: {
        fontSize: 18,
        color:color.black,
    },
    divider: {
        height:1,
        backgroundColor:color.red,
        marginLeft:20,
        marginRight:20,
    }
});