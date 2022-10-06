//import { setDecodedData } from './reduxStore/actions'
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function QrScanner() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [text, setText] = useState('Not Scanned Yet')

  const askForCameraPermmision = () =>{
    (async () =>{
        const { status } = await BarCodeScanner.requestPermissionsAsync();
        setHasPermission(status == 'granted')
    })()
  }
  useEffect(() => {
    askForCameraPermmision();
  }, []) 

  /* const handleDataScanned = (type, data) => {

  } */
return(
        //dispach(setDecodedData(decodeURL))
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>this is meantidddemessssssss</Text>
      </View>
)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })