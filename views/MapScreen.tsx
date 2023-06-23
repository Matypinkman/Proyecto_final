import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MapView, {Marker, Polyline} from 'react-native-maps';

const MapScreen: React.FC = () => {

  const [origin, setOrigin] = useState({
    latitude:-33.46610933283539,
    longitude:-70.59705361177384,
  });
  const [destination, setDestination] = useState({
    latitude:-33.46189686241414,
    longitude:-70.60575982105759,
  });

  return (
    <View style={styles.container}>
      <MapView 
      style={styles.map}
      initialRegion={{
        latitude: origin.latitude,
        longitude: origin.longitude,
        latitudeDelta:0.09,
        longitudeDelta:0.04
      }}
      >
        <Marker 
        coordinate={origin}
        />
        <Marker 
        coordinate={destination}
        />
      </MapView>
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
  map: {
    width:'100%',
    height:'100%'
  },
});

export default MapScreen;
