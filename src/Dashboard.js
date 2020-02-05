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

import beers from '../data/beers.json';

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
    const backgroundColor = item.isSelected ? '#B2EAB2' : '#DBD1BA';

    return (
      <TouchableOpacity
        onPress={() => this.onItemPressed(item)}
        style={[
          styles.listContainer,
          {backgroundColor, borderColor: backgroundColor},
        ]}>
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
    backgroundColor: '#EDEFE3',
    flex: 1,
  },
  listContainer: {
    backgroundColor: '#DBD1BA',
    padding: 15,
    marginBottom: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#DBD1BA',
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
    color: '#29335C',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 30,
  },
});
