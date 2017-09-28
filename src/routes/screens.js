import React from 'react';
import { Navigation, ScreenVisibilityListener } from 'react-native-navigation'
import { Text, View } from 'react-native';

const Home = () => {
  return (
    <View>
      <Text style={{color: 'red'}}>Home</Text>
      <Text style={{color: 'red'}}>Home</Text>
      <Text style={{color: 'red'}}>Home</Text>
      <Text style={{color: 'red'}}>Home</Text>
      <Text style={{color: 'red'}}>Home</Text>
      <Text style={{color: 'red'}}>Home</Text>
    </View>
  )
}

export function registerScreens(store, Provider) {
  Navigation.registerComponent('Home', () => Home)
}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({ screen }) => console.log(`Displaying screen ${screen}`),
    didAppear: ({ screen, startTime, endTime, commandType }) =>
      console.log(
        'screenVisibility',
        `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`
      ),
    willDisappear: ({ screen }) =>
      console.log(`Screen will disappear ${screen}`),
    didDisappear: ({ screen }) => console.log(`Screen disappeared ${screen}`),
  }).register()
}
