import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// TELAS INICIAIS (LOGIN)
import Primaria from './screens/Primaria';
import Login from './screens/Login';
import EsqueciSenha from './screens/EsqueciSenha';
import CriarConta from './screens/CriarConta';

// TELAS DO MENU INFERIOR
import Receitas from './screens/Receitas';   // ← HOME
import Planejamento from './screens/Planejamento';
import Favoritos from './screens/Favoritos';
import Geladeira from './screens/Geladeira';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// ---------------- TABS (HOME = RECEITAS) ------------------

function MenuTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Receitas" // ← Define Receitas como a Home
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarIcon: ({ color, size }) => {
          let icon = "";

          switch (route.name) {
            case "Receitas":
              icon = "fast-food-outline";
              break;
            case "Planejamento":
              icon = "calendar-outline";
              break;
            case "Favoritos":
              icon = "heart-outline";
              break;
            case "Geladeira":
              icon = "snow-outline";
              break;
          }

          return <Ionicons name={icon} size={size} color={color} />;
        },

        tabBarActiveTintColor: "#44a67f",
        tabBarInactiveTintColor: "#666",
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
          backgroundColor: "#fff",
        }
      })}
    >
      <Tab.Screen name="Receitas" component={Receitas} />
      <Tab.Screen name="Planejamento" component={Planejamento} />
      <Tab.Screen name="Favoritos" component={Favoritos} />
      <Tab.Screen name="Geladeira" component={Geladeira} />
    </Tab.Navigator>
  );
}

// ---------------- STACK ------------------

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

        {/* TELAS DE ACESSO */}
        <Stack.Screen name="Primaria" component={Primaria} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="EsqueciSenha" component={EsqueciSenha} />
        <Stack.Screen name="CriarConta" component={CriarConta} />

        {/* Após o login, abre o menu inferior com Receitas como Home */}
        <Stack.Screen name="MenuTabs" component={MenuTabs} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
