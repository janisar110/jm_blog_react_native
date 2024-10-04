import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import App_Navigation from './src/config/App_Navigation'
import Splash_Screen from './src/screens/Splash_Screen'
import { Provider } from 'react-redux'
import store from './src/store'

const App = () => {
  const [show_Splash_Screen, setShow_Splash_Screen] = useState(false)

useEffect(() => {
  setTimeout(()=>{
    setShow_Splash_Screen(true)
  },3000)
}, [show_Splash_Screen])


     return (
    <Provider store={store}>
      {show_Splash_Screen ? <App_Navigation /> : <Splash_Screen />}
    </Provider>
  );

}
export default App
