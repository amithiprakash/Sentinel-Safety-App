import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';

export default function LoginScreen() {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');

  const handleLogin = () => {
    if (otp === '1234') {
      Alert.alert('Success', 'Login Successful');
    } else {
      Alert.alert('Error', 'Invalid OTP');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Enter Mobile Number"
        style={styles.input}
        keyboardType="phone-pad"
        value={mobile}
        onChangeText={setMobile}
      />

      <TouchableOpacity
        style={styles.otpButton}
        onPress={() => Alert.alert('OTP Sent', 'Your OTP is 1234')}
      >
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Enter OTP"
        style={styles.input}
        keyboardType="number-pad"
        value={otp}
        onChangeText={setOtp}
      />

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
    color: '#1e3a8a',
  },

  input: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
  },

  otpButton: {
    backgroundColor: '#2563eb',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },

  loginButton: {
    backgroundColor: '#1e40af',
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});