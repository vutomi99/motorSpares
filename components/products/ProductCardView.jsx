import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import styles from './productCardView.style'
import {Ionicons} from "@expo/vector-icons"
import {COLORS} from "../../constants"
import { useNavigation } from '@react-navigation/native'

const ProductCardView = ({item}) => {
    const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={()=> navigation.navigate("ProductDetails")}>

        <View style = {styles.container}>

            <View style = {styles.imagecontainer}>
                    <Image

                        source = {{uri: "https://static9.depositphotos.com/1150119/1091/i/450/depositphotos_10911211-stock-photo-spark-plugs.jpg"}}
                        style = {styles.image}
                    />
            </View>

            <View style = {styles.details}>

                <Text  style = {styles.title}numberOfLines={1}>{item.title}</Text>
                 <Text  style = {styles.Supplier}numberOfLines={1}>{item.supplier}</Text>
                <Text  style = {styles.price}>{item.price}</Text> 

            </View>
            <TouchableOpacity style = {styles.addbtn}>
                <Ionicons name="add-circle" size ={24} color ={COLORS.primary}/>
            </TouchableOpacity>


        </View>

    </TouchableOpacity>
  )
}

export default ProductCardView

