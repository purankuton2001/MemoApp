import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';

import { firebaseConfig } from './env';
import MemoDetailScreen from './src/screen/MemoDetailScreen';
import MemoListScreen from './src/screen/MemoListScreen';
import MemoEditScreen from './src/screen/MemoEditScreen';
import MemoCreateScreen from './src/screen/MemoCreateScreen';
import LoginScreen from './src/screen/LoginScreen';
import SignupScreen from './src/screen/SignupScreen';

require('firebase/firestore');

export default function App() {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#467FD3' },
          headerTitleStyle: { color: '#FFFFFF' },
          headerTitle: 'MemoApp',
          headerBackTitleStyle: { color: '#FFFFFF' },
          headerBackTitle: 'Back',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}
      >
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
