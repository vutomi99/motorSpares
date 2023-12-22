import { StyleSheet } from "react-native";
import {COLORS,SIZES} from "../constants"

const styles = StyleSheet.create({
    cover:{
        height:SIZES.height/2.4,
        width:SIZES.width,
        resizeMode:'contain',
        marginBottom:SIZES.large
    
    },
    title:{
        fontFamily:"extrabold",
        fontSize:SIZES.small,
        color: COLORS.primary,
        alignItems:'center',
        marginBottom:SIZES.xxLarge
      },
      wrapper:{
        marginBottom:20,
        //marginHorizontal:20
      },
      label:{
        fontFamily:"regular",
        fontSize:SIZES.small,
        marginBottom:5,
        marginEnd:5,
        textAlign: "left"
      },
      inputWrapper: (borderColor) =>({
        borderColor:borderColor,
        backgroundColor:COLORS.lightWhite,
        borderWidth:1,
        height:44,
        borderRadius:12,
        flexDirection:"row",
        paddingHorizontal:15,
        alignItems:"center"


      }),
      iconStyle:{
        marginRight:10
      },
      errorMessage:{
        color:COLORS.red,
        fontFamily:"regular",
        marginTop:5,
        marginLeft:5,
        fontSize:SIZES.xSmall
      },
      registration:{

        marginTop:20,
        textAlign:"center",
        zIndex:999


      }
      
})

export default styles;