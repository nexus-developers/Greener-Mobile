import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Main from './Main'
import Settings from '../Settings/Settings'

const Tab = createMaterialTopTabNavigator();

export default function MainRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='main' component={Main} />
            <Tab.Screen name='settings' component={Settings} />
        </Tab.Navigator>
    )
}
