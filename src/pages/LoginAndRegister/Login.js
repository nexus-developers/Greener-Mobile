import React, { useState } from 'react';

import firebase from '../../firebase'

import { EvilIcons } from '@expo/vector-icons'

import { Image, Text, ActivityIndicator } from 'react-native';

import Icon from '../../Global/Assets/icon.png'


import { Container , ImageContainer,Title, Form, InputArea, SubmitButton, SubmitButtonText, ForgotPassword, ForgotPasswordText, RegisterText, RegisterLink } from './styles'

export default function Logins({ navigation }) {

  const [ user, setUser ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ Loading, setLoading ] = useState(false)

  const handleLogin = () => {

    setLoading(true)

    firebase
      .auth()
      .signInWithEmailAndPassword(user, password)
      .then(() => {
        setLoading(false)
        setUser('')
        setPassword('')
        navigation.navigate('main')
      })
      .catch(error => console.log(error));
      
  }

  const onCreateAccountPress = () => {
    navigation.navigate('register')
  } 

  const onForgotPasswordPress = () => {
    navigation.navigate('recuperarSenha')
  }

  return (
    <Container>
      <ImageContainer>
        <Image source={Icon} /> 
      </ImageContainer>
    <Form>
      <EvilIcons name='user' size={30} color='#62BE92'/>
      <InputArea
        autoCapitalize='none'
        placeholder='Usuário'
        value={user}
        onChangeText={user => setUser(user)}
      >
      </InputArea>
    </Form>
    <Form>
      <EvilIcons name='lock' size={30} color='#62BE92'/>
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
            <ActivityIndicator color='#fff'/>
          ) : (
            <SubmitButtonText>
              LOGIN
            </SubmitButtonText>
          )
        }
    </SubmitButton>

      <ForgotPasswordText onPress={() => onForgotPasswordPress()}>Esqueceu a senha?</ForgotPasswordText>

      <RegisterText>
        Não possui cadastro? 
        <RegisterLink onPress={() => onCreateAccountPress()}>
          CADASTRE-SE
        </RegisterLink>
      </RegisterText>

    </Container>
  );
}

