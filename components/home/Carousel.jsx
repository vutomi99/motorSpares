import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SliderBox } from 'react-native-image-slider-box';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {COLORS} from '../../constants';

const Carousel = () => {

    const slides = [
        "https://myfitment.com/wp-content/uploads/2022/02/Where-To-Sell-Auto-Parts-1024x682.jpg",
        "https://orient-global-gmbh.net/assets/components/phpthumbof/cache/022856-avtozapchasti-mercedes-benz.9e04f90cb5b85d3d1765bc40351f5da2382.jpg",
        "https://images.netdirector.co.uk/gforces-auto/image/upload/w_392,h_294,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/24f97c3f503a832df15c26f173be89b3/cluth.jpg",

    ]
  return (
    <View style ={styles.carouselContainer}>
         <SliderBox images={slides}
            dotColor= {COLORS.primary}
            inactiveDotColor ={COLORS.secondary}
            ImageComponentStyle ={{borderRadius:15,width:"93%",marginTop:15}}
            autoplay
            circleLoop
         />
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({
    carouselContainer:{
        flex: 1,
        alignItems: "center"
    }
})