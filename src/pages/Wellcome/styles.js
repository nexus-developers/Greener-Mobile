import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler'

export const WellcomeContainer = styled.View`
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
`;

export const Logo = styled.Image`
    justify-content: center;
    align-items: center;
    margin: 150px 20px 20px ;
`

export const InternContainer = styled.View`
    justify-content: center;
    align-self: center;;
`

export const LoginButton = styled(RectButton)`
    margin-top: 90px;
    width: 280px;
    background-color: #62BE92;
    padding: 18px;
    border-radius: 4px;

`

export const RegisterButton = styled(RectButton)`
    margin-top: 30px;
    width: 280px;
    background-color: #DDD;
    padding: 18px;
    border-radius: 4px;
`

export const LoginButtonText = styled.Text`
    text-align: center;
    font-weight: bold;
    color: #fff;
`
export const RegisterButtonText = styled.Text`
    text-align: center;
    font-weight: bold;
    color: #003;
`

export const Terms = styled.Text`
    margin-top: 20px;
    color: #DDD;
    text-align: center;
`