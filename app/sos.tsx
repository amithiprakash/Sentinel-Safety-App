import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function SOSScreen() {

  const handleSOS = () => {
    const currentTime = new Date().toLocaleString();

    Alert.alert(
      'Emergency SOS',
      `SOS Triggered Successfully\n\nTime: ${currentTime}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emergency SOS</Text>

      <TouchableOpacity style={styles.sosButton} onPress={handleSOS}>
        <Text style={styles.sosText}>SOS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#b91c1c',
  },

  sosButton: {
    backgroundColor: '#dc2626',
    width: 180,
    height: 180,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },

  sosText: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: 'bold',
  },
});