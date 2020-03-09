import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Wellcome from './src/pages/Wellcome/Wellcome'
import Login from './src/pages/LoginAndRegister/Login'
import Register from './src/pages/LoginAndRegister/Register'
import recuperarSenha from './src/pages/LoginAndRegister/recuperarSenha'
import Main from './src/pages/Main'

export default function Routes(){
    const Stack = createStackNavigator()
    return(
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name='wellcome' component={Wellcome}/>
                <Stack.Screen name='login' component={Login} />
                <Stack.Screen name='register' component={Register}/>
                <Stack.Screen name='recuperarSenha' component={recuperarSenha} />
                <Stack.Screen name='main' component={Main} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
