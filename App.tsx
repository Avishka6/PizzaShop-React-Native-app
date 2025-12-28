import React, { JSX } from 'react';
import { StyleSheet} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppNavigation from './src/navigations/AppNavigation';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigation />
      {/* <LoginScreen /> */}
      {/* <SignupScreen /> */}
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
