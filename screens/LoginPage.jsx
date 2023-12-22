import { ScrollView, Text, View,TouchableOpacity,Image,TextInput,Alert } from 'react-native'
import React,{useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Backbtn from '../components/Backbtn';
import styles from './login.style';
import {Ionicons,SimpleLineIcons,MaterialCommunityIcons,Fontisto} from '@expo/vector-icons'
import { Button } from '../components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { COLORS } from '../constants';


const validationSchema = Yup.object().shape({


      password: Yup.string()

        .min(6, 'Must be 6 characters or More')

        .required('Required'),

      email: Yup.string().email('Invalid email address').required('Required'),

});


const LoginPage = ({navigation}) => {
  const [loader,setLoader] = useState(false);
  const [responseData,setResponseData] = useState(null);
  const [obsecureText,setObsecureText]=useState(false)

  const inValidForm = ()=>{
    Alert.alert(
        "Invalid Form",
        "Please provide all required fields to Continue!",
        [
            {
                text: "Cancel", onPress:()=>{}
              
            },
            {
                text: "Continue", onPress:()=>{}
              
            },
            // {defaultIndex: 1}
        ]
    )
}
  
  return (
   <ScrollView>
    <SafeAreaView style={{marginHorizontal:20}}>
      <View>
        <Backbtn onPress={()=>navigation.goBack()}/>
        <Image
          source={require('../assets/images/fnz.jpg')}
          style ={styles.cover}
        />
          <Text style={styles.title}>Rev Up with Ease: Your Car Parts, Just a Tap Away</Text>

      <Formik
        initialValues={{email:'',password:' '}}
        validationSchema={validationSchema}
        onSubmit={(values)=> console.log(values)}
      >

          {({ handleChange,touched, handleBlur, handleSubmit, values,errors,isValid,setFieldTouched }) => (
                <View>

                    <View style={styles.wrapper}>
                      <Text style= {styles.label}>Email</Text>
                      <View style={styles.inputWrapper(touched.email ? COLORS.secondary: COLORS.offwhite)}>
                        <MaterialCommunityIcons
                          name ='email-outline'
                          size ={20}
                          color ={COLORS.gray}
                          style= {styles.iconStyle}
                        />
                        <TextInput
                          placeholder="Enter email"
                          onFocus={()=>{setFieldTouched('email')}}
                          onBlur={()=>{setFieldTouched('email',' ')}}
                          value={values.email}
                          onChangeText={handleChange('email')}
                          autoCapitalize="none"
                          autoCorrect= {false}
                          style ={{flex:1}}
                        />
                      </View>
                      {touched.email && errors &&(
                        <Text style={styles.errorMessage}>
                            {errors.email}
                        </Text>
                      )}
                    </View>


                    <View style={styles.wrapper}>
                      <Text style= {styles.label}>Password</Text>
                      <View style={styles.inputWrapper(touched.password ? COLORS.secondary: COLORS.offwhite)}>
                        <MaterialCommunityIcons
                          name ='lock-outline'
                          size ={20}
                          color ={COLORS.gray}
                          style= {styles.iconStyle}
                        />
                        <TextInput
                          secureTextEntry={obsecureText}
                          placeholder="Enter Password"
                          onFocus={()=>{setFieldTouched('password')}}
                          onBlur={()=>{setFieldTouched('password', '')}}
                          value={values.password}
                          onChangeText={handleChange('password')}
                          autoCapitalize="none"
                          autoCorrect= {false}
                          style ={{flex:1}}
                        />

                          <TouchableOpacity onPress={()=>{setObsecureText(!obsecureText)}}>
                        <MaterialCommunityIcons
                          name ={obsecureText? "eye-outline":"eye-off-outline"}
                          size={20}
                        />
                      </TouchableOpacity>
                      </View>
                     
                      {touched.password && errors &&(
                        <Text style={styles.errorMessage}>
                            {errors.password}
                        </Text>
                      )}
                    </View>

                <Button title={"L O G I N"}onPress={isValid? handleSubmit: inValidForm} isValid={isValid}/>

                <Text style={styles.registration} onPress={()=>{navigation.navigate('Cart')}}> Register </Text>
                </View>

          )}
     
     </Formik>
       
      
      </View>
    </SafeAreaView>
   </ScrollView>
  )
}

export default LoginPage

