import React from 'react';
import { Button } from 'react-native';

import { Container } from '../../Global/Styles/GlobalStyles';
import {
    FormTitle,
    InternContainer,
    LabelText,
    InputText,
    CreateSurvey,
    CreateSurveyText,
    CancelSurvey,
    CancelSurveyText
} from './styles'

export default function Form({ navigation }) {
  return (
    <Container>
        <FormTitle>Adicione as informações pedidas, para criar uma vistoria.</FormTitle>
        <InternContainer>
            <LabelText>Nome do Próprietáio:</LabelText>
            <InputText/>

            <LabelText>Data:</LabelText>
            <InputText/>

            <LabelText>Localidade:</LabelText>
            <InputText/>

            <CreateSurvey>
                <CreateSurveyText>
                    Criar Vistoria
                </CreateSurveyText>
            </CreateSurvey>

            <CancelSurvey
                onPress={() => navigation.navigate('main')}
            >
                <CancelSurveyText>
                    Cancelar Vistoria
                </CancelSurveyText>
            </CancelSurvey>
        </InternContainer>
    </Container>
  );
}
