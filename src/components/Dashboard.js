import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Logo from './Logo.js';

import beers from '../../data/beers.json';
import {colors} from '../resources/colors.js';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    Promise.resolve(beers).then(data => this.setState({data}));
  };

  renderHeader = () => {
    return <Logo style={styles.logo} />;
  };

  onItemPressed = pressedItem => {
    pressedItem.isSelected = !pressedItem.isSelected;

    const updatedData = this.state.data;
    const index = updatedData.findIndex(item => item.id === pressedItem.id);
    updatedData[index] = pressedItem;

    this.setState({
      data: updatedData,
    });
  };

  renderItem = ({item}) => {
    const backgroundColor = item.isSelected
      ? colors.listItemSelected
      : colors.listItemUnselected;

    return (
      <TouchableOpacity
        onPress={() => this.onItemPressed(item)}
        style={[
          styles.listContainer,
          {backgroundColor, borderColor: backgroundColor},
        ]}
      >
        <Text style={styles.title}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <View style={styles.scrollView}>
          <View style={styles.main}>
            <FlatList
              data={this.state.data}
              renderItem={this.renderItem}
              keyExtractor={item => item.id.toString()}
              ListHeaderComponent={this.renderHeader}
              extraData={this.state}
            />
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
  },
  listContainer: {
    padding: 15,
    marginBottom: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 20,
    color: colors.primaryText,
  },
  logo: {
    alignSelf: 'center',
    marginTop: 30,
  },
});
