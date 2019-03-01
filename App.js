import { createStackNavigator, createAppContainer } from 'react-navigation'

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