/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Pressable
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import HomeScreenFocused from './assets/svgs/HomeScreenSvgs/focusedScreen';
import TimeMachineNotFocused from './assets/svgs/TimeMachineSvgs/notfocused';
import AccountNotFocused from './assets/svgs/AccountScreen/notfocused'
import SearchingButton from './assets/svgs/searchingButtonSvg';

import HomeScreen from './components/View/HomeScreen';
import TimeTravelScreen from './components/View/TimeTravelScreen';
import AccountScreen from './components/View/AccountScreen';


const Tab = createBottomTabNavigator();

function App() {

  return (
    <NavigationContainer >
    <Tab.Navigator screenOptions={{
      headerStyle:{
        borderBottomWidth:1,
        borderBottomColor:'#D24C2E'
      },
      tabBarStyle:{
        borderTopWidth:1,
        borderTopColor:'#D24C2E',
        borderLeftWidth:1,
        borderLeftColor:'#D24C2E',
        borderRightWidth:1,
        borderRightColor:'#D24C2E',
        borderTopLeftRadius:24,
        borderTopRightRadius:24
      },
      headerTitle:'ARMap',
      headerRight: () => (
        <Pressable style={styles.searchingBtn}>
          <SearchingButton />
        </Pressable>
      ),
      headerTitleAlign:'center',
      headerTitleStyle:{
        // fontFamily:'Red-Hat-Display' 
      }
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon:({focused, color, size}) => {
          return <HomeScreenFocused />
        }
      }}/>
      <Tab.Screen name="Settings" component={TimeTravelScreen} options={{
        tabBarIcon:({focused,color,size}) => {
          return <TimeMachineNotFocused />
        }
      }}/>
      <Tab.Screen name="Sign up" component={AccountScreen} options={{
         tabBarIcon:({focused,color,size}) => {
          return <AccountNotFocused />
        }
      }}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  text:{
    fontFamily:'Orbit-Regular',
    fontWeight:'900',
  },
  searchingBtn:{
    marginRight:5
  }
});

export default App;
