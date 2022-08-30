import * as React from 'react';
import {Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './src/navigations/drawer';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
