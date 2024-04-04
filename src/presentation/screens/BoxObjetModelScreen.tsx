import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';

export const BoxObjetModelScreen = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>BoxObjetModelScreen</Text>
    </View>
  );
};


const style = StyleSheet.create({
    container:{
        backgroundColor: 'red',
        flex:1
    },
    title:{
        fontSize: 40
    }
})
