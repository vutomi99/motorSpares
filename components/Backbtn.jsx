import { StyleSheet,TouchableOpacity, View } from 'react-native'
import React from 'react'
import {Ionicons} from '@expo/vector-icons';
import {COLORS,SIZES} from '../constants/index'

const Backbtn = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.Backbtn}>
        <Ionicons
            name= 'chevron-back-circle'
            size= {30}
            color={COLORS.primary}
            
        />
    </TouchableOpacity>
  )
}

export default Backbtn 

const styles = StyleSheet.create({
  Backbtn:{
    alignItems:'center',
    position:'absolute',
    zIndex:999,
    top:SIZES.large-10
  },
 
})