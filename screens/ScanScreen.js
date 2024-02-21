import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const ScanScreen1 = () => {
  const [scanned, setScanned] = useState(false);
  const [flash1, setflash1] = useState(RNCamera.Constants.FlashMode.off);

  const onSuccess = e => {
    setScanned(true);
    const {data} = e;
    const closelink = async () => {
      try {
        setScanned(false);
      } catch (err) {
        return console.error('An error occurred', err);
      }
    };
    Alert.alert('Link', data, [
      {text: 'Close', style: 'default', onPress: closelink},
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
    <View style={styles.container}>
      <Text style={styles.descText}>
        Please move your camera {'\n'} over the QR Code
      </Text>
      <View style={styles.cameraContainer}>
        <RNCamera
          style={styles.preview}
          flashMode={flash1}
          type={RNCamera.Constants.Type.back}
          onBarCodeRead={scanned ? undefined : onSuccess}
          captureAudio={false}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}></RNCamera>
      </View>
      <View></View>
      <View style={styles.imagecontainer}>
        <Image
          style={{height: 40, width: 40}}
          source={require('../images/camera.png')}
        />
      </View>
      <TouchableOpacity style={styles.torchContainer} onPress={flash}>
        <Image
          style={{height: 23, width: 23}}
          source={require('../images/torch/torch.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196f3',
  },
  descText: {
    padding: 16,
    textAlign: 'center',
    fontSize: 20,
    marginTop: 40,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  cameraContainer: {
    width: deviceWidth,
    height: deviceHeight - 400,
    borderColor: 'black',
    borderWidth: 3,
    overflow: 'hidden',
    marginTop: 10,
  },
  imagecontainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 50,
    marginTop: -25,
  },
  torchContainer: {
    alignSelf: 'flex-end',
    backgroundColor: 'white',
    borderRadius: 50,
    marginRight: 10,
    alignItems: 'center',
    padding: 8,
    marginTop: -92,
  },
});

export default ScanScreen1;
