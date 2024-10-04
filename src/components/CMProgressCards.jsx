import React, {useState} from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import AnimatedCircularProgress from 'react-native-circular-progress';
import AntDesign from "react-native-vector-icons/AntDesign"
const CMProgressCards = () => {


  const data = [
    {
      id: 1,
      title: 'Productivity Mobile App',
      description: 'Create Detail Booking',
      time: '2 Minutes ago',
      progress: '80%',
    },
    {
      id: 2,
      title: 'Banking Mobile App',
      description: 'Revision Home Page',
      time: '5 Minutes ago',
      progress: '20%',
    },
    {
      id: 3,
      title: 'Landing Page App',
      description: 'Working on Landing Page',
      time: '6 Minutes ago',
      progress: '60%',
    },
    {
      id: 4,
      title: 'Todo Mobile Application',
      description: 'Working on Todo Mobile App',
      time: '6 Minutes ago',
      progress: '14%',
    },
  ];

  const renderItems = ({item}) => (
    <View className="shadow-2xl border border-gray-300 max-w-[327px] max-h-[80px] rounded-2xl my-2 ">
    <View className="flex flex-row space-x-20 items-center">
    <View className="pl-2 py-1">
        <Text className="text-gray-600 text-[12px]">{item.description}</Text>
        <Text className="font-bold text">{item.title}</Text>
        <Text className="text-gray-400 text-[12px]">{item.time}</Text>
      </View>
      <View className="px-2">
        <AntDesign name="loading1" size={40} color="#6f64ea"/>
        <Text className="text-gray-400 absolute text-center justify-center items-center text-[12px]">{item.progress}</Text>
      </View>
    </View>
     </View>
  );
  return (
    <>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default CMProgressCards;
