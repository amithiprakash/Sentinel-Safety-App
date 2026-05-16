import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");

  const sendOTP = () => {
    Alert.alert(
      "OTP Sent",
      "Static OTP: 1234"
    );
  };

  const handleLogin = () => {
    if (otp === "1234") {
      Alert.alert(
        "Login Successful",
        "Welcome to Sentinel Safety App"
      );
    } else {
      Alert.alert(
        "Invalid OTP",
        "Please enter correct OTP"
      );
    }
  };

  const createAccount = () => {
    if (username && password) {
      Alert.alert(
        "Account Created",
        "User account created successfully"
      );
    } else {
      Alert.alert(
        "Error",
        "Please enter username and password"
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Authentication</Text>

      <TextInput
        placeholder="Enter Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        placeholder="Create Password"
        style={styles.input}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "green" }]}
        onPress={createAccount}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={sendOTP}
      >
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Enter OTP"
        style={styles.input}
        keyboardType="numeric"
        value={otp}
        onChangeText={setOtp}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
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