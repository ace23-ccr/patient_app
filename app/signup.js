import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  ScrollView,
  KeyboardAvoidingView,
  Platform 
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#1F2937" />
        </TouchableOpacity>

        <View style={styles.header}>
          <Text style={styles.title}>New Account</Text>
          <Text style={styles.subtitle}>Join us to track your health journey</Text>
        </View>

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Ionicons name="person-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
            <TextInput 
              placeholder="Full Name" 
              style={styles.input} 
              onChangeText={(val) => setFormData({...formData, fullName: val})}
            />
          </View>

          <View style={styles.inputGroup}>
            <Ionicons name="mail-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
            <TextInput 
              placeholder="Email Address" 
              style={styles.input} 
              autoCapitalize="none"
              keyboardType="email-address"
              onChangeText={(val) => setFormData({...formData, email: val})}
            />
          </View>

          <View style={styles.inputGroup}>
            <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
            <TextInput 
              placeholder="Password" 
              style={styles.input} 
              secureTextEntry 
              onChangeText={(val) => setFormData({...formData, password: val})}
            />
          </View>

          <View style={styles.inputGroup}>
            <Ionicons name="shield-checkmark-outline" size={20} color="#9CA3AF" style={styles.inputIcon} />
            <TextInput 
              placeholder="Confirm Password" 
              style={styles.input} 
              secureTextEntry 
              onChangeText={(val) => setFormData({...formData, confirmPassword: val})}
            />
          </View>

          <TouchableOpacity 
            style={styles.signUpButton} 
            onPress={() => router.push("/medical")}
          >
            <Text style={styles.signUpButtonText}>Create Account</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => router.push("/")}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F6FB" },
  scrollContent: { flexGrow: 1, padding: 25, justifyContent: "center" },
  backButton: { position: "absolute", top: 50, left: 20, zIndex: 1 },
  header: { marginBottom: 30, marginTop: 40 },
  title: { fontSize: 32, fontWeight: "800", color: "#1F2937" },
  subtitle: { fontSize: 16, color: "#6B7280", marginTop: 5 },
  form: { width: "100%" },
  inputGroup: { 
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#fff", 
    borderRadius: 12, 
    marginBottom: 15, 
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#E5E7EB"
  },
  inputIcon: { marginRight: 10 },
  input: { flex: 1, height: 55, fontSize: 16, color: "#1F2937" },
  signUpButton: { 
    backgroundColor: "#0F766E", 
    height: 55, 
    borderRadius: 12, 
    justifyContent: "center", 
    alignItems: "center", 
    marginTop: 10,
    elevation: 3,
    shadowColor: "#0F766E",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 }
  },
  signUpButtonText: { color: "#fff", fontSize: 18, fontWeight: "700" },
  footer: { flexDirection: "row", justifyContent: "center", marginTop: 30 },
  footerText: { color: "#6B7280", fontSize: 15 },
  loginLink: { color: "#0F766E", fontWeight: "700", fontSize: 15 },
});