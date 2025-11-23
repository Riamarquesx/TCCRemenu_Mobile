import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
import EsqueciSenha from './screens/EsqueciSenha';
import CriarConta from './screens/CriarConta';
import Home from './screens/Home';  // <-- ADICIONE ISTO

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />
        <Stack.Screen name="CriarConta" component={CriarConta} />

        {/* 👇 AQUI ESTÁ A TELA QUE FALTAVA */}
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
