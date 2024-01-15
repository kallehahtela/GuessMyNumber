import { useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGame';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />

  if (userNumber) {
    screen = <GameScreen />
  }

  return (
    <LinearGradient colors={['#124e78', '#6e0e0a']} style={styles.mainScreen}>
      <ImageBackground source={require('./assets/images/background.png')} resizeMode='cover' style={styles.mainScreen} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.mainScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: .2
  }
});
