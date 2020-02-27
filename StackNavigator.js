import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import QrCodeScannerNew from './QrCodeScannerNew';
import QrCodeGenerator from './QrCodeGenerator';
import ResultPage from './Screens/ResultPage';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="QrCodeGenerator"
        headerMode="screen"
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {backgroundColor: 'tomato'},
        }}>
        <Stack.Screen
          name="QrCodeGenerator"
          component={QrCodeGenerator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="QrCodeScannerNew"
          component={QrCodeScannerNew}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="ResultPage"
          component={ResultPage}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
