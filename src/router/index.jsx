import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//stacks
import HomeStack from './homeRouter/Home';
import PublicStack from './publicRouter/Public';
import SettingStack from './settingRouter/Setting';
import UploadStack from './uploadRouter/Upload';

//icons
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Root = ({ navigation }) => {
  return (
    <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
    }}
    >
      {/* Bottom Tabs의 label삭제 및 icon 클릭 시 색상 변경 */}
      <Tab.Screen 
      name="기관분양" 
      component={HomeStack} 
      options={{tabBarIcon: () => (
        <FontAwesome name="institution" size={24} color="black" />
      ),
      }}
      />
      <Tab.Screen 
      name="가정분양" 
      component={PublicStack} 
      options={{tabBarIcon: () => (
        <FontAwesome5 name="home" size={24} color="black" />
        ),
        }}
      />
      <Tab.Screen
      name="새 게시물"
      component={UploadStack} 
      options={{tabBarIcon: () => (
        <Ionicons name="add-circle" size={30} color="black" />
        ),
        }}
      />
      <Tab.Screen 
      name="사용자설정" 
      component={SettingStack} 
      options={{tabBarIcon: () => (
        <FontAwesome5 name="user-cog" size={24} color="black" />
        ),
        }}
      />
    </Tab.Navigator>
  );
};

export default function index() {
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}