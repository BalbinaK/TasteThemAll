import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './src/HomeScreen';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: HomeScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
