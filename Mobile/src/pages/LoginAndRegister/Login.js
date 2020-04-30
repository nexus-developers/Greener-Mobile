import React, { useState } from 'react';

import firebase from '../../firebase'

import { EvilIcons } from '@expo/vector-icons'

import { Image, Text, ActivityIndicator, KeyboardAvoidingView, StyleSheet, Alert } from 'react-native';

import Icon from '../../Global/Assets/icon.png'


import { Container, ImageContainer, Title, Form, InputArea, SubmitButton, SubmitButtonText, ForgotPassword, ForgotPasswordText, RegisterText, RegisterLink } from './styles'

export default function Logins({ navigation }) {

  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [Loading, setLoading] = useState(false)

  const handleLogin = () => {

    setLoading(true)
    
    if (password == "" && user == "") {
      Alert.alert("Por favor, preencha os campos");
      setLoading(false)
      return;
    }

    if (password == "") {
      Alert.alert("Por favor, preencha o campo da senha");
      setLoading(false)
      return;
    }
    if (user == "") {
      Alert.alert("Por favor, preencha o campo de user");
      setLoading(false)
      return;
    }
    
    firebase
      .auth()
      .signInWithEmailAndPassword(user, password)
      .then(() => {
        setLoading(false)
        setUser('')
        setPassword('')
        navigation.navigate('main')
      }, (error) => {
        Alert.alert(error.message);
        setLoading(false)
      })
      .catch(error => console.log(error));
        setLoading(false)
  }

  const onCreateAccountPress = () => {
    navigation.navigate('register')
  }

  const onForgotPasswordPress = () => {
    navigation.navigate('recuperarSenha')
  }

  return (

    <KeyboardAvoidingView style={styles.background} behavior="padding" enabled>
      <ImageContainer>
        <Image source={Icon} />
      </ImageContainer>
      <Form>
        <EvilIcons name='user' size={30} color='#62BE92' />
        <InputArea
          autoCapitalize='none'
          placeholder='Usuário'
          value={user}
          onChangeText={user => setUser(user)}
        >
        </InputArea>
      </Form>
      <Form>
        <EvilIcons name='lock' size={30} color='#62BE92' />
        <InputArea
          autoCapitalize='none'
          type='password'
          placeholder='Senha'
          value={password}
          onChangeText={password => setPassword(password)}
        >
        </InputArea>
      </Form>

      <SubmitButton
        onPress={() => handleLogin()}
      >
        {
          Loading ? (
            <ActivityIndicator color='#fff' />
          ) : (
              <SubmitButtonText>
                LOGIN
              </SubmitButtonText>
            )
        }
      </SubmitButton>

      <ForgotPasswordText onPress={() => onForgotPasswordPress()}>Esqueceu a senha ?</ForgotPasswordText>

      <RegisterText>
        Não possui cadastro ? <RegisterLink onPress={() => onCreateAccountPress()}> CADASTRE-SE
        </RegisterLink>
      </RegisterText>
    </KeyboardAvoidingView>


  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  }
})
