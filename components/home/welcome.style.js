import { StyleSheet } from "react-native";
import {COLORS,SIZES} from "../../constants/index";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
   container:{
    width:"100%"
   },
   welcomeTxt:(color,top)=>({
     fontFamily: "bold",
     fontSize: SIZES.xxLarge -5,
     marginTop: top,
     color:color,
     marginHorizontal: SIZES.small
     
   }),
   searchContainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignContent:"center",
    marginHorizontal:SIZES.small,
    backgroundColor:COLORS.secondary,
    borderRadius: SIZES.medium,
    marginVertical:SIZES.medium,
    height:50

   },
   searchIcon:{
        marginHorizontal:10,
        color:COLORS.gray,
        marginTop: SIZES.small-6
   },
   searchWrapper:{
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginRight: SIZES.small,
    borderRadius: SIZES.small

   },
   searchInput:{
    fontFamily:"regular",
    width:"100%",
    height:"100%",
    paddingHorizontal: SIZES.small-5
   },
   searchBtn:{
    width: 50,
    height:"100%",
    borderRadius: SIZES.medium,
    alignItems:"center",
    backgroundColor:COLORS.primary
   }

})

export default styles