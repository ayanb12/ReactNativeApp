import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';

import colors from '../config/colors';
import AppText from './../components/AppText';
import AppButton from './../components/AppButton';

const WelcomeScreen = () => {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require('../assets/pexels-nicole-michalou-6061856.jpg')}>
      <LottieView
        autoPlay
        loop
        source={require('../assets/animations/2056-gagaha.json')}
        style={styles.animation}
        resizeMode="cover"
      />
      <AppText style={styles.text}>Meals To Go</AppText>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" />
        <AppButton title="Register" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  animation: {
    width: 500,
    position: 'absolute',
    top: 5,
  },
  text: {
    color: colors.black,
    fontWeight: 'bold',
    fontSize: 40,
    position: 'absolute',
    top: 320,
  },
  buttonContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    width: 250,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 160,
  },
});

export default WelcomeScreen;
