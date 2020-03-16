import React, { useState, Component } from 'react';

import { TouchableOpacity, StyleSheet, Text, ImageBackground, AsyncStorage, FlatList } from 'react-native';

import firebase from 'firebase'

import Plants from './Assets/plants.png'

import { 
  Container, 
  Header,
  HeaderText, 
  MenuHeader, 
  MenuHeaderText, 
  Card, 
  Cards,
  TextCard,
} from './styles'

export default class pages extends Component {
  state = {
    active: "Home",
    pages: [],
    survey: {}
  }

  getSurvey = () => {
     firebase.database().ref('/').on('value', snapshot => {
      let data = snapshot.val() 
      let dataItens = data
      this.setState({
        survey: dataItens
      })
    })
  }
  componentDidMount(){
    this.getSurvey()
  }


  renderTab(tab) {
    const { active } = this.state;
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.setState({active: tab})}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <MenuHeaderText>
          {tab}
        </MenuHeaderText>
      </TouchableOpacity>
    );
  }

  renderScreens = (activeScreen) =>{
    const { navigation } = this.props
    const { survey } = this.state.survey

    console.log(survey)

    
    if(activeScreen == 'Home'){
      return(
        <Cards>
          <TouchableOpacity
            onPress={() => navigation.navigate('form')}
          >
            <Card style={styles.card}>
              <TextCard>Criar Vistoria</TextCard>
            </Card>   
          </TouchableOpacity>
      </Cards>
      )
    }
    if(activeScreen == 'Vistorias'){

      return(
        <Container>
          <FlatList
            data={survey}
            keyExtractor={item => item.name}
            renderItem={({item}) => (
              <TouchableOpacity>
                <Card>
                  <TextCard>{item.name}</TextCard>
                </Card>
              </TouchableOpacity>
            )}
          />
        </Container>
      )
    }
    else{
      return(
        <Container>
          <Text>Ops! Algo deu errao.</Text>
        </Container>
      )
    }
  }

  render(){

    const tabs = [ 'Home', 'Vistorias', 'Análises' ]
    const { active } = this.state

    return (
      <Container>
        <Header>
            <HeaderText >
              {
                active
              }
            </HeaderText>
        </Header>
        <MenuHeader>
          {tabs.map(tab => this.renderTab(tab))}
        </MenuHeader>
          <ImageBackground source={Plants} style={{width: '100%', height: '100%', flex: 1}}>
            { this.renderScreens(active) }
        </ImageBackground>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  tabs: {
    borderBottomColor: '#DDD',
    borderBottomWidth: StyleSheet.hairlineWidth,

  },
  tab: {
    marginRight: 5,
    paddingBottom: 5
  },
  active: {
    borderBottomColor: '#62BE92',
    borderBottomWidth: 3
  },
})