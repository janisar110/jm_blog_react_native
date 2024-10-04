import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CMIconicButton from '../../components/CMIconicButton'
import { useNavigation } from '@react-navigation/native'


const EditProfile = () => {
  const {navigate} = useNavigation()
  return (
    <>
     <View className="flex flex-row space-x-20 m-5 my-10">
      <View className="shadow-2xl border border-gray-300 rounded-full justify-center items-center px-1">
          <CMIconicButton iconName={"chevron-left"} iconSize={40} onPress={()=>navigate("Profile")}/>
          </View>
          <Text className="text-xl text-center font-bold mb-5">
            Edit Profile
          </Text>
        </View>
    <View className="flex flex-1 justify-center items-center">
    <Text className="text-3xl font-bold">EditProfile</Text>
      </View>
  </>
  )
}

export default EditProfile

