import {TouchableOpacity,Text,View,ScrollView} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {Ionicons,Fontisto} from '@expo/vector-icons'
import styles from './home.style';
import {Welcome} from "../components"


const Home =() => {
    return(

        < SafeAreaView>
           <View style ={styles.appBarWrapper}>

                <View style ={styles.appBar}>
                    <Ionicons  name= 'locate-outline' size ={24}/>

                    <Text style ={styles.location}>Pretoria North</Text>
                    <View style={{alignItems: "flex-end"}}>
                        <View style ={styles.cartCount}>
                            <Text style ={styles.cartNumber}>9</Text>
                            
                        </View>
                        <TouchableOpacity>
                        <Fontisto name="shopping-bag" size ={20}/>
                        </TouchableOpacity>

                    </View>
                </View>

           </View>
            <ScrollView>
               <Welcome/>
           </ScrollView> 
        </ SafeAreaView>

    )
}
export default Home

