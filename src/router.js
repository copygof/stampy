import React from 'react'
import { Navigation, ScreenVisibilityListener } from 'react-native-navigation/'

import HomeScreen from './BottomTab/Home'
import StampScreen from './BottomTab/Stamp'
import Follow from './BottomTab/Follow'

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('stampy.Follow', () => Follow);

  

  Navigation.registerComponent('stampy.FirstTabScreen', () => HomeScreen);
  Navigation.registerComponent('stampy.SecondTabScreen', () => StampScreen);


}

export function registerScreenVisibilityListener() {
  new ScreenVisibilityListener({
    willAppear: ({screen}) => console.log(`Displaying screen ${screen}`),
    didAppear: ({screen, startTime, endTime, commandType}) => console.log('screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
    willDisappear: ({screen}) => console.log(`Screen will disappear ${screen}`),
    didDisappear: ({screen}) => console.log(`Screen disappeared ${screen}`)
  }).register();
}
