import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Medical() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View>
          <Text style={styles.headerTitle}>Medical Records</Text>
          <Text style={styles.headerSubtitle}>Your health history</Text>
        </View>
        <Ionicons name="share-social-outline" size={22} color="black" />
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <Text style={styles.activeTab}>All (6)</Text>
        <Text style={styles.tab}>Reports (1)</Text>
        <Text style={styles.tab}>Lab (2)</Text>
      </View>

      {/* Report Sections - Now calling the defined function below */}
      <View style={styles.sectionContainer}>
        {reportSection("Blood Report", "water-outline")}
        {reportSection("X-Ray", "scan-outline")}
        {reportSection("MRI", "pulse-outline")}
        {reportSection("CT Scan", "medical-outline")}
      </View>
    </ScrollView>
  );
}

// ✅ FIXED: Defined the missing helper function
function reportSection(title, iconName) {
  return (
    <TouchableOpacity style={styles.sectionCard}>
      <Ionicons name={iconName} size={24} color="#0F766E" />
      <Text style={styles.sectionText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F6FB", padding: 15 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 20, paddingTop: 40 },
  headerTitle: { fontSize: 18, fontWeight: "700" },
  headerSubtitle: { fontSize: 12, color: "#6B7280" },
  tabs: { flexDirection: "row", marginBottom: 15 },
  activeTab: { backgroundColor: "#0F766E", color: "#fff", paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, marginRight: 8 },
  tab: { backgroundColor: "#E5E7EB", paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, marginRight: 8 },
  
  // ✅ FIXED: Added missing styles for the sections
  sectionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  sectionCard: {
    backgroundColor: '#fff',
    width: '48%',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  sectionText: { marginTop: 8, fontWeight: '600', color: '#374151' }
});