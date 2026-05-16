import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import { useState } from 'react';

export default function LocationScreen() {

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const getLocation = async () => {

    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== 'granted') {
      alert('Permission Denied');
      return;
    }

    const location = await Location.getCurrentPositionAsync({});

    setLatitude(location.coords.latitude.toString());
    setLongitude(location.coords.longitude.toString());
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Current Location</Text>

      <TouchableOpacity style={styles.button} onPress={getLocation}>
        <Text style={styles.buttonText}>Get Location</Text>
      </TouchableOpacity>

      <Text style={styles.locationText}>
        Latitude: {latitude}
      </Text>

      <Text style={styles.locationText}>
        Longitude: {longitude}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#1e3a8a',
  },

  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 30,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  locationText: {
    fontSize: 18,
    marginBottom: 10,
  },

});