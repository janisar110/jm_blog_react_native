// CustomDialog.js
import React, { useState } from 'react';
import { View, Text  } from 'react-native';
import Modal from 'react-native-modal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CMButton from './CMButton';

const CMDailogBoxAlerts = ({ isVisible, type, message }) => {
  const [onClose , setOnClose] = useState(false)
  const getIconName = () => {
    switch (type) {
      case 'success':
        return 'check-circle';
      case 'error':
        return 'error';
      case 'message':
        return 'info';
      default:
        return 'info';
    }
  };

  const getIconColor = () => {
    switch (type) {
      case 'success':
        return 'green';
      case 'error':
        return 'red';
      case 'message':
        return 'blue';
      default:
        return 'blue';
    }
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose} className="justify-center items-center">
      <View className="w-[300px] p-5 bg-white rounded-lg items-center">
        <MaterialIcons name={getIconName()} size={40} color={getIconColor()} />
        <Text className="text-xl text-center my-5">{message}</Text>
        <CMButton name={OK} CMStyle={"mt-3 p-3"} onPress={setOnClose(true)} />
      </View>
    </Modal>
  );
};



export default CMDailogBoxAlerts;
