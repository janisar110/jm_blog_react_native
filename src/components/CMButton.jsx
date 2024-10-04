import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CMButton = ({name, CMStyle, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
<<<<<<< HEAD
      <Text className={`bg-[#66baf2] text-white font-bold text-center  rounded-lg ${CMStyle}`}>
=======
      <Text className={`bg-[#6f64ea] text-white font-bold text-center shadow-2xl drop-shadow-2xl shadow-black  rounded-lg ${CMStyle}`}>
>>>>>>> eba1012eb85b6cb0392de1dd432a57dfdeebde70
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default CMButton;
