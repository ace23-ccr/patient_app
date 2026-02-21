import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Logo */}
        <Image
          source={require('../assets/applogo.jpg')} 
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.title}>Welcome </Text>
        <Text style={styles.subtitle}>Login to access your medical records</Text>

        {/* Input Fields */}
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {/* Login Button */}
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push("/medical")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        {/* Sign Up Link */}
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/signup")}>
            <Text style={styles.signupLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F6FB" },
  scrollContent: { flexGrow: 1, justifyContent: "center", padding: 25, alignItems: "center" },
  logo: { width: 140, height: 140, marginBottom: 20 },
  title: { fontSize: 26, fontWeight: "700", color: "#1F2937", marginBottom: 8 },
  subtitle: { textAlign: "center", marginBottom: 30, color: "#6B7280" },
  input: { width: '100%', height: 55, backgroundColor: "#fff", borderRadius: 12, paddingHorizontal: 15, marginBottom: 15, borderWidth: 1, borderColor: "#E5E7EB" },
  button: { width: '100%', height: 55, backgroundColor: "#0F766E", borderRadius: 12, justifyContent: "center", alignItems: "center", marginTop: 10 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "600" },
  signupContainer: { flexDirection: "row", marginTop: 25 },
  signupText: { color: "#6B7280" },
  signupLink: { color: "#0F766E", fontWeight: "700" },
});