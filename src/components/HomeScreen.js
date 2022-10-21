import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Logo from './Logo';

import {colors} from '../resources/colors';

export default class HomeScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <View style={styles.scrollView}>
          <View style={styles.main}>
            <TouchableOpacity
              style={{alignItems: 'center'}}
              onPress={() => navigation.navigate('Dashboard')}
            >
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
    backgroundColor: colors.primaryBackground,
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
