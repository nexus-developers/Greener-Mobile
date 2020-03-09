import React from 'react';
import { Image, Text, view } from 'react-native';

import { Container } from '../../Global/Styles/GlobalStyles';

import Icon from '../../Global/Assets/icon.png'

import { WellcomeContainer, InternContainer, LoginButton, LoginButtonText, RegisterButton, RegisterButtonText, Terms, Logo } from './styles'

export default function Wellcome({navigation}) {
  return (
    <Container>
        <WellcomeContainer>
            <InternContainer>
                <Logo source={Icon}/>
            </InternContainer>

        <InternContainer>
            <LoginButton
                onPress={() => navigation.navigate('login')}
            >
                <LoginButtonText>
                    LOGIN
                </LoginButtonText>
            </LoginButton>
            <RegisterButton
                onPress={() => navigation.navigate('register')}
            >
                <RegisterButtonText>
                    CADASTRE-SE
                </RegisterButtonText>
            </RegisterButton>

            <Terms>
                Termos de Uso
            </Terms>
        </InternContainer>
        </WellcomeContainer>
    </Container>
  );
}
