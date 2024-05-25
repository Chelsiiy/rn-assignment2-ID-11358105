import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>"My name is CHELSEA"</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33FCFF',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    color : "white" ,
  },
 
    
});

