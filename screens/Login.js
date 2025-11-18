import React from 'react';
import { StyleSheet,Text,View,ImageBackground,Image,TextInput,TouchableOpacity,} from 'react-native';

export default function Login({ navigation }) {
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
        <TextInput
          style={styles.input}
          placeholder=""
          placeholderTextColor="#AAA"
        />

        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder=""
          placeholderTextColor="#AAA"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.linksContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('EsqueciSenha')}>
            <Text style={styles.link}>Esqueci a senha</Text>
          </TouchableOpacity>

          <Text style={styles.divider}>|</Text>

          <TouchableOpacity onPress={() => navigation.navigate('CriarConta')}>
            <Text style={styles.link}>Criar conta</Text>
          </TouchableOpacity>
        </View>
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
    marginTop: 50,
    resizeMode: 'contain',
  },

  card: {
    width: '85%',
    backgroundColor: '#fff',
    marginTop: 50,
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
