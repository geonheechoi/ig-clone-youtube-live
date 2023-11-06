import React, { Component } from 'react'
import { SafeAreaView, Text, View,StyleSheet } from 'react-native'
//import { SafeAreaView } from 'react-native-web'
import Header from '../components/home/Header'
const  HomeScreen =() =>{
  
    return (
      <SafeAreaView style={styles.container}>
        <Header /> 
      </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        flex: 1,
   
    },
})
export default HomeScreen