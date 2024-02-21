import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import {RNCamera} from 'react-native-camera';

const Qrcode2 = () => {
  const [scanned, setScanned] = useState(false);

  const onSuccess = e => {
    setScanned(true);
    const {data} = e;
    const openlink = () => {
      try {
        setScanned(false);
        return Linking.openURL(data);
      } catch (err) {
        return console.error('An error occurred', err);
      }
    };
    Alert.alert('Link', data, [
      {text: 'Open', style: 'default', onPress: openlink},
    ]);
  };

  return (
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        onBarCodeRead={scanned ? undefined : onSuccess}
        captureAudio={false}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}><Text>Scan QR</Text></RNCamera>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#2196f3',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default Qrcode2;
