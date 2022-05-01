import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import Setting from '../../screens/setting/Setting';

const Stack = createStackNavigator();
export default function index() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Setting"
        component={Setting}
      />
    </Stack.Navigator>
  );
}
