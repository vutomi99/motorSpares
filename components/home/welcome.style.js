import { StyleSheet } from "react-native";
import {COLORS,SIZES} from "../../constants/index";

const styles = StyleSheet.create({
   container:{
    width:"100%"
   },
   welcomeTxt:{
     fontFamily: "bold",
     fontSize: SIZES.xxLarge -5,
     marginTop: SIZES.xSmall,
     color: COLORS.black
   },
   welcomeTxt2:{
    fontFamily: "bold",
    fontSize: SIZES.xxLarge -5,
    marginTop: SIZES.xSmall,
    color: COLORS.primary
    
   }

})

export default styles