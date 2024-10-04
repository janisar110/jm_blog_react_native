import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import man1 from '../assets/images/man1.jpeg';
import man2 from '../assets/images/man2.jpeg';
import women1 from '../assets/images/women1.jpeg';

const CMHomeCard = () => {
  const data = [
    {
      id: 1,
      title: 'Application Design',
      description: 'UI Design kit',
      image1: require('../assets/images/man1.jpeg'),
      image2: require('../assets/images/man2.jpeg'),
      image3: require('../assets/images/women1.jpeg'),
      progress: "40/80"
    },
    {
      id: 2,
      title: 'Web Design',
      description: 'UI Design kit',
      image1: require('../assets/images/man1.jpeg'),
      image2: require('../assets/images/man2.jpeg'),
      image3: require('../assets/images/women1.jpeg'),
      progress: "60/80"
    },
    {
        id: 3,
        title: 'Web Development',
        description: 'UI Design kit',
        image1: require('../assets/images/man1.jpeg'),
        image2: require('../assets/images/man2.jpeg'),
        image3: require('../assets/images/women1.jpeg'),
        progress: "20/80"
      },
  ];

  const renderItems = ({item}) => (
    <View className="bg-[#6f64ea] max-w-[260px] max-h-[150px] rounded-2xl p-5 mx-3">
      <View className="pb-5">
        <Text className="text-white text-lg">{item.title}</Text>
        <Text className="text-white text-[12px]">{item.description}</Text>
      </View>
      <View className="flex flex-row justify-between pb-5">
        <View className="flex flex-row">
          <Image className="w-8 h-8 rounded-full" source={man1} />
          <Image className="w-8 h-8 rounded-full" source={man2} />
          <Image className="w-8 h-8 rounded-full" source={women1} />
        </View>
        <View className="mx-2">
          <View className="flex flex-row space-x-3 ">
            <Text className="text-white text-[12px]">Progress</Text>
            <Text className="text-white text-[12px]">{item.progress}</Text>
          </View>
          <View className="h-[2px] w-[50px] mt-2 ">
            <Text className="bg-white rounded-full"></Text>
          </View>
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
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        
      />
    </>
  );
};

export default CMHomeCard;
