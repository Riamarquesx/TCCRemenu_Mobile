import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { auth, db } from '../firebase.config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export default function Cadastro() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: '',
  });
  const [loading, setLoading] = useState(false);

  const traduzirErroFirebase = (errorCode) => {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'Este e-mail já está em uso por outra conta.';
      case 'auth/invalid-email':
        return 'O formato do e-mail é inválido.';
      case 'auth/weak-password':
        return 'A senha deve ter pelo menos 6 caracteres.';
      case 'auth/operation-not-allowed':
        return 'O cadastro por e-mail e senha está desabilitado. Contate o suporte.';
      default:
        return 'Ocorreu um erro desconhecido no cadastro. Tente novamente.';
    }
  };

  const fazerCadastro = async () => {
    const { nome, email, senha, confirmarSenha } = form;

    if (!nome || !email || !senha || !confirmarSenha) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert('Atenção', 'As senhas não conferem!');
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      // Gravação no Firestore em paralelo, não bloqueia a UI
      setDoc(doc(db, 'usuarios', user.uid), {
        nome,
        email,
        criadoEm: new Date(),
      }).catch((err) => console.error('Erro ao gravar usuário no Firestore:', err));

      Alert.alert('Sucesso!', 'Sua conta foi criada com sucesso!');

      // Limpar campos
      setForm({ nome: '', email: '', senha: '', confirmarSenha: '' });

    } catch (error) {
      console.error('Erro completo do Firebase:', error);
      Alert.alert('Erro no cadastro', traduzirErroFirebase(error.code));
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <ImageBackground source={require('../assets/fundo.png')} style={styles.background}>
          <Image source={require('../assets/logobranca.png')} style={styles.logo} />

          <View style={styles.card}>
            <Text style={styles.title}>Cadastro</Text>

            <Text style={styles.label}>Nome completo:</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              placeholderTextColor="#AAA"
              value={form.nome}
              onChangeText={(text) => handleChange('nome', text)}
            />

            <Text style={styles.label}>E-mail:</Text>
            <TextInput
              style={styles.input}
              placeholder="exemplo@email.com"
              placeholderTextColor="#AAA"
              value={form.email}
              onChangeText={(text) => handleChange('email', text)}
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={styles.label}>Digite sua senha:</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder="Mínimo 6 caracteres"
              placeholderTextColor="#AAA"
              value={form.senha}
              onChangeText={(text) => handleChange('senha', text)}
            />

            <Text style={styles.label}>Confirmar senha:</Text>
            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder="Confirme a sua senha"
              placeholderTextColor="#AAA"
              value={form.confirmarSenha}
              onChangeText={(text) => handleChange('confirmarSenha', text)}
            />

            <TouchableOpacity
              style={styles.button}
              onPress={fazerCadastro}
              disabled={loading}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text style={styles.buttonText}>Cadastrar</Text>
              )}
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 160,
    height: 160,
    resizeMode: 'contain',
    marginTop: 20,
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
    marginTop: 10,
    alignItems: 'center',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
