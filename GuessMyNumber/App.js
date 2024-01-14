import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGame';

export default function App() {
  return (
    <LinearGradient colors={['#124e78', '#6e0e0a']} style={styles.mainScreen}>
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1
  }
});
