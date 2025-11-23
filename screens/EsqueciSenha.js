import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  ActivityIndicator,
  ImageBackground
} from "react-native";

import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase.config";

export default function EsqueciSenha({ navigation }) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleResetPassword() {
    if (!email.trim()) {
      Alert.alert("Erro", "Digite um e-mail válido.");
      return;
    }

    try {
      setLoading(true);

      await sendPasswordResetEmail(auth, email);

      setLoading(false);

      Alert.alert(
        "Sucesso!",
        "Enviamos um link para redefinir sua senha."
      );

    } catch (error) {
      setLoading(false);
      Alert.alert("Erro", "Não foi possível enviar o e-mail.");
      console.log(error);
    }
  }

  return (
    <ImageBackground
      source={require("../assets/fundo.png")}
      style={styles.background}
    >

      <Image source={require("../assets/logobranca.png")} style={styles.logo} />

      <View style={styles.card}>
        <Text style={styles.title}>Recuperar Senha</Text>

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          placeholder="Digite seu e-mail"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleResetPassword}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.buttonText}>Enviar Link</Text>
          )}
        </TouchableOpacity>

        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.link}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  logo: {
    width: 160,
    height: 160,
    resizeMode: "contain",
  },

  card: {
    width: "85%",
    backgroundColor: "#fff",
    paddingVertical: 25,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 8,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#D86B2C",
    marginBottom: 20,
  },

  label: {
    alignSelf: "flex-start",
    fontSize: 16,
    color: "#D86B2C",
    marginBottom: 5,
    fontWeight: "bold",
  },

  input: {
    width: "100%",
    backgroundColor: "#e6e6e6",
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },

  button: {
    width: "60%",
    backgroundColor: "#47D7AC",
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 5,
  },

  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  linksContainer: {
    flexDirection: "row",
    marginTop: 15,
  },

  link: {
    color: "#D86B2C",
    fontSize: 14,
  },
});
