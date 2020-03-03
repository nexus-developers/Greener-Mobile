import React from 'react';
// import firebase from '../../firebase'


import { EvilIcons } from '@expo/vector-icons'

import { Image, Text } from 'react-native';

import Icon from './Assets/icon.png'


import { Container , ImageContainer,Title, Form, InputArea, SubmitButton, SubmitButtonText, ForgotPassword, ForgotPasswordText, RegisterText, RegisterLink } from './styles'

export default function Logins() {
  return (
    <Container>
      <ImageContainer>
        <Image source={Icon} /> 
        <Title>GREENER</Title>
      </ImageContainer>
    <Form>
      <EvilIcons name='user' size={30} color='#84BD93'/>
      <InputArea
        autoCapitalize='none'
        placeholder='Usuário'
      >
      </InputArea>
    </Form>
    <Form>
      <EvilIcons name='lock' size={30} color='#84BD93'/>
      <InputArea
        autoCapitalize='none'
        placeholder='Senha'
      >
      </InputArea>
    </Form>

    <SubmitButton>
      <SubmitButtonText>LOGIN</SubmitButtonText>
    </SubmitButton>

      <ForgotPasswordText>Esqueceu a senha?</ForgotPasswordText>

      <RegisterText>
        Não possui cadastro? 
        <RegisterLink>
          CADASTRE-SE
        </RegisterLink>
      </RegisterText>

    </Container>
  );
}

