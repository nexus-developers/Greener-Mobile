import React, { Component }  from 'react';

import { ActivityIndicator } from 'react-native'

import firebase from 'firebase'

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


export default class Form extends Component {
    state = {
        name: '',
        date: '',
        local: '',
        loading: false,
        survey: []
    }

    writeUserData(name, date, local){

        const { navigation } = this.props
        const { survey } = this.state;
        // const name = this.ref.name.value;
        // const date = this.ref.date.value;
        // const local = this.ref.local.value;

        survey.push({ name, date, local });
        this.setState({survey});
        

        firebase.database().ref().child('survey').set(this.state.survey).then((data) => {
            console.log('data', data);
        }).catch((error) => {
            console.log('error', error)
        })
        this.setState({
            name: '',
            date: '',
            local: '',
            loading: false
        })
        // this.ref.name.value = '';
        // this.ref.date.value = '';
        // this.ref.local.value = '';
        navigation.navigate('main')
    }
    
    
    render(){
        const { navigation } = this.props
        const { name, local, date, loading } = this.state
        return (
            <Container>
                <FormTitle>Adicione as informações pedidas, para criar uma vistoria.</FormTitle>
                <InternContainer>
                    <LabelText>Nome do Próprietáio:</LabelText>
                    <InputText
                        onChangeText={nameText => this.setState({ name: nameText })}
                        onSubmitEditing={this.handleAddSurvey}
                        value={name}
                        // ref='name'
                    />

                    <LabelText>Data:</LabelText>
                    <InputText
                        onChangeText={dateText => this.setState({ date: dateText })}
                        onSubmitEditing={this.handleAddSurvey}
                        value={date}
                        // ref='date'
                    />

                    <LabelText>Localidade:</LabelText>
                    <InputText
                        onChangeText={localText => this.setState({ local: localText })}
                        onSubmitEditing={this.handleAddSurvey}
                        value={local}
                        // ref='local'
                    />

                    <CreateSurvey
                        onPress={() => {
                            this.writeUserData(name, date, local)
                            this.setState({ loading: true })
                        }}
                    >
                        {
                            loading ?
                            (
                            <ActivityIndicator size={20} color='#fff' />
                            ) : (
                            <CreateSurveyText>
                                Criar Vistoria
                            </CreateSurveyText>
                        )
                        }
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
}
