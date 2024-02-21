import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('screen').width;

const Mainscreen = ({setScanScreen}) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          style={{height: 40, width: 40}}
          source={require('../images/camera.png')}
        />
        <Text style={styles.descText}>
          Please move your camera {'\n'} over the QR Code
        </Text>
        <Image
          style={{margin: 20}}
          source={require('../images/scanimage/scanimages.png')}
        />
        <TouchableOpacity
          style={styles.buttonScan}
          onPress={() => setScanScreen(true)}>
          <View style={styles.buttonWrapper}>
            <Image
              style={{height: 36, width: 36}}
              source={require('../images/camera.png')}
            />
            <Text style={{...styles.buttonTextStyle, color: '#2196f3'}}>
              Scan QR Code
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#2196f3',
  },
  box: {
    width: deviceWidth - 20,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderRadius: 10,
    padding: 25,
    marginTop: '20%',
    backgroundColor: 'white',
  },
  descText: {
    padding: 16,
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
  },
  buttonScan: {
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#258ce3',
    paddingTop: 5,
    paddingRight: 25,
    paddingBottom: 5,
    paddingLeft: 25,
    marginTop: 20,
    marginBottom:60
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonTextStyle: {
    color: 'black',
    fontWeight: 'bold',
  },
});
export default Mainscreen;
