import { FlatList, Text, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES } from '../../constants';
import ProductCardView from './ProductCardView';
import useFetch from '../../hook/useFetch';

import { ActivityIndicator } from 'react-native';

const ProductRow = () => {
  const {data,isLoading,error} = useFetch()
   
  return (
       <View style={{marginTop: SIZES.small-4,marginLeft: 12}}>
            {isLoading ? (
              <ActivityIndicator
                size = {SIZES.xxLargelarge}
                color = {COLORS.primary}
              />
            ):error ?(
              <Text>{error}</Text>
            ):(

              <FlatList
              data ={data}
              keyExtractor ={(item)=>item._id}
              renderItem={({ item })=> <ProductCardView item={item}/>}
              horizontal
              contentContainerStyle ={{columnGap:SIZES.medium}}
          
          />
            ) }
       </View>
  )
}

export default ProductRow

