import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import {Link, useNavigation} from '@react-navigation/native';
<<<<<<< HEAD
import logo from '../../assets/images/logo.png';
=======
>>>>>>> eba1012eb85b6cb0392de1dd432a57dfdeebde70
import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useDispatch, useSelector} from 'react-redux';
import {authAction, profileAction} from '../../store/Slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {save_tokens_constant} from '../../utils/constants';
import CMIconicButton from '../../components/CMIconicButton';
import CMButton from '../../components/CMButton';

const Login = () => {
  const dispatch = useDispatch();
  const {navigate} = useNavigation();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    console.log('Email:', data.email);
    console.log('Password:', data.password);
  };

  const handle_onChange_Text = (field, value) => {
    setData(pre => ({...pre, [field]: value}));
  };

  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      await GoogleSignin.hasPlayServices();
      const userData = await GoogleSignin.signIn();
      // console.log('Google Sign-In Success:', userData);
<<<<<<< HEAD
      const googleCredential = auth.GoogleAuthProvider.credential(userData.idToken);
      await AsyncStorage.setItem(save_tokens_constant, userData.idToken);
       dispatch(authAction({auth:true, profile: userData.user}))
       navigate('Bottom_Navigation', { screen: 'Home' });
     // Sign-in the user with the credential
       auth().signInWithCredential(googleCredential);
   
=======
      const googleCredential = auth.GoogleAuthProvider.credential(
        userData.idToken,
      );
      await AsyncStorage.setItem(save_tokens_constant, userData.idToken);
      dispatch(authAction({auth: true, profile: userData.user}));
      navigate('Bottom_Navigation', {screen: 'Home'});
      // Sign-in the user with the credential
      auth().signInWithCredential(googleCredential);
>>>>>>> eba1012eb85b6cb0392de1dd432a57dfdeebde70
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Operation (e.g., sign in) is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services not available or outdated');
      } else {
        console.log('Some other error happened', error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '810010466130-0t4j1aeavf0uveela685i81nopktt9qm.apps.googleusercontent.com',
    });
  }, []);

  return (
    <>
      <View className="flex flex-row space-x-20 m-5 my-10">
        <View className="shadow-2xl border border-gray-300 rounded-full justify-center items-center">
          <CMIconicButton
            iconName={'chevron-left'}
            iconSize={50}
            onPress={() => navigate('IntroSlides')}
          />
        </View>
        <Text className="text-xl font-bold mb-5">Sign In!</Text>
      </View>
      <View className="flex flex-1 my-10 items-center">
        <View className=" mx-10">
          <Text className="text-3xl text-[#6f64ea] font-bold ">
            Wellcome Back
          </Text>
          <Text className="text-gray-500">
            Please enter your email address and password for login
          </Text>
        </View>
        <View className="mt-10 min-w-[350]">
          <View>
            <TextInput
              className=" border border-[#6f64ea]  text-lg rounded-xl mb-3 p-4"
              onChangeText={e => handle_onChange_Text('email', e)}
              placeholder="Enter your email"
            />
          </View>
          <View>
            <TextInput
              className="border border-[#6f64ea]  text-lg rounded-xl mb-3 p-4"
              onChangeText={e => handle_onChange_Text('password', e)}
              placeholder="Enter password"
              // secureTextEntry={true}
            />
          </View>
          <Text className="font-bold text-right my-3">Forgot Password?</Text>
          <CMButton name="Sign In" CMStyle={'py-4'} onPress={handleSubmit} />
        </View>
        <View className="mt-5">
          <Text className="font-bold text-center text-gray-500">
            or Sign In with
          </Text>
          <View className="flex flex-row space-x-10 mt-5 ">
            <View className=" shadow-2xl p-2 rounded-lg border border-gray-200">
              <FontAwesome name="apple" size={40} />
            </View>
            <TouchableOpacity onPress={signInWithGoogle} disabled={loading}>
              <View className="shadow-2xl p-2 rounded-lg border border-gray-200">
                {loading ? (
                  <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                  <FontAwesome name="google" size={40} />
                )}
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View className="mt-10 flex flex-row space-x-1">
          <Text>Not Registered Yet?</Text>
          <Link to={'/Signup'}>
            <Text className="text-[#6f64ea] ">Signup now</Text>
          </Link>
        </View>
      </View>
    </>
  );
};

export default Login;
