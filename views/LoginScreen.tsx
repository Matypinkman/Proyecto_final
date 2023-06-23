import React, { useState } from 'react';
import { View, TextInput, Button, TouchableOpacity, Text, Alert, Image, StyleSheet } from 'react-native';


type LoginScreenProps = {
  navigation: any; 
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const handleLogin = () => {
    // Aquí puedes agregar la lógica de inicio de sesión

    // Después de iniciar sesión exitosamente, navegar a la pantalla MainScreen
    navigation.navigate('MainScreen');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} />
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"  
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />

      <TouchableOpacity style={styles.googleButton}>
        <Image source={require('../assets/Google_Logo.png')} style={styles.googleLogo} />
        <Text style={styles.googleText}>Iniciar sesión con Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03849e',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginTop: 10,
  },
  googleLogo: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  googleText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
});

export default LoginScreen;
