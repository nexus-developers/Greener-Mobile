import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Login from './src/pages/Login/Login'
import Register from './src/pages/Register'

export default function Routes(){
    const Stack = createStackNavigator()
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen 
                    name='login' 
                    component={Login} 
                    />
                <Stack.Screen name='Register' component={Register}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
