import { Image, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './searchTile.Style'
import { useNavigation } from '@react-navigation/native'


const SearchTile = ({item}) => {
    const navigation =  useNavigation()
  return (
    <View>
     <TouchableOpacity style ={styles.container} onPress={()=>navigation.navigate('ProductDetails',{item})}>
        <View style={styles.image}>
            <Image
                source={{ uri: item.imageUrl }}
                style= {styles.Productimg}
            
            />
        </View>
        <View style = {styles.txtContainer}>
            <Text   style= {styles.producttitle}>{item.title}</Text>
            <Text   style= {styles.supplier}>{item.supplier}</Text>
            <Text   style= {styles.supplier}>{item.price}</Text>
        </View>
     </TouchableOpacity>
    </View>
  )
}

export default SearchTile

