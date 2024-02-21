import React, { useState } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, Linking, Alert, View } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera, BarCodeReadEvent } from 'react-native-camera';

interface ScanScreenProps {}

const ScanScreen: React.FC<ScanScreenProps> = () => {
  const [flash1, setFlash1] = useState(RNCamera.Constants.FlashMode.off);
  const [toggle, setToggle] = useState(true);

  const onSuccess = async (e: BarCodeReadEvent) => {
    setToggle(false);
    const { data } = await e;

    const openLink = () => {
      try {
        setToggle(true);
        return Linking.openURL(data);
      } catch (err) {
        return console.error('An error occurred', err);
      }
    };

    const closeLink = () => {
      setToggle(true);
    };

    Alert.alert('Link', data, [
      { text: 'Open', style: 'default', onPress: openLink },
      { text: 'Close', style: 'default', onPress: closeLink },
    ]);
  };

  const flash = () => {
    if (flash1 === RNCamera.Constants.FlashMode.off) {
      setFlash1(RNCamera.Constants.FlashMode.torch);
    } else {
      setFlash1(RNCamera.Constants.FlashMode.off);
    }
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
      flashMode={flash1}
      reactivate={toggle}
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

AppRegistry.registerComponent('default', () => ScanScreen);

export default ScanScreen;
