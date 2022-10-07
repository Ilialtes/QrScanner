import { StyleSheet, Text, View,FlatList,TextInput } from 'react-native';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function QrList() {
    const {dataList} = useSelector(state => state.data);
    const [search, setSearch] = useState('');

    if(dataList.length === 0) {
        return(
            <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', height:100, }}>
               <Text>Scan an item to add to the QrList</Text> 
            </View>
        ) 

    }
    return (
        
        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', height:100, }}>
        <TextInput
            style={styles.input}
            placeholder='Search QR'
            value={search}
        />
        <FlatList
            options={{windowSize:10}}
            data={dataList}
            keyExtractor={(item,index) => index.toString()}
            renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          /> 
          </View>
      );
}

const styles = StyleSheet.create({

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