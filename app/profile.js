import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.avatarCircle}>
          <Ionicons name="person" size={50} color="#0F766E" />
        </View>
        <Text style={styles.userName}>John Doe</Text>
        <Text style={styles.userEmail}>john.doe@example.com</Text>
      </View>

      <View style={styles.menuContainer}>
        <ProfileOption icon="settings-outline" title="Settings" />
        <ProfileOption icon="notifications-outline" title="Notifications" />
        <ProfileOption icon="log-out-outline" title="Logout" color="#EF4444" />
      </View>
    </View>
  );
}

function ProfileOption({ icon, title, color = "#374151" }) {
  return (
    <TouchableOpacity style={styles.optionRow}>
      <View style={styles.optionLeft}>
        <Ionicons name={icon} size={22} color={color} />
        <Text style={[styles.optionText, { color }]}>{title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F6FB' },
  header: { paddingTop: 60, paddingHorizontal: 20, paddingBottom: 20, backgroundColor: '#fff' },
  headerTitle: { fontSize: 22, fontWeight: '800', color: '#1F2937' },
  profileCard: { alignItems: 'center', padding: 30, backgroundColor: '#fff', marginBottom: 20 },
  avatarCircle: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#E5F4F3', justifyContent: 'center', alignItems: 'center', marginBottom: 15 },
  userName: { fontSize: 20, fontWeight: '700', color: '#1F2937' },
  userEmail: { color: '#6B7280', marginTop: 5 },
  menuContainer: { backgroundColor: '#fff', paddingHorizontal: 20 },
  optionRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 18, borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  optionLeft: { flexDirection: 'row', alignItems: 'center' },
  optionText: { marginLeft: 15, fontSize: 16, fontWeight: '500' }
});