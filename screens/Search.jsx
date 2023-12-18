import {StyleSheet, Text, View,TouchableOpacity,TextInput} from 'react-native'
import React,{useState} from 'react'
import {Feather,Ionicons} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from "./search.style";
import {COLORS,SIZES} from '../constants';

const Search =() =>{
    return(

        <SafeAreaView>
            <View style ={styles.searchContainer}>
        <TouchableOpacity>
            <Ionicons name="camera-outline"size={SIZES.xLarge} color={COLORS.offwhite} style ={styles.searchIcon} />
        </TouchableOpacity>
        <View style ={styles.searchWrapper}>
          <TextInput
          stle={styles.searchInput}
          value=""
          onPressIn={()=>{}}
          placeholder= "what are you lookong for?"
          />
        </View>
        <View>
        <TouchableOpacity style ={styles.searchBtn}>
    
          <Feather name="search" size={24} style={styles.searchIcon}/>
        </TouchableOpacity>
      </View>
     </View>
        </SafeAreaView>

    )
}
export default Search;
