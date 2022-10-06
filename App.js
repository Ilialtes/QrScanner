import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome5} from '@expo/vector-icons'
const Tab = createBottomTabNavigator();

function QrScanner() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Qr Scanner!</Text>
    </View>
  );
}

function QrList() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Qr List!</Text>
    </View>
  );
}

export default function App() {
  return (
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
        {
          //screens
        }
        <Tab.Screen name="QrScanner" component={QrScanner} options={{
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
