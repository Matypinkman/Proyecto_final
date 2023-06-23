import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

type MainScreenProps = {
  navigation: any;
};

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  const handleVerMapa = () => {
    navigation.navigate('Mapa');
  };

  const handleOpenCamera = () => {
    navigation.navigate('Cámara');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Button title="Abrir Mapa" onPress={handleVerMapa} />
      </View>
      <View style={styles.card}>

        <Button title="Abrir Cámara" onPress={handleOpenCamera} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    width: '80%',
    textAlign:'center'
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default MainScreen;
