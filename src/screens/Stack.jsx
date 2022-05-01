import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './home/Home';
import Detail from './home/Detail';
import Login from './login/LogIn';
import Public from './public/Public';
import Setting from './setting/Setting';

const Stack = createStackNavigator;

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Public" component={Public} />
      <Stack.Screen name="Setting" component={Setting} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
