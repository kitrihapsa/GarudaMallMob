import { createStackNavigator, createAppContainer } from 'react-navigation'

import Home from './src/pages/home/Index'

const App = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(App)