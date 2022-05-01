import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import Upload from '../../screens/public/Upload';

const Stack = createStackNavigator();
export default function index() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Upload"
        component={Upload}
      />
    </Stack.Navigator>
  );
}
