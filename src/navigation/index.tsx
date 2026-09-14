import {
  createBottomTabNavigator,
  createBottomTabScreen,
} from '@react-navigation/bottom-tabs';
import { HeaderButton, Text } from '@react-navigation/elements';
import { createStaticNavigation } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  createNativeStackScreen,
} from '@react-navigation/native-stack';
import { Image } from 'react-native';
import bell from '../assets/bell.png';
import newspaper from '../assets/newspaper.png';
import { Home } from './screens/Home';
import { NotFound } from './screens/NotFound';
import  Profile  from './screens/link_img';
import Imgpress from './screens/imapress';
import flat from './screens/flat';

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: createBottomTabScreen({
      screen: Home,
      options: {
        title: 'pagina inicial',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={newspaper}
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    }),
     Imgpress: createBottomTabScreen({
      screen: Imgpress,
      options: {
        title: 'imagens',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require('./imgs/images-solid.png')}
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    }),
    Profile: createBottomTabScreen({
      screen: Profile,
      options: {
        title: 'link imagem',
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require('../assets/link-solid.png')}
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    }),
    flat: createBottomTabScreen({
      screen: flat,
      options: {
        tabBarIcon: ({ color, size }) => (
          <Image
            source={require('../assets/list-solid.png')}
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    }),
  },
});


const RootStack = createNativeStackNavigator({
  screens: {
    HomeTabs: createNativeStackScreen({
      screen: HomeTabs,
      options: {
        title: 'Home',
        headerShown: false,
      },
    }),
    Profile: createNativeStackScreen({
      screen: Profile,
      linking: {
        path: ':user(@[a-zA-Z0-9-_]+)',
        parse: {
          user: (value) => value.replace(/^@/, ''),
        },
        stringify: {
          user: (value) => `@${value}`,
        },
      },
    }),
    NotFound: createNativeStackScreen({
      screen: NotFound,
      options: {
        title: '404',
      },
      linking: {
        path: '*',
      },
    }),
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackType = typeof RootStack;

declare module '@react-navigation/native' {
  interface RootNavigator extends RootStackType {}
}
