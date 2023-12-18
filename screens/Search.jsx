import {StyleSheet,Image, Text, View,TouchableOpacity,TextInput} from 'react-native'
import React, {useState} from 'react'
import {Feather,Ionicons} from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from "./search.style";
import {COLORS,SIZES} from '../constants';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import SearchTile from '../components/products/SearchTile';

const Search = () => {
  const [searchKey, setSearchKey] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://192.168.8.100:3000/api/products/search/${searchKey}`);
      setSearchResult(response.data); // Use the state setter function to update searchResult
    } catch (error) {
      console.log("Failed to get Items", error);
    }
  };
    return(

        <SafeAreaView>
            <View style={styles.searchContainer}>
        <TouchableOpacity>
            <Ionicons name="camera-outline"size={SIZES.xLarge} color={COLORS.offwhite} style ={styles.searchIcon} />
        </TouchableOpacity>
        <View style ={styles.searchWrapper}>
        <TextInput
            style={styles.searchInput}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="What are you looking for?"
          />

        </View>
        <View>
        <TouchableOpacity style ={styles.searchBtn} onPress={()=>handleSearch()}>
    
          <Feather name="search" size={24} style={styles.searchIcon}/>
        </TouchableOpacity>
      </View>
     </View>
     {searchResult.length === 0 ? (
        <View style={{ flex: 1 }}>
          <Image
            source={require('../assets/images/Pose23.png')}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={searchResult}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) =>(<SearchTile item ={item}
          style ={{marginHorizontal: 12}}
          />)}
        />
      )}
        </SafeAreaView>

    )
}
export default Search;
