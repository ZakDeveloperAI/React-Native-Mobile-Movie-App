import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'

const SearchBar = () => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
      <Image source={icons.search} className='size-5' 
        resizeMode='contain' tintColor="#ab8bff"/>
        <TextInput
            onPress={()=>{}}
            placeholder='Search for anything...'
            value=''
            onChangeText={()=>{}}
            placeholderTextColor={"#a8b5db"}
            className='flex-1 ml-2 text-white'
        />
    </View>
  )
}

export default SearchBar