import { Platform } from 'react-native'
import { Navigation, NativeEventsReceiver } from 'react-native-navigation'
import { Client } from 'bugsnag-react-native';
import {
  registerScreens,
  registerScreenVisibilityListener,
} from './routes/screens'

const bugsnag = new Client();

// screen related book keeping
registerScreens()
registerScreenVisibilityListener()

const startApp = () => {
  Navigation.startSingleScreenApp({
    screen: {
      screen: 'Home',
    },
    appStyle: {
      orientation: 'portrait',
    },
  })
}

if (Platform.OS === 'ios') {
  startApp()
} else {
  // In case of Android we need to handle the bridge being initialized by HeadlessJS
  Promise.resolve(Navigation.isAppLaunched()).then(appLaunched => {
    if (appLaunched) {
      startApp() // App is launched -> show UI
      new NativeEventsReceiver().appLaunched(startApp) // register event for next app start event (fix resume hang)
    }
  })
}
