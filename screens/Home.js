import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, TouchableOpacity, Alert } from 'react-native';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const fazerLogin = async () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }

    try {
      // Login Firebase
      await signInWithEmailAndPassword(auth, email, senha);

      Alert.alert("Sucesso", "Login realizado!");

      // 👉 Redireciona corretamente para a Home
      navigation.navigate("Home");

    } catch (erro) {
      console.log("Erro Firebase:", erro);
      Alert.alert("Erro no login", erro.message);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/fundo.png')}
      style={styles.background}
    >
      <Image
        source={require('../assets/logobranca.png')}
        style={styles.logo}
      />

      <View style={styles.card}>
        <Text style={styles.title}>Login</Text>

        <Text style={styles.label}>E-mail:</Text>
    

        <Text style={styles.label}>Senha:</Text>


      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },

  logo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
  },

  card: {
    width: '85%',
    backgroundColor: '#fff',
    marginTop: 20,
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 8,
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#D86B2C',
    marginBottom: 20,
  },

  label: {
    alignSelf: 'flex-start',
    marginLeft: 5,
    fontSize: 16,
    marginTop: 15,
    color: '#D86B2C',
    fontWeight: 'bold',
  },

  input: {
    width: '100%',
    backgroundColor: '#e6e6e6',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },

  button: {
    width: '60%',
    backgroundColor: '#47D7AC',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 5,
  },

  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },

  linksContainer: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },

  link: {
    color: '#D86B2C',
    fontSize: 14,
  },

  divider: {
    marginHorizontal: 8,
    color: '#999',
  },
});
