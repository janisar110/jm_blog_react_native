import {Image, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import getstarted from '../../assets/images/getstarted.jpg';
import CMButton from '../../components/CMButton';
import { useNavigation } from '@react-navigation/native';

const GetStarted = () => {
    const {navigate} = useNavigation();
  return (
      <View className="flex flex-1 items-center">
        <View className="relative">
          <Image source={getstarted} width={500} height={500} />
        </View>
        <View className=" h-[500px] w-full bottom-10 bg-white rounded-3xl px-10">
            <Text className="text-center mt-10 text-5xl font-mono font-extrabold text-[#6a61e6]">Taskcy</Text>
            <Text className="text-center mt-5 text-3xl font-mono font-extrabold text-gray-500">Building Better Workplace</Text>
            <Text className="text-center mt-5 text-md font-mono font-extrabold text-gray-400">Create a unique emotional story that</Text>
            <Text className="text-center  text-md font-mono font-extrabold text-gray-400">Describe better then world</Text>
            <CMButton name={"Get Started"} CMStyle={"py-4 mt-8 mx-4 text-lg"} onPress={()=>navigate("IntroSlides")} />
        </View>
      </View>
   
  );
};

export default GetStarted;
