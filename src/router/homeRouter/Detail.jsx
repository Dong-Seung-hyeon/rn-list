import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import Home from '../../screens/home/Detail';

const Stack = createStackNavigator();
export default function index() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Detail"
        component={Home}
      />
    </Stack.Navigator>
  );
}
