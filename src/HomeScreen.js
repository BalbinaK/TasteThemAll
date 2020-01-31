import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import Logo from './Logo';

export default class HomeScreen extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <SafeAreaView>
        <View style={styles.scrollView}>
          <View style={styles.main}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => navigate('Profile', {name: 'Jane'})}>
              <Logo />
              <Text style={styles.title}>Taste Them All</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

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
