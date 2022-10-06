import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {FontAwesome5} from '@expo/vector-icons'
import QrScanner from './screens/QrScanner';
import { Provider, useSelector } from 'react-redux';
import { Store } from './reduxStore/store';
import { setDecodedData } from './reduxStore/actions';

const Tab = createBottomTabNavigator();

function QrList() {
  const {dataList} = useSelector(state => state.data)
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>list hhere</Text>
    </View>
  );
}

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
});
