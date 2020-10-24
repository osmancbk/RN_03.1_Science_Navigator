// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Friends, TimeLine, Post2 } from './pages'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function MainComponent() { 
    return (
        <Stack.Navigator initialRouteName='MainPage'> 
            <Stack.Screen name="MainPage" component={TimeLine} />
            <Stack.Screen name="PostPage2" component={Post2} />
        </Stack.Navigator>
    )
}

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='MainComponentPage' tabBarOptions={{ activeTintColor: 'purple'}}> 

        <Tab.Screen
         name="FriendsPage"
         component={Friends}
         options={{ title: 'Arkadaşlar' }}
         />
        <Tab.Screen
        name="MainComponentPage" 
        component={MainComponent} 
        options={{ title: 'Ana Sayfa ' }}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;