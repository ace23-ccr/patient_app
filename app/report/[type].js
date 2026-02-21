import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons"; //

export default function ReportDetail() {
  const { type } = useLocalSearchParams(); // Captures the report name
  const router = useRouter(); //

  // Mock data for frontend demonstration
  const lastUploadDate = "Oct 24, 2025"; 

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{type}</Text>
        <View style={{ width: 24 }} /> 
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Last Upload Info Card */}
        <View style={styles.infoCard}>
          <Ionicons name="time-outline" size={20} color="#6B7280" />
          <Text style={styles.infoText}>
            Last uploaded: <Text style={styles.dateHighlight}>{lastUploadDate}</Text>
          </Text>
        </View>

        {/* History Mockup */}
        <Text style={styles.sectionLabel}>Recent Uploads</Text>
        <View style={styles.historyItem}>
          <Ionicons name="document-text-outline" size={24} color="#0F766E" />
          <View style={styles.historyDetails}>
            <Text style={styles.historyName}>{type}_Final_v1.pdf</Text>
            <Text style={styles.historyMeta}>Uploaded by you • 2.4 MB</Text>
          </View>
        </View>

        {/* The Upload Button */}
        <TouchableOpacity 
          style={styles.uploadButton}
          onPress={() => router.push("/upload")} // Links to your existing upload.js
        >
          <Ionicons name="cloud-upload-outline" size={22} color="#fff" />
          <Text style={styles.uploadButtonText}>Upload New Record</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F6FB" },
  header: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    paddingTop: 60, 
    paddingHorizontal: 20, 
    paddingBottom: 20, 
    backgroundColor: "#fff" 
  },
  headerTitle: { fontSize: 18, fontWeight: "700" },
  content: { padding: 20 },
  infoCard: { 
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#fff", 
    padding: 15, 
    borderRadius: 12, 
    marginBottom: 25 
  },
  infoText: { marginLeft: 10, color: "#6B7280", fontSize: 14 },
  dateHighlight: { fontWeight: "700", color: "#374151" },
  sectionLabel: { fontSize: 16, fontWeight: "600", marginBottom: 15, color: "#374151" },
  historyItem: { 
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#fff", 
    padding: 15, 
    borderRadius: 12, 
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E5E7EB"
  },
  historyDetails: { marginLeft: 15 },
  historyName: { fontWeight: "600", fontSize: 14 },
  historyMeta: { fontSize: 12, color: "#9CA3AF", marginTop: 2 },
  uploadButton: {
    flexDirection: "row",
    backgroundColor: "#0F766E",
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  uploadButtonText: { color: "#fff", fontSize: 16, fontWeight: "600", marginLeft: 10 }
});