import React, {Component} from 'react';
import {View, Image} from 'react-native';

export default class Logo extends Component {
  render() {
    const {style} = this.props;
    return (
      <View style={[style, {marginBottom: 20}]}>
        <Image
          source={require('../assets/intro_beer_icon.png')}
          style={{height: 100, width: 100}}
        />
      </View>
    );
  }
}
