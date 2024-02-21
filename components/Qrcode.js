import React, {useEffect, useState} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

const ScanScreen = () => {
  const [flash1, setflash1] = useState(RNCamera.Constants.FlashMode.off);
  // const [toggle,setToggle]=useState(true)
  const [scanned,setScanned]=useState(false)

  // useEffect(()=>{
  //   return setScanned(false)
  // },[scanned])

  const onSuccess =(e) => {
    // setToggle(false)
    setScanned(true)
    const {data} = e;
    const openlink = () => {
      try {
        // setToggle(true)
        setScanned(false)
        return Linking.openURL(data);
      } catch (err) {
        return console.error('An error occurred', err);
      }
    };
    const closelink=()=>{
      // setToggle(true);
      setScanned(false)
    }
    Alert.alert('Link', data, [
      {text: 'Open', style: 'default', onPress: openlink},
      {text: 'Close', style: 'default',onPress: closelink},
    ]);
  };
  

  const flash = () => {
    if (flash1 === RNCamera.Constants.FlashMode.off) {
      setflash1(RNCamera.Constants.FlashMode.torch);
    } else {
      setflash1(RNCamera.Constants.FlashMode.off);
    }
  };

  return (
    <QRCodeScanner
      onRead={scanned ? undefined : onSuccess}
      flashMode={flash1}
      topContent={<Text style={styles.centerText}>QR CODE SCANNER</Text>}
      bottomContent={
        <TouchableOpacity style={styles.buttonTouchable} onPress={flash}>
          <Text style={styles.buttonText}>Flash On/Off</Text>
        </TouchableOpacity>
      }
    />
  );
};

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});

export default ScanScreen;
