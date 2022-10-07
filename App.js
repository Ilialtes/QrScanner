import { StyleSheet, Text, View,FlatList,TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome5} from '@expo/vector-icons'
import QrScanner from './screens/QrScanner';
import QrList from './screens/QrList';
import { Provider, useSelector } from 'react-redux';
import { Store } from './reduxStore/store';
import React, { useState } from 'react';

const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
    <Provider store={Store}>
      
      <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            backgroundColor: "white",
            position: "absolute",
            bottom: 30,
            marginHorizontal: 20,
            borderRadius: 20,
            shadowOpacity: 0.06
          },
        ]
      }}>
        <Tab.Screen name="QrScanner" component={QrScanner} options={{
          unmountOnBlur: true,
          tabBarIcon:({focused}) => (
            <View>
              <FontAwesome5 name="qrcode" size={25} color={focused ? 'blue' : 'gray'}>
              </FontAwesome5>       
            </View>
          )
        }} />
        <Tab.Screen name="QrList" component={QrList} options={{
          tabBarIcon:({focused}) => (
            <View>
              <FontAwesome5 name="list" size={25} color={focused ? 'blue' : 'gray'}>
              </FontAwesome5>
            </View>
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
