import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import CMButton from '../../components/CMButton';


const slides = [
  {
    key: '1',
    title: 'Task Management',
    text: "let's create a space for your work flow",
    image: require('../../assets/images/image1.jpg'),
  },
  {
    key: '2',
    title: 'Task Management',
    text: "Work more Structured and Organized",
    image: require('../../assets/images/image2.jpg'),
  },
  {
    key: '3',
    title: 'Task Management',
    text: "Manage your Tasks quickly for results",
    image: require('../../assets/images/image3.jpg'),
  },
];

const IntroSlides = () => {
  const {navigate} = useNavigation();
  const renderItem = ({item}) => (
    <View className="flex flex-1">
      <View className="relative">
        <Image source={item.image} width={500} height={500} />
      </View>
      <View className="w-full h-[500px] bottom-10 bg-white rounded-3xl px-10">
        <Text className="mt-10 text-lg font-mono font-extrabold text-[#6a61e6]">
          {item.title}
        </Text>
        <Text className="mt-5 w-[290px] text-4xl font-mono font-extrabold text-gray-500">
          {item.text}
        </Text>
    </View>
    </View>
  );

  const onDone = () => {
    navigate('Login');
  };

  const renderSkipButton = ()=> {
    return (
      <Text className="text-[#6a61e6] text-[15px] items-center justify-center">Skip</Text>
    );
  }

  const renderNextButton = () => {
    return (
      <View className="justify-center items-center rounded-full w-10 h-10 bg-[#6f64ea] mx-1">
        <FontAwesome
          name="arrow-right"
          color="white"
          size={25}
        />
      </View>
    );
  };
  const renderDoneButton = () => {
    return (
      <TouchableOpacity onPress={onDone}>
      <View className="justify-center items-center rounded-full w-10 h-10 bg-[#6f64ea]">
        <FontAwesome
          name="check-circle"
          color="white"
          size={25}
        />
      </View>
    </TouchableOpacity>
    );
  }

  return (
    <AppIntroSlider renderItem={renderItem} data={slides} renderDoneButton={renderDoneButton}
    renderNextButton={renderNextButton} showSkipButton={true} renderSkipButton={renderSkipButton} />
  );
};

export default IntroSlides;
