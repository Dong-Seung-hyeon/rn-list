import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import Setting from '../../screens/login/LogIn';
import Detail from '../../screens/login/Detail';

const Stack = createStackNavigator();
export default function index() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="로그인"
        component={Setting}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Detail"
        component={Detail}
      />
    </Stack.Navigator>
  );
}

