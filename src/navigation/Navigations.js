import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../ScreenJob/Home';
import {MovieLibrary} from '../ScreenJob/MovieLibrary';
import {WatchedMovie} from '../ScreenJob/WatchedMovie';
import {NoWatchedMovie} from '../ScreenJob/NoWatchedMovie';
import {Ionicons} from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const ScreenOneStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="WatchedMovie" component={WatchedMovie} />
    </Stack.Navigator>
  );
};
const ScreenTwoStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="MovieLibrary" component={MovieLibrary} />
      <Stack.Screen name="NoWatchedMovie" component={NoWatchedMovie} />
    </Stack.Navigator>
  );
};
const Tab = createBottomTabNavigator();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Главная" component={ScreenOneStack} />
        <Tab.Screen name="Фильмотека" component={ScreenTwoStack} />
        <Tab.Screen name="Просмотрел" component={WatchedMovie} />
        <Tab.Screen name="Не смотрел" component={NoWatchedMovie} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// const Stack = createNativeStackNavigator();

// const ScreenOneStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="WatchedMovie" component={WatchedMovie} />
//     </Stack.Navigator>
//   );
// };
// const ScreenTwoStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="MovieLibrary" component={MovieLibrary} />
//       <Stack.Screen name="NoWatchedMovie" component={NoWatchedMovie} />
//     </Stack.Navigator>
//   );
// };
// const Tab = createBottomTabNavigator();

// export const Navigation = () => {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Главная" component={ScreenOneStack} />
//         <Tab.Screen name="Фильмотека" component={ScreenTwoStack} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// };
