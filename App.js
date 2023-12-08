import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import {useCallback} from 'react';

export default function App() {

  //loading of fonts 
  const [fontsLoaded] = useFonts({
    //mapping fonts 
    regular: require ("./assets/fonts/Poppins-Regular.ttf"),
    light: require ("./assets/fonts/Poppins-Light.ttf"),
    bold: require ("./assets/fonts/Poppins-Bold.ttf"),
    medium: require ("./assets/fonts/Poppins-Medium.ttf"),
    extrabold: require ("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require ("./assets/fonts/Poppins-SemiBold.ttf"),
  })

  //callback function to be called when the view changes 

  //check if fonts are loaded 
  const onLayoutRootView = useCallback(async()=> {
    if(fontsLoaded){
      await SplashScreen.hideAsync();
    }
  },[fontsLoaded]);

  if(!fontsLoaded){
    return null;
  }


  return (
    <View style={styles.container}>
      <Text style={styles.textstyle}>Open u to start ing on app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textstyle: {
    fontFamily: "light",
    fontSize: 30,
  }
});
