import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#e30016',
        tabBarInactiveTintColor: '#8f8f8f',
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          height: 72,
          paddingTop: 6,
          paddingBottom: 8,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Book',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="cart.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="form"
        options={{
          title: 'Review',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="bubble.left.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
