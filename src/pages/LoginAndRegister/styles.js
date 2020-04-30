import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
    flex: 1;
    background-color: #fff;
    justify-content: center;
`
export const ImageContainer = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;
`

export const Title = styled.Text`
    color: #84BD93;
    font-size: 25px;
    
`

export const Form = styled.View`
    flex-direction: row;
    justify-content: center;
    margin: 0 30px 20px 20px;
    align-items: center;

`

export const InputArea = styled.TextInput.attrs({
    placeholderTextColor: '#A2a2a2'
})`
    flex: 1;
    border-color: #000;
    border-bottom-width: 1px;
    color: #000;
`
export const SubmitButton = styled(RectButton)`
    width: 90%;
    margin-top: 30px;
    background-color: #62BE92;
    padding: 18px;
    margin: 0 35px;
    border-radius: 4px;
`
export const SubmitButtonText = styled.Text`
    text-align: center;
    color: #fff;
    font-weight: bold;
`

export const ForgotPasswordText = styled.Text`
    text-align: center;
    margin-top: 20px;
    color: #A2A2A2;
`

export const RegisterText = styled.Text`
    text-align: center;
    padding-right: 10px; 
    margin-top: 20px;
    color: #A2A2A2;
    
`
export const RegisterLink = styled.Text`
    text-align: center;
    color: #62BE92;

`