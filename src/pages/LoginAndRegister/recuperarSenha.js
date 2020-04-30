import React, { useState } from 'react';

import firebase from '../../firebase'

import { Image, ActivityIndicator, Alert, KeyboardAvoidingView, StyleSheet } from 'react-native';

import { EvilIcons } from '@expo/vector-icons';

import { Container, ImageContainer, Form, InputArea, SubmitButton, SubmitButtonText } from './styles';

import Icon from '../../Global/Assets/icon.png'

export default function Register({ navigation }) {
  const [user, setUser] = useState('')
  const [Loading, setLoading] = useState(false)

  const onResetPasswordPress = () => {
    setLoading(true)
    firebase.auth().sendPasswordResetEmail(user)
      .then(() => {
        Alert.alert("O Email para a recuperação da senha foi enviado");
        navigation.navigate('login')
        setLoading(false)
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
          placeholder='Insira o Email da sua conta'
          value={user}
          onChangeText={user => setUser(user)}
        >
        </InputArea>
      </Form>

      <SubmitButton
        onPress={() => onResetPasswordPress()}
      >
        {
          Loading ? (
            <ActivityIndicator color='#fff' />
          ) : (
              <SubmitButtonText>
                Mandar Email
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