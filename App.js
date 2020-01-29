import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <View style={styles.scrollView}>
          <View style={styles.main}>
            <View style={styles.image}>
              <Image
                source={require('./assets/intro_beer_icon.png')}
                style={{height: 100, width: 100}}
              />
            </View>
            <Text style={styles.title}>Taste Them All</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {height: '100%'},
  main: {
    height: '100%',
    backgroundColor: '#ddd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
  },
});

export default App;
