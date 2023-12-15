import { StyleSheet } from "react-native";
import {COLORS,SIZES} from '../constants/index'
import { Colors } from "react-native/Libraries/NewAppScreen";


const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: COLORS.lightWhite

    },
    UpperRow:{
        marginHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        position:"absolute",
        zIndex:999,
        top: SIZES.xxLarge,
        width: SIZES.width-44
    },
    image:{
        aspectRatio:1,
        resizeMode:"cover"
    },
    detais:{
        marginTop: -SIZES.large,
        backfaceVisibility: COLORS.lightWhite,
        width:SIZES.width,
        borderTopLeftRadius: SIZES.medium,
        borderTopRightRadius: SIZES.medium
    },
    titleRow:{
        marginHorizontal:20,
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width: SIZES.width -44,
        top: 20,
       

    },
    ratingRow:{
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width: SIZES.width -10,
        top: 5,
    },
    
    title:{
        fontFamily:"bold",
        fontSize: SIZES.large
    },
    Pricewrapper:{
            backgroundColor:COLORS.secondary,
            borderRadius:SIZES.large
    },
    price:{
        padding:6,
        fontFamily:"semibold",
        fontSize: SIZES.large
    },
    rating:{
        top:SIZES.large,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        marginHorizontal: SIZES.large
    },
    ratingtext:{
        color:COLORS.gray,
        fontFamily:"medium",
        paddingHorizontal: SIZES.xSmall

    },
    descriptionWrepper:{
        marginTop:SIZES.large+2,
        marginHorizontal:SIZES.large

    },
    description:{
        fontFamily:"medium",
        fontSize: SIZES.large-2
    },
    DscBody:{
        fontFamily:"regular",
        fontSize: SIZES.small,
        textAlign:"justify",
        marginBottom:SIZES.small



    },
    location:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:COLORS.secondary,
        marginHorizontal:12,
        padding:5,
        borderRadius: SIZES.large

    },
    cartRow:{
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width: SIZES.width ,
    },
    cartBtn:{
        width:SIZES.width*0.7,
        backgroundColor:COLORS.black,
        padding:SIZES.small/2,
        borderRadius: SIZES.large,
        marginLeft:12
        

    },
    cartTitle:{
        marginLeft:SIZES.small,
        fontFamily:"bold",
        fontSize: SIZES.medium,
        color: COLORS.lightWhite
    },
    addCart:{
        width:37,
        height:37,
        borderRadius:50,
        margin:SIZES.small,
        backgroundColor: COLORS.black,
        justifyContent:"center",
        alignItems:"center"


    }





})

export default styles;
