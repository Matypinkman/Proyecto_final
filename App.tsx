import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // Agregado

import LoginScreen from './views/LoginScreen';
import MainScreen from './views/MainScreen';
import MapScreen from './views/MapScreen';
import CameraScreen from './views/CameraScreen';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <SafeAreaProvider> 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Mapa"
            component={MapScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="Cámara"
            component={CameraScreen}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider> 
  );
};

export default App;
