import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

const CameraScreen: React.FC = () => {
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        // Manejar caso en el que los permisos no son concedidos
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} />
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
  camera: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default CameraScreen;
