import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler'

export const InternContainer = styled.View`
    margin-top: 40px;
    justify-content: center;
    align-items: center;
`;

export const FormTitle = styled.Text`
    align-items: flex-start;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin: 70px 20px 0;
`

export const LabelText = styled.Text`
    font-weight: bold;
    font-size: 16px;
    margin-top: 20px;
`

export const InputText =styled.TextInput`
    margin-top: 10px;
    background-color: #fff;
    width: 300px;
    height: 40px;
    border: 1px solid;
    border-color: #ddd;
    border-radius: 4px;
`
export const CreateSurvey = styled(RectButton)`
    margin-top: 30px;
    background-color: #62BE92;
    padding: 15px;
    width: 300px;
    border-radius: 4px;
`

export const CreateSurveyText = styled.Text`
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
`

export const CancelSurvey = styled(RectButton)`
    margin-top: 20px;
    background-color: #EF0749;
    padding: 15px;
    width: 300px;
    border-radius: 4px;
`

export const CancelSurveyText = styled.Text`
    text-align: center;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
`
