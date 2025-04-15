import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
        <Tabs.Screen 
            name="Index" 
            options={{ 
                title:"Home",
                headerShown: false
            }} 
        />
        <Tabs.Screen 
            name="Search" 
            options={{ 
                title:"Search",
                headerShown: false
            }} 
        />
        <Tabs.Screen 
            name="Saved" 
            options={{ 
                title:"Saved",
                headerShown: false
            }} 
        />
        <Tabs.Screen 
            name="Profile" 
            options={{ 
                title:"Profile",
                headerShown: false
            }} 
        />
    </Tabs>
  )
}

export default _layout