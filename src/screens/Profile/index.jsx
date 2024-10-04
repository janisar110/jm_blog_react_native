import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
<<<<<<< HEAD

const Profile = () => {
=======
import CMIconicButton from '../../components/CMIconicButton';
import { useNavigation } from '@react-navigation/native';
import CMButton from '../../components/CMButton';
import Feather from 'react-native-vector-icons/Feather'

const Profile = () => {
  const {navigate} = useNavigation()
>>>>>>> eba1012eb85b6cb0392de1dd432a57dfdeebde70
  const {profile} = useSelector(state => state.authReducer);
  console.log(profile)
  return profile ? (
    <>
<<<<<<< HEAD
      <View className="flex flex-1 justify-center items-center">
        <View className="mb-10">
          <Image
            className="rounded-full"
            width={150}
            height={150}
            source={{uri: profile.photo}}
          />
          <Text className="text-xl font-bold">{profile.name}</Text>
=======
    <View className="flex flex-row space-x-20 m-5 my-10">
      <View className="shadow-2xl border border-gray-300 rounded-full justify-center items-center px-1">
          <CMIconicButton iconName={"chevron-left"} iconSize={40} onPress={()=>navigate("Home")}/>
          </View>
          <Text className="text-xl text-center font-bold mb-5">
            Profile
          </Text>
        </View>
        <View className="flex justify-center items-center">
        <View className="mb-3 items-center">
          <Image
            className="rounded-full"
            width={125}
            height={125}
            source={{uri: profile.photo}}
          />
          <Text className="text-xl text-center font-bold mt-2">{profile.name}</Text>
          <Text className="text text-gray-500 text-center">{profile.id}</Text>
          <CMButton name={"Edit"} CMStyle={"bg-white text-black border border-gray-400 py-1 px-3 mt-1"} onPress={()=>navigate("EditProfile")} />
        </View>
        <View className="flex flex-row space-x-10">
          <View className="justify-center items-center p-2 rounded-2xl">
            <Feather name="clock" size={30} color="gray" />
            <Text className="text-lg font-bold">5</Text>
            <Text>On Going</Text>
          </View>
          <View className="justify-center items-center">
          <Feather name="clock" size={30} color="gray" />
            <Text className="text-lg font-bold">25</Text>
            <Text>Total Complete</Text>
          </View>
>>>>>>> eba1012eb85b6cb0392de1dd432a57dfdeebde70
        </View>
        <View className="border border-gray-200 shadow-2xl m-5 p-5">
          <View className="w-full py-2">
            <Text className="text-lg ">Email:</Text>
            <Text className="text-md">{profile.email}</Text>
          </View>
          <View className="w-full py-2">
          <Text className="text-lg ">Id:</Text>
            <Text className="text-md">{profile.id || profile.uid}</Text>
          </View>
          <View>
          </View>
        </View>
<<<<<<< HEAD
      </View>
=======
        </View>
>>>>>>> eba1012eb85b6cb0392de1dd432a57dfdeebde70
    </>
  ) : (
    <View className="flex flex-1 justify-center items-center">
      <Text className="text-3xl font-bold">Please Login</Text>
    </View>
  );
};

export default Profile;
