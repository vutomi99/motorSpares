import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback} from 'react';
import BottomTabNavigation from './navigation/BottomTabNavigation';
import {Cart,ProductDetails,NewRivals,LoginPage,Orders,Favorites,SignUp} from './screens'



const Stack = createNativeStackNavigator();//Stack is going to manage the navigation

export default function App() {
  // Loading fonts
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/Poppins-Regular.ttf'),
    light: require('./assets/fonts/Poppins-Light.ttf'),
    bold: require('./assets/fonts/Poppins-Bold.ttf'),
    medium: require('./assets/fonts/Poppins-Medium.ttf'),
    extrabold: require('./assets/fonts/Poppins-ExtraBold.ttf'),
    semibold: require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

 //callback function to be called when the view changes 

  //check if fonts are loaded 
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }


  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
           name='Bottom Navigaviton'
           component = {BottomTabNavigation}
           options={{headerShown:false}}
          />
    
           <Stack.Screen
           name='Cart'
           component = {Cart}
           options={{headerShown:false}}
          />
           <Stack.Screen
           name='ProductDetails'
           component = {ProductDetails}
           options={{headerShown:false}}
          />
          <Stack.Screen
           name='ProductList'
           component = {NewRivals}
           options={{headerShown:false}}
          />
           <Stack.Screen
           name='Login'
           component = {LoginPage}
           options={{headerShown:false}}
          />
            <Stack.Screen
           name='Orders'
           component = {Orders}
           options={{headerShown:false}}
          />
            <Stack.Screen
           name='Favorites'
           component = {Favorites}
           options={{headerShown:false}}
          />
            <Stack.Screen
           name='Register'
           component = {SignUp}
           options={{headerShown:false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textstyle: {
//     fontFamily: "light",
//     fontSize: 30,
//   }
// });
