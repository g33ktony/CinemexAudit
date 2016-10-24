'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Alert,
  TouchableHighlight,
  View,
  Image,
  Dimensions,
  TextInput,
} from 'react-native';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;
class Login extends Component {

  constructor(props) {
     super(props);
     this.state = { text: 'Usuario' };
   }

  render() {
    return (
      <Image source = {require('../assets/login.jpg')} resizeMode='cover' style = {style.backCover}>
        <View style = {style.container}>
          <Image style = {style.logo} resizeMode='contain' source = {require('../assets/logo.png')} />
          <Text style = {style.welcome}>Bienvenido, inicia sesión.</Text>
          <TextInput style = {style.input} placeholder = "Usuario" onChangeText = {(text) => this.setState({text})} placeholderTextColor = {'#000'} underlineColorAndroid  = {'transparent'}></TextInput>
          <TextInput style = {style.input} placeholder = "Contraseña" placeholderTextColor = {'#000'} underlineColorAndroid  = {'transparent'}></TextInput>
          <TouchableHighlight style = {style.button}>
            <Text style = {style.buttonText}>
              Iniciar sesión
            </Text>
          </TouchableHighlight>
          <Text style = {style.recoverText}>Recuperar contraseña</Text>
        </View>
      </Image>
    )
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,.8)',
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    flexDirection: 'column',
  },
  backCover: {
    flex: 1,
    width: screenWidth,
    height: screenHeight,
  },
  logo: {
    top: 60,
    width: screenWidth,
    overlayColor: 'black',
    marginBottom: 50,
  },
  welcome: {
    color: 'white',
    textAlign: 'center',
    marginBottom: 45,
    fontSize: 18,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: 300,
    height: 40,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    marginTop: 40,
    width: 180,
    backgroundColor: '#DF0F2E',
    borderRadius: 8,
  },
  buttonText: {
    padding: 6,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
  recoverText: {
    textAlign: 'center',
    color: 'white',
    marginTop: 100,
    paddingBottom: 15,
  },
});


module.exports = Login;
