import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function Navigation() {



  return (
    <Stack.Navigator
        screenOptions = {{
            headerShown: false,
        }}

        
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;