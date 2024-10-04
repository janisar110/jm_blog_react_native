import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const CMIconicButton = ({iconName, iconSize, iconColor, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
<<<<<<< HEAD
      <FontAwesome  name={iconName} size={iconSize} color={iconColor} />
=======
      <Feather  name={iconName} size={iconSize} color={iconColor} />
>>>>>>> eba1012eb85b6cb0392de1dd432a57dfdeebde70
    </View>
    </TouchableOpacity>
  );
};

export default CMIconicButton;
