import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'
interface Props {
  value?: string;
  placeholder: string;
  onPress?: () => void;
  onChangeText?:(text:string)=>void;
}

const SearchBar = ({placeholder,value,onPress,onChangeText}:Props) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4'>
      <Image source={icons.search} className='size-5' 
        resizeMode='contain' tintColor="#ab8bff"/>
        <TextInput
            onPress={onPress}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor={"#a8b5db"}
            className='flex-1 ml-2 text-white'
        />
    </View>
  )
}

export default SearchBar