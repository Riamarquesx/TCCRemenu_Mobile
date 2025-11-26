import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';

export default function Login({ navigation }) {

  return (
    <ImageBackground
      source={require('../assets/fundo.png')}
      style={styles.background}
      resizeMode="cover"
    >

      {/* LOGO CENTRAL */}
      <Image
        source={require('../assets/logobranca.png')}
        style={styles.logo}
      />

      {/* BOTOES */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { marginTop: 10 }]}
        onPress={() => navigation.navigate("CriarConta")}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 280,
    height: 280,
    resizeMode: 'contain',
    marginBottom: 40,
  },

  button: {
    width: 180,
    backgroundColor: '#D86B2C', // laranja igual na foto
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
