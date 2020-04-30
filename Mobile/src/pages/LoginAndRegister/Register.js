import React, { useState } from 'react';

import firebase from '../../firebase'

import { Image, ActivityIndicator, Alert, KeyboardAvoidingView, StyleSheet } from 'react-native';

import { EvilIcons } from '@expo/vector-icons';

import { Container, ImageContainer, Form, InputArea, SubmitButton, SubmitButtonText } from './styles';

import Icon from '../../Global/Assets/icon.png'

export default function Register({ navigation }) {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [Loading, setLoading] = useState(false)

  const Registrar = () => {
    setLoading(true)
    if (password !== confirmPassword) {
      Alert.alert("As senhas estão diferentes, por favor verifique.");
      setLoading(false)
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(user, password)
      .then(() => {
        setLoading(false)
        navigation.navigate('main')
      }, (error) => {
        Alert.alert(error.message);
        setLoading(false)
      });
  }

  return (
    <KeyboardAvoidingView style={styles.background} behavior="padding" enabled>
      <ImageContainer>
        <Image source={Icon} />
      </ImageContainer>
      <Form>
        <EvilIcons name='user' size={30} color='#84BD93' />
        <InputArea
          autoCapitalize='none'
          placeholder='Insira seu Email'
          value={user}
          onChangeText={user => setUser(user)}
        >
        </InputArea>
      </Form>
      <Form>
        <EvilIcons name='lock' size={30} color='#84BD93' />
        <InputArea
          autoCapitalize='none'
          type='password'
          placeholder='Escolha uma senha'
          secureTextEntry={true}
          value={password}
          onChangeText={password => setPassword(password)}
        >
        </InputArea>
      </Form>
      <Form>
        <EvilIcons name='lock' size={30} color='#84BD93' />
        <InputArea
          autoCapitalize='none'
          type='password'
          placeholder='Confirme sua Senha'
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={confirmPassword => setconfirmPassword(confirmPassword)}
        >
        </InputArea>
      </Form>
      <SubmitButton
        onPress={() => Registrar()}
      >
        {
          Loading ? (
            <ActivityIndicator color='#fff' />
          ) : (
              <SubmitButtonText>
                Registrar
              </SubmitButtonText>
            )
        }
      </SubmitButton>

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