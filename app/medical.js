import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; //
import { useRouter } from "expo-router"; // ✅ ADD THIS IMPORT

export default function Medical() {
  const router = useRouter(); // ✅ Call hook here at the top level

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
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

      {/* Report Sections - Passing router as a prop or using it directly */}
      <View style={styles.sectionContainer}>
        {/* We now use it as a proper Component: <ReportSection /> */}
        <ReportSection title="Blood Report" iconName="water-outline" router={router} />
        <ReportSection title="X-Ray" iconName="scan-outline" router={router} />
        <ReportSection title="MRI" iconName="pulse-outline" router={router} />
        <ReportSection title="CT Scan" iconName="medical-outline" router={router} />
      </View>
    </ScrollView>
  );
}

// ✅ FIXED: Capitalized to make it a Component and accepting 'router' as a prop
function ReportSection({ title, iconName, router }) {
  return (
    <TouchableOpacity 
      style={styles.sectionCard} 
      onPress={() => router.push({
        pathname: "/report/[type]",
        params: { type: title } 
      })}
    >
      <Ionicons name={iconName} size={24} color="#0F766E" />
      <Text style={styles.sectionText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F6FB", padding: 15 },
  header: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    marginBottom: 20, 
    paddingTop: 40 
  },
  headerTitle: { fontSize: 18, fontWeight: "700" },
  headerSubtitle: { fontSize: 12, color: "#6B7280" },
  tabs: { flexDirection: "row", marginBottom: 15 },
  activeTab: { 
    backgroundColor: "#0F766E", 
    color: "#fff", 
    paddingHorizontal: 12, 
    paddingVertical: 6, 
    borderRadius: 20, 
    marginRight: 8,
    overflow: 'hidden' 
  },
  tab: { 
    backgroundColor: "#E5E7EB", 
    paddingHorizontal: 12, 
    paddingVertical: 6, 
    borderRadius: 20, 
    marginRight: 8,
    overflow: 'hidden' 
  },
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