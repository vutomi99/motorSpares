import { StyleSheet } from "react-native";
import {SIZES,COLORS,SHADOWS} from '../../constants/index'
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:SIZES.small,
        flexDirection:"row",
        padding:SIZES.medium,
       borderRadius:SIZES.small,
       backgroundColor: "#fff",
       ...SHADOWS.medium,
       shadowColor:COLORS.lightWhite

    },
    image:{
        width:70,
        backgroundColor:COLORS.secondary,
        justifyContent:"center",
        alignContent:"center"
    },
    Productimg:{
        width:"100%",
        height:65,
        borderRadius:SIZES.small,
        resizeMode:"cover"
    },
    txtContainer:{
        flex:1,
        marginHorizontal:SIZES.medium,

    },
    producttitle:{
        fontSize:SIZES.medium,
        fontFamily:"bold",
        color:COLORS.primary,
    },
    supplier:{
        fontSize:SIZES.small +2,
        fontFamily:"regular",
        color:COLORS.gray,
        marginTop:3,
    }
})
export default styles;