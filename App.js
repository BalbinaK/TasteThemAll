import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './src/components/HomeScreen';
import Dashboard from './src/components/Dashboard';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen},
    Dashboard: {screen: Dashboard},
  },
  {
    headerMode: 'none',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
