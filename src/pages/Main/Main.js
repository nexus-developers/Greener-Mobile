import React, { useState, Component } from 'react';

import { TouchableOpacity, StyleSheet, Text, ImageBackground, AsyncStorage } from 'react-native';

import { ScrollView } from 'react-native-gesture-handler'

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
    survey: []
  }

  async componentDidMount(){
    
    try{
      const a = await AsyncStorage.getItem('survey')

      if(a === null){
        return null

      }
      else{
        this.setState({ survey: a })
      }
    }catch(e){
      alert(e)
    }
    
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

  renderScreens(activeScreen){
    const { navigation } = this.props
    const { survey } = this.state

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
          <Text>{survey.a.name}</Text>
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