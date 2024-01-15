import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import { View, Text } from 'react-native'
import React from 'react'
import Home from './containers/Home';
import Tabs from './components/Tabs';
import MyDrawer from './components/MyDrawer';

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="Tabs" component={Tabs} /> */}
      {/* <Stack.Screen name="Drawers" component={MyDrawer} /> */}
      {/* <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  )
}

export default Navigator