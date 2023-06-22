import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import OldTimesScreen from './Views/OldTimes';
import MiddleTimesScreen from './Views/MiddleTimes';
import NewTimesScreen from './Views/NewTimes';
import NowadaysScreen from './Views/Nowadays';


const Stack = createNativeStackNavigator();

function TimeTravelScreen() {
  return (
      <Stack.Navigator 
      screenOptions={{headerShown:false}}  
      initialRouteName='NowadaysScreen'
    >
        <Stack.Screen name="middleTimes" component={MiddleTimesScreen} />
        <Stack.Screen name="oldTimes" component={OldTimesScreen}  />

        <Stack.Screen name="newTimes" component={NewTimesScreen} />
        <Stack.Screen name="nowadays" component={NowadaysScreen} />
      </Stack.Navigator>
  );
}

export default TimeTravelScreen