import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import { useState } from 'react';

export default function SOSScreen() {

  const [sosMessage, setSosMessage] = useState('');

  const handleSOS = () => {

    const currentTime =
      new Date().toLocaleString();

    const message =
      `SOS Triggered Successfully\nTime: ${currentTime}`;

    setSosMessage(message);

    Alert.alert(
      'Emergency SOS',
      message
    );
  };

  return (

    <View style={styles.container}>

      <Text style={styles.title}>Emergency SOS</Text>

      <TouchableOpacity
        style={styles.sosButton}
        onPress={handleSOS}
      >
        <Text style={styles.sosText}>SOS</Text>
      </TouchableOpacity>

      <Text style={styles.messageText}>
        {sosMessage}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f7fb",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
    color: "#dc2626",
  },

  sosButton: {
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: "#e11d48",
    justifyContent: "center",
    alignItems: "center",
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },

  sosText: {
    color: "#fff",
    fontSize: 50,
    fontWeight: "bold",
  },

  messageText: {
    marginTop: 40,
    fontSize: 22,
    fontWeight: "700",
    textAlign: "center",
    color: "#111827",
  },
});