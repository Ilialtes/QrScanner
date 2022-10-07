import { StyleSheet, Text, View,FlatList,TextInput } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function QrList() {

    const {dataList} = useSelector(state => state.data);
    const [filteredData, setFilteredData ] = useState([])
    const [search, setSearch] = useState('');


    useEffect(() => {
       setFilteredData(dataList)
     }, [dataList]);


     const searchFilter = (text) => {
        if(text){
            const newData =   dataList.filter((item)=>{
            const itemData = item ? item.toUpperCase() : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          });
          setFilteredData(newData)
          setSearch(text);
        } else {
            setFilteredData(dataList);
            setSearch(text)
        }
     } 
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
            onChangeText={(text) => searchFilter(text)}
        />
        <FlatList
            options={{windowSize:10}}
            data={filteredData}
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