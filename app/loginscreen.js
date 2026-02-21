import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

export default function LoginScreen() {   // ← must have default export!
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      
      <Image
        source={require('../assets/applogo.jpg')}  // ← this should work now
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>
        Login to access your medical records
      </Text>

      {/* ... rest of your inputs and button unchanged */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F6FB",
    justifyContent: "center",
    padding: 20,
    alignItems: "center",
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 30,
  },
  // ... your other styles
});