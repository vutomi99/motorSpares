import { StyleSheet, Text, View,TouchableOpacity ,Image} from 'react-native'
import React,{useState,useEffect} from 'react'
import {Ionicons,MaterialCommunityIcons,Fontisto,AntDesign,SimpleLineIcons} from '@expo/vector-icons'
import styles from './profile.style';
import { StatusBar } from 'expo-status-bar';
import {COLORS} from '../constants'


const Profile =({navigation}) =>{
    const [userData,setUserData]= useState(null);
    const [userLogin,setUserLogin]= useState(true);
    return(
        <View style= {styles.container}>
            <View  style= {styles.container}>
                <StatusBar backgroundColor={COLORS.gray}/>
                <View style={{width:'100%'}}>
                    <Image
                        source= {require('../assets/images/profile.jpg')}
                        style = {styles.cover}

                    />
                </View>
                <View style={styles.profileContainer}>
                    
                <Image
                        source= {require('../assets/images/user.png')}
                        style = {styles.profile}

                    />
                    <Text style = {styles.name}>
                        {userLogin=== true ? "vutomi": "Please Login to your Account"}
                    </Text>
                    {
                        userLogin === false ?(
                            <TouchableOpacity onPress={()=>navigation.navigate("Login")}>

                                <View style = {styles.loginbtn}>
                                    <Text  style = {styles.menuTxt}>L O G I N   </Text>
                                </View>
                            </TouchableOpacity >
                        ):(
                            <View style = {styles.loginbtn}>
                                    <Text  style = {styles.menuTxt}>vutomi@gmail.com </Text>
                            </View>
                        )
                    }

{
                        userLogin === false ?(
                          <View></View>
                        ):(
                            <View style = {styles.menuWrapper}>
                                <TouchableOpacity onPress={()=>{}}>
                                    <View style= {styles.menuItem(0.5)}>
                                        <MaterialCommunityIcons
                                            name= "heart-outline"
                                            size={24}
                                            color= {COLORS.primary}
                                        />
                                        <Text style= {styles.menuTxt}>Favorites</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{}}>
                                    <View style= {styles.menuItem(0.5)}>
                                        <MaterialCommunityIcons
                                            name= "truck-delivery-outline"
                                            size={24}
                                            color= {COLORS.primary}
                                        />
                                        <Text style= {styles.menuTxt}>Orders</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{}}>
                                    <View style= {styles.menuItem(0.5)}>
                                        <SimpleLineIcons
                                            name= "bag"
                                            size={24}
                                            color= {COLORS.primary}
                                        />
                                        <Text style= {styles.menuTxt}>Cart</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{}}>
                                    <View style= {styles.menuItem(0.5)}>
                                        <MaterialCommunityIcons
                                            name= "cached"
                                            size={24}
                                            color= {COLORS.primary}
                                        />
                                        <Text style= {styles.menuTxt}>Clear Cache</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{}}>
                                    <View style= {styles.menuItem(0.5)}>
                                        <AntDesign
                                            name= "deleteuser"
                                            size={24}
                                            color= {COLORS.primary}
                                        />
                                        <Text style= {styles.menuTxt}>Delete Account</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={()=>{}}>
                                    <View style= {styles.menuItem(0.5)}>
                                        <AntDesign
                                            name= "logout"
                                            size={24}
                                            color= {COLORS.primary}
                                        />
                                        <Text style= {styles.menuTxt}>Logout</Text>
                                    </View>
                                </TouchableOpacity>

                                
                            </View>
                        )
                    }


                </View>
            </View>
        </View>
        
    )
}
export default Profile
