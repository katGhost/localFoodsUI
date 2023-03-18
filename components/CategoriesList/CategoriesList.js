import { View, Text, FlatList, Pressable, SafeAreaView } from 'react-native'
import React from 'react';
import list from './list';
import CategoryItem from '../CategoryItem/CategoryItem';

const CategoriesList = () => {
  return (
    <SafeAreaView className="py-4 px-6 mt-6 items-center justify-center">
      <FlatList
      scrollEnabled={true}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={list}
      renderItem={({item}) => <CategoryItem data={item} index={item} />}
      keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  )
}

export default CategoriesList