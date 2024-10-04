import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {posts} from './data'; // Adjust the import path as necessary
import {useNavigation} from '@react-navigation/native';
import CMDailogBoxAlerts from '../../components/CMDailogBoxAlerts';
import CMButton from '../../components/CMButton';
import CMIconicButton from '../../components/CMIconicButton';

const Posts = () => {
  const {navigate} = useNavigation();

  const handleNavigate = item => {
    // console.log("navigation run")
    navigate('PostDetails', {item});
  };

  const handleEndReached = ()=>{
    <CMDailogBoxAlerts isVisible={true} type={"success"} message={"Items ended!"}/>
  }

  const renderItems = ({item}) => (
    <TouchableOpacity onPress={() => handleNavigate(item)}>
      <View className="flex flex-row border border-gray-200 h-max p-2 my-3 mx-2">
<<<<<<< HEAD
        <Image className="w-20 h-20 mr-3 " source={item.image} />
=======
        <Image className="w-20 h-20 mr-3 rounded-full " source={item.image} />
>>>>>>> eba1012eb85b6cb0392de1dd432a57dfdeebde70
        <View className="justify-center">
          <Text className="text-lg font-bold">{item.title}</Text>
          <Text className="">{item.description}</Text>
        </View>
      </View>
      </TouchableOpacity>

  );
  return (
    <>
<<<<<<< HEAD
        <View>
          <CMIconicButton name="Add Post" CMStyle="" iconName="plus-circle" iconSize={30} iconColor="white" onPress={()=> navigate('Bottom_Navigation', { screen: 'AddPost' })}   />
=======
         <View className="flex flex-row space-x-20 m-5 my-10">
      <View className="shadow-2xl border border-gray-300 rounded-full justify-center items-center px-1">
          <CMIconicButton iconName={"chevron-left"} iconSize={40} onPress={()=>navigate("Home")}/>
          </View>
          <Text className="text-xl text-center font-bold mb-5 ">
            Projects
          </Text>
        </View>
>>>>>>> eba1012eb85b6cb0392de1dd432a57dfdeebde70
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}
        onEndReached={handleEndReached}
        
        />

<<<<<<< HEAD
        </View>

=======
>>>>>>> eba1012eb85b6cb0392de1dd432a57dfdeebde70
    </>
  );
};

export default Posts;
