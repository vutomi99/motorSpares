import { StyleSheet } from "react-native";
import {COLORS,SIZES} from "../../constants";

const styles = StyleSheet.create({

    container:{
        width:182,
        height: 185,
        marginEnd:22,
        borderRadius:SIZES.small,
        backgroundColor: COLORS.secondary
    },
    imagecontainer:{
        flex: 1,
        width:145,
        marginLeft: SIZES.small/2,
        marginTop: 3,
        borderRadius:SIZES.small,
        overflow: "hidden"
    },
    image:{
        aspectRatio:1,
        resizeMode:'cover' 
    },
    details:{
        padding: SIZES.small,
    },
    title:{
        fontFamily: "bold",
        fontSize: SIZES.small,
        marginBottom: 2

    },
    price:{
        fontFamily: "bold",
        fontSize: SIZES.small,
        marginBottom: 2


    },
    Supplier:{
        fontFamily: "regular",
        fontSize: SIZES.small,
        color: COLORS.gray
   

    },
    addbtn:{
        position:"absolute",
        bottom: SIZES.xSmall,
        right: SIZES.xSmall

    }

})

export default styles;