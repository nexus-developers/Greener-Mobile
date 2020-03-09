import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'

// Stack Navigator
import Wellcome from './src/pages/Wellcome/Wellcome'
import Login from './src/pages/LoginAndRegister/Login'
import Register from './src/pages/LoginAndRegister/Register'
import recuperarSenha from './src/pages/LoginAndRegister/recuperarSenha'

// Tab Navigator
import MainRoutes from './src/pages/Main/Main.routes'

const Stack = createStackNavigator()



export default function Routes(){
    return(
        <Stack.Navigator headerMode="none" initialRouteName='wellcome'>
            <Stack.Screen name='wellcome' component={Wellcome}/>
            <Stack.Screen name='login' component={Login} />
            <Stack.Screen name='register' component={Register}/>
            <Stack.Screen name='recuperarSenha' component={recuperarSenha} />
            <Stack.Screen name='main' component={MainRoutes} />
        </Stack.Navigator>

    )
}

