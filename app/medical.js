import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Medical() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>Medical Records</Text>
          <Text style={styles.headerSubtitle}>Your health history</Text>
        </View>
        <Ionicons name="share-social-outline" size={22} color="black" />
      </View>

      {/* List of Sections - One per row */}
      <View style={styles.listContainer}>
        <ReportSection title="Blood Report" iconName="water-outline" router={router} />
        <ReportSection title="X-Ray" iconName="scan-outline" router={router} />
        <ReportSection title="MRI" iconName="pulse-outline" router={router} />
        <ReportSection title="CT Scan" iconName="medical-outline" router={router} />
        <ReportSection title="Prescription" iconName="clipboard-outline" router={router} />
      </View>
    </ScrollView>
  );
}

// Reusable Row Component
function ReportSection({ title, iconName, router }) {
  return (
    <TouchableOpacity 
      style={styles.rowCard} 
      onPress={() => router.push({
        pathname: "/report/[type]",
        params: { type: title } 
      })}
    >
      <View style={styles.leftContent}>
        <View style={styles.iconCircle}>
          <Ionicons name={iconName} size={22} color="#0F766E" />
        </View>
        <Text style={styles.rowTitle}>{title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F3F6FB", paddingHorizontal: 20 },
  header: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    alignItems: "center", 
    marginTop: 60, 
    marginBottom: 30 
  },
  headerTextContainer: { alignItems: 'center' },
  headerTitle: { fontSize: 20, fontWeight: "700" },
  headerSubtitle: { fontSize: 13, color: "#6B7280" },
  
  listContainer: {
    flexDirection: 'column',
    gap: 12, // Vertical spacing between rows
  },
  rowCard: {
    backgroundColor: '#fff',
    width: '100%', // Full width as requested
    padding: 18,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // Subtle shadow for depth
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 5,
    elevation: 2,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E5F4F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  rowTitle: { 
    fontSize: 16, 
    fontWeight: '600', 
    color: '#374151' 
  }
});