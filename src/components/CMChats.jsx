import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import CMIconicButton from './CMIconicButton';
import Feather from "react-native-vector-icons/Feather"

const CMChats = () => {
 const data = [
        {
          id: 1,
          title: 'Chat 01',
          description: 'Active now',
          image: require("../assets/images/man1.jpeg"),
        },
        {
          id: 2,
          title: 'Chat 02',
          description: 'Active 1h ago',
          image: require("../assets/images/man2.jpeg"),
        },
        {
          id: 3,
          title: 'Chat 03',
          description: 'Active 2h ago',
          image: require("../assets/images/women1.jpeg"),
        },
        
      ];
  const {navigate} = useNavigation();

  const handleNavigate = item => {
    // console.log("navigation run")
    navigate('PostDetails', {item});
  };


  const renderItems = ({item}) => (
    <TouchableOpacity onPress={() => handleNavigate(item)}>
      <View className="flex flex-row justify-between items-center rounded-xl border border-gray-200 h-max p-2 px-4 my-3 mx-2">
       <View className="flex flex-row">
       <Image className="w-20 h-20 mr-3 rounded-full " source={item.image} />
        <View className="justify-center">
          <Text className="text-lg font-bold">{item.title}</Text>
          <Text className="text-gray-500">{item.description}</Text>
        </View>
       </View>
        <View className="">
                <Feather name="camera" size={30}/>
        </View>
      </View>
      </TouchableOpacity>

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

export default CMChats;
