/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState}from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ScanScreen from './components/Qrcode';
import Qrcode1 from './components/Qrcode1';
import Qrcode2 from './components/Qrcode2';
import Mainscreen from './screens/Mainscreen';
import ScanScreen1 from './screens/ScanScreen';

const App=()=>{
  const [scanScreen,setScanScreen]=useState(false)

  let screen= <Mainscreen setScanScreen={setScanScreen}/>

  if(scanScreen){
    screen = <ScanScreen1/>
  }

  return(
    <>
    {screen}
    </>
  )
}

export default App;
