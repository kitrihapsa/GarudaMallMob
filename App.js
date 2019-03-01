import { createStackNavigator, createAppContainer } from 'react-navigation'

import Home from './src/pages/Home/Index'

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