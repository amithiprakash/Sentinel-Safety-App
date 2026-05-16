import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from 'react-native';

import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function IncidentScreen() {

  const [description, setDescription] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {

    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permission Required', 'Please allow gallery access');
      return;
    }

    const result = await 
    ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const submitReport = () => {

    if (description.trim() === '') {
      Alert.alert('Error', 'Please enter incident description');
      return;
    }

    Alert.alert(
      'Success',
      'Incident Report Submitted Successfully'
    );

    setDescription('');
    setImage(null);
  };

  return (

    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>Incident Report</Text>

      <TextInput
        placeholder="Describe Incident"
        style={styles.input}
        multiline
        value={description}
        onChangeText={setDescription}
      />

      <TouchableOpacity style={styles.button} onPress={pickImage}>
        <Text style={styles.buttonText}>Upload Image</Text>
      </TouchableOpacity>

      {image && (
        <Image source={{ uri: image }} style={styles.image} />
      )}

      <TouchableOpacity
        style={styles.submitButton}
        onPress={submitReport}
      >
        <Text style={styles.buttonText}>Submit Report</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#1e3a8a',
  },

  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    padding: 15,
    height: 120,
    marginBottom: 20,
    textAlignVertical: 'top',
    fontSize: 16,
  },

  button: {
    backgroundColor: '#2563eb',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },

  submitButton: {
    backgroundColor: '#16a34a',
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },

  image: {
    width: '100%',
    height: 220,
    borderRadius: 10,
    marginBottom: 20,
  },

});