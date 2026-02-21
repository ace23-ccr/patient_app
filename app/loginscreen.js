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
      
      {/* ✅ THE LOGO SECTION */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/applogo.jpg')} 
          style={styles.logo}
          resizeMode="contain" // Ensures the whole image fits without cropping
        />
      </View>

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
     logo: {
  width: 150,
  height: 150,
  marginBottom: 20,
  borderWidth: 1,      // ✅ Add this temporarily
  borderColor: 'red',  // ✅ If you see a red box but no image, the path is wrong.
},
}
  // ... your other styles
});