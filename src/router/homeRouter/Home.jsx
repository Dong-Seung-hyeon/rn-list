import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import Home from '../../screens/home/Home';
import Detail from '../../screens/home/Detail';

const Stack = createStackNavigator();
export default function index() {

  goBack = () => {
    this.props.history.goBack();
  }
  
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Detail"
        component={Detail}
      />
    </Stack.Navigator>
  );
}
