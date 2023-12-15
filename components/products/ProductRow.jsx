import { FlatList, Text, View } from 'react-native'
import React from 'react'
import { SIZES } from '../../constants';
import ProductCardView from './ProductCardView';

const ProductRow = () => {
    const products = [3,5,6,7];
  return (
       <View style={{marginTop: SIZES.small-4,marginLeft: 12}}>
             <FlatList
            data ={products}
            renderItem={({item})=> <ProductCardView/>}
            horizontal
            contentContainerStyle ={{columnGap:SIZES.medium}}
        
        />

       </View>
  )
}

export default ProductRow

