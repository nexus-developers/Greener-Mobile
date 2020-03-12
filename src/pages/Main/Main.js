import React, { useState, Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';

import { Container, Header, HeaderText, MenuHeader, MenuHeaderText } from './styles'

export default class pages extends Component {
  state = {
    active: "Home",
    pages: []
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

  render(){

    const tabs = [ 'Home', 'Visitas', 'Histórico' ]
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