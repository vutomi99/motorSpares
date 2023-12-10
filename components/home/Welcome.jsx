import { View, Text } from 'react-native'
import React from 'react'
import styles from './welcome.style'

const Welcome = () => {
  return (
    <View style= {styles.container}>
        <Text style = {styles.welcomeTxt}>Find The Most</Text>
        <Text style = {styles.welcomeTxt2}>Reliable parts</Text>
      
    </View>
  )
}

export default Welcome