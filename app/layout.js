import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: '#0F766E',
      tabBarInactiveTintColor: 'gray',
      headerShown: false, // Hides the double header
      tabBarStyle: { height: 65, paddingBottom: 10 }
    }}>
      <Tabs.Screen
        name="medical"
        options={{
          title: 'Records',
          tabBarIcon: ({ color }) => <Ionicons name="medkit-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Ionicons name="person-outline" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}