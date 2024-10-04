import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CMIconicButton from '../../components/CMIconicButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import CMHomeCard from '../../components/CMHomeCard';
import CMProgressCards from '../../components/CMProgressCards';

const Home = () => {
  const {navigate} = useNavigation();

  return (
    <>
      <View className="px-10 mt-10">
        <View className="flex flex-row justify-between">
          <View className="shadow-2xl border border-gray-300 rounded-full justify-center items-center p-2">
            <AntDesign name="appstore-o" size={25} color="gray" />
          </View>
          <View className="items-center justify-center">
            <Text className="text-lg text-gray-800">Friday, 26</Text>
          </View>
          <View className="shadow-2xl border border-gray-300 rounded-full justify-center items-center p-2">
            <CMIconicButton
              iconName={'bell'}
              iconSize={25}
              iconColor={'gray'}
              onPress={() => navigate('Notifications')}
            />
          </View>
        </View>
        <Text className="mt-10 text-[30px] max-w-[300px] font-mono font-extrabold text-gray-700">
          Let's make a habbit together
        </Text>
      </View>
      <View className="m-5">
        <CMHomeCard />
      </View>
      <View className="mx-8 mt-5">
        <View className="flex flex-row justify-between">
          <Text className="text-lg font-bold">In Progresss</Text>
          <View className="shadow-2xl border border-gray-300 rounded-full justify-center items-center">
            <CMIconicButton
              iconName={'chevron-right'}
              iconSize={30}
              onPress={() => navigate('Home')}
            />
          </View>
        </View>
      </View>
      <View className="items-center mt-5 flex-1 overflow-auto">
          <CMProgressCards />
      </View>
    </>
  );
};

export default Home;
