import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useDispatch } from "react-redux";
import { setDecodedData } from "../reduxStore/actions";

export default function QrScanner() {
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState("Not Scanned Yet");
  const dispach = useDispatch();

  const handleDataScanned = ({ data }) => {
    setScanned(true);
    setText(data);
    dispach(setDecodedData(data));
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={styles.barcodeBox}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleDataScanned}
          style={{ height: 600, width: 600 }}
        />
      </View>
      <Text style={styles.maintext}>{text}</Text>
      {scanned && (
        <Button title={"Scan Again"} onPress={() => setScanned(false)}></Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  barcodeBox: {
    alignItems: "center",
    justifyContent: "center",
    height: 300,
    width: 300,
    overflow: "hidden",
    borderRadius: 30,
    backgroundColor: "blue",
  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
});
