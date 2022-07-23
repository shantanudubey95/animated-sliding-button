import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import ReAnimatedExample from './ReAnimatedExample';

export default function App() {
  return (
    <View style={styles.container}>
    <ReAnimatedExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
