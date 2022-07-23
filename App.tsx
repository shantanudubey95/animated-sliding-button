import { StyleSheet, Text, View } from 'react-native';
import GestureHandlerExample from './GestureHandlerExample';

export default function App() {
  return (
    <View style={styles.container}>
    <GestureHandlerExample />
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
