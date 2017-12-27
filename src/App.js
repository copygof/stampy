import {Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {registerScreens, registerScreenVisibilityListener} from './router';


// screen related book keeping
registerScreens();
registerScreenVisibilityListener();

const tabs = [{
  label: 'หน้าแรก',
  screen: 'stampy.FirstTabScreen',
  icon: require('../img/list.png'),
  title: 'Navigation Types',
}, {
  label: 'สแตมป์',
  screen:  'stampy.SecondTabScreen',
  icon: require('../img/swap.png'),
  title: 'Navigation Actions',
},
{
  label: 'QR Code',
  screen:  'stampy.SecondTabScreen',
  icon: require('../img/swap.png'),
  title: 'Navigation Actions',
},
{
  label: 'Follow',
  screen:  'stampy.SecondTabScreen',
  icon: require('../img/swap.png'),
  title: 'Navigation Actions',
},
{
  label: 'Setting',
  screen:  'stampy.SecondTabScreen',
  icon: require('../img/swap.png'),
  title: 'Navigation Actions',
},
];

Navigation.startTabBasedApp({
  tabs,
  animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
  tabsStyle: {
    tabBarBackgroundColor: '#003a66',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#ff505c',
    tabFontFamily: 'BioRhyme-Bold',

  },
  appStyle: {
    tabBarBackgroundColor: '#003a66',
    navBarButtonColor: '#ffffff',
    tabBarButtonColor: '#ffffff',
    navBarTextColor: '#ffffff',
    tabBarSelectedButtonColor: '#ff505c',
    navigationBarColor: '#003a66',
    navBarBackgroundColor: '#003a66',
    statusBarColor: '#002b4c',
    tabFontFamily: 'BioRhyme-Bold',
    forceTitlesDisplay: true,
  },
  navigatorStyle: {
    // drawUnderTabBar: true
  }
})
