import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome5} from '@expo/vector-icons'
import QrScanner from './screens/QrScanner';
import QrList from './screens/QrList';
import { Provider } from 'react-redux';
import { Store } from './reduxStore/store';
import React from 'react';

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


