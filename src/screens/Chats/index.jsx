import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import CMIconicButton from '../../components/CMIconicButton';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import CMChats from '../../components/CMChats';

const Chats = () => {
  const {navigate} = useNavigation();
  return (
    <>
      <View className="flex flex-row space-x-20 m-5 my-10">
        <View className="shadow-2xl border border-gray-300 rounded-full justify-center items-center px-1">
          <CMIconicButton
            iconName={'chevron-left'}
            iconSize={40}
            onPress={() => navigate('Home')}
          />
        </View>
        <Text className="text-xl text-center font-bold mb-5 ">Chats</Text>
      </View>
      <View className="mx-5">
        <View className="py-3 pl-2">
          {/* <Feather name="search" size={40} /> */}
          <TextInput
            className=" border border-[#6f64ea]  text-lg rounded-xl mb-3 p-4"
            placeholder="Search"
          />
        </View>
      </View>
      <View>
        <CMChats />
      </View>
      {/* <View className="flex flex-1 justify-center items-center">
        <Text className="text-3xl font-bold">Chats</Text>
      </View> */}
    </>
  );
};

export default Chats;
