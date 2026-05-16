import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";

import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location";

export default function ReportScreen() {
  const [incidentType, setIncidentType] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Permission Denied", "Location permission is required");
      return;
    }

    let currentLocation = await Location.getCurrentPositionAsync({});

    setLocation({
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
    });
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const submitReport = () => {
    Alert.alert(
      "Success",
      "Incident Report Submitted Successfully"
    );

    setIncidentType("");
    setDescription("");
    setImage(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Incident Report</Text>

      <TextInput
        placeholder="Enter Incident Type"
        style={styles.input}
        value={incidentType}
        onChangeText={setIncidentType}
      />

      <TextInput
        placeholder="Enter Description"
        style={[styles.input, { height: 120 }]}
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
        style={[styles.button, { backgroundColor: "green" }]}
        onPress={submitReport}
      >
        <Text style={styles.buttonText}>Submit Report</Text>
      </TouchableOpacity>

      {location && (
        <View style={{ marginTop: 20 }}>
          <Text style={styles.locationText}>
            Latitude: {location.latitude}
          </Text>

          <Text style={styles.locationText}>
            Longitude: {location.longitude}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f7fb",
    justifyContent: "center",
    padding: 24,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
    color: "#1e3a8a",
  },

  input: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 18,
    padding: 16,
    marginBottom: 20,
    fontSize: 18,
    elevation: 2,
  },

  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 18,
    borderRadius: 18,
    alignItems: "center",
    marginBottom: 20,
    elevation: 4,
  },

  buttonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },

  image: {
    width: "100%",
    height: 220,
    borderRadius: 20,
    marginBottom: 20,
  },

  locationText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
    marginTop: 5,
  },
});