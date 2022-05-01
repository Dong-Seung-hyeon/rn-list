import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import Detail from '../../screens/public/Detail';

const Stack = createStackNavigator();
export default function index() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Detail"
        component={Detail}
      />
    </Stack.Navigator>
  );
}
