import { Navigation } from 'react-native-navigation'
import {
  registerScreens,
  registerScreenVisibilityListener,
} from './routes/screens'

// screen related book keeping
registerScreens()
registerScreenVisibilityListener()

Navigation.startSingleScreenApp({
  screen: {
    screen: 'Home',
  },
  appStyle: {
    orientation: 'portrait',
  },
})
