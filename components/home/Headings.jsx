import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {Ionicons} from "@expo/vector-icons";
import {COLORS} from '../../constants'

const Headings = () => {
  return (
    <View style ={styles.container}>
        <View style= {styles.header}>
            <Text style={styles.headerTitle}>New Items</Text>
            <TouchableOpacity>
                <Ionicons name= 'ios-grid'size ={24} color ={COLORS.primary}/>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Headings

