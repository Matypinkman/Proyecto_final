import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

type MainScreenProps = {
  navigation: any;
};

const MainScreen: React.FC<MainScreenProps> = ({ navigation }) => {
  const [cameraVisible, setCameraVisible] = useState(false);
  const { setOptions } = useNavigation();

  const handleVerMapa = () => {
    navigation.navigate('Mapa');
  };

  const handleOpenCamera = () => {
    navigation.navigate('Cámara');
  };

  useEffect(() => {
    setOptions({
      title: 'Menú Principal',
      headerShown: true,
      headerLeft: () => null, // Para ocultar la flecha de volver
    });
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Ver Mapa" onPress={handleVerMapa} />
      <Button title="Abrir Cámara" onPress={handleOpenCamera} />
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
});

export default MainScreen;
