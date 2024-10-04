import React, { useEffect, useState } from 'react';
import { View, TextInput, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import CMIconicButton from '../../components/CMIconicButton';
import { useNavigation } from '@react-navigation/native';

const ImageSelector = () => {
  const {navigate} = useNavigation()
  const [imageSource, setImageSource] = useState(null);
 const [data, setData] = useState({})

const handleOpenGallery = () => {
  launchImageLibrary({
    includeBase64:false,
    mediaType:'photo',
    selectionLimit:1
  }, (res) => {
    if (res.didCancel) {
      console.log('User cancelled image picker');
    } else if (res.error) {
      console.log('ImagePicker Error: ', res.error);
    } else {
      // Handle selected image
      setImageSource(res.assets[0]);
      // console.log(res.assets[0]);
    };

  })
}


  const handleSave = () => {
    // Handle saving the title, description, and image source
    console.log('Title:', data.title);
    console.log('Description:', data.description);
    console.log('Image Source:', data.imageSource);
  };

  const handle_onChange_Text = (field, value) => {
    setData(pre => ({...pre, [field]: value}));
  };

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
    <View className="flex flex-1 justify-center items-center p-10">
      <TouchableOpacity onPress={handleOpenGallery}>
            <Text className="bg-[#6f64ea] text-white font-bold mb-3 p-4 rounded-lg text-center">
            Select Image
            </Text>
          </TouchableOpacity>
     {imageSource && <Image className="rounded-full border border-gray-500 shadow-2xl shadow-black" source={{ uri: imageSource.uri}} style={styles.image} />}
      <TextInput
        style={styles.input}
        placeholder="Enter Title"
        onChangeText={e => handle_onChange_Text('title', e)}
      />
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Enter Description"
        onChangeText={e => handle_onChange_Text('description', e)}
        multiline={true}
        numberOfLines={4}
      />
      <TouchableOpacity onPress={handleSave}  disabled={!imageSource || !data.title || !data.description}>
            <Text className="bg-[#6f64ea] text-white font-bold mb-3 p-4 rounded-lg text-center">
            Add Project
            </Text>
          </TouchableOpacity>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  textArea: {
    height: 120, // Set desired height for the textarea
    textAlignVertical: 'top', // Ensures vertical alignment is correct
  },
});

export default ImageSelector;
