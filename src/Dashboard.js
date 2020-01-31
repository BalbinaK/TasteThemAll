import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import beers from '../data/beers.json';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      beers: [],
    };
  }

  componentDidMount() {
    this.getBeers();
  }

  getBeers = () => {
    Promise.resolve(beers).then(data => this.setState({beers: data}));
  };

  renderItem = ({item}) => {
    return (
      <View style={styles.listContainer}>
        <Text style={styles.title}>{item.name}</Text>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView>
        <View style={styles.scrollView}>
          <View style={styles.main}>
            <FlatList
              data={this.state.beers}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
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
    backgroundColor: '#ddd',
    flex: 1,
  },
  listContainer: {
    backgroundColor: '#555',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#eee',
  },
  title: {
    fontSize: 20,
    color: 'yellow',
  },
});
