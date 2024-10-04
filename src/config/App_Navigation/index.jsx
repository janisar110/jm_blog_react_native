import {ActivityIndicator, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login';
import Signup from '../../screens/Signup';
import Bottom_Navigation from './Bottom_Navigation';
import {useDispatch, useSelector} from 'react-redux';
import PostDetails from '../../screens/PostDetails';
import {authAction} from '../../store/Slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { save_tokens_constant } from '../../utils/constants';
import GetStarted from '../../screens/GetStarted';
import CMLoader from '../../components/CMLoader';
import IntroSlides from '../../screens/IntroSlides';
import Notifications from '../../screens/Notifications';
import EditProfile from '../../screens/EditProfile';

const Stack = createNativeStackNavigator();

const App_Navigation = () => {
  const {isLoading, auth} = useSelector(state => state.authReducer);
  const dispatch = useDispatch();
  useEffect(() => {
  const checkAuthToken = async () => {
    try {
      console.log('Fetching auth token...');
      const auth_token = await AsyncStorage.getItem(save_tokens_constant) || "";
      console.log('Auth token:', auth_token);

      if (auth_token) {
        console.log('Auth token found, verifying...');
        dispatch(authAction({ auth: false, profile: null }));
      } else {
        dispatch(authAction({ auth: false, profile: null }));
        console.log('No auth token found, setting auth to false');
      }
    } catch (error) {
      dispatch(authAction({ auth: false, profile: null }));
      console.error('Error fetching auth token:', error);
    }
  };

  checkAuthToken();
}, [dispatch]);

  return isLoading ? (
    <View className="flex flex-1 justify-center items-center">
      <CMLoader size={70} />
    </View>
  ) : (
    <NavigationContainer>
      {auth ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen
            name="Bottom_Navigation"
            component={Bottom_Navigation}
          />
          <Stack.Screen name="PostDetails" component={PostDetails} />
          <Stack.Screen name="Notifications" component={Notifications} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="IntroSlides" component={IntroSlides} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="PostDetails" component={PostDetails} />
          <Stack.Screen
            name="Bottom_Navigation"
            component={Bottom_Navigation}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default App_Navigation;
