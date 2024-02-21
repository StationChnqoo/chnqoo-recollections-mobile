import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

import * as React from 'react';
import App from './App';
import DemoScreen from '@src/screens/DemoScreen';
import NoteEditorScreen from '@src/screens/NoteEditorScreen';
import LoginScreen from '@src/screens/LoginScreen';
import SmsScreen from '@src/screens/SmsScreen';
import PermissionsScreen from '@src/screens/PermissionsScreen';
import { useReduxDevToolsExtension } from '@react-navigation/devtools';

export type RootStacksParams = {
  App: undefined;
  DemoScreen: undefined;
  NoteEditorScreen: {id?: string; type?: string};
  LoginScreen: undefined;
  SmsScreen: {mobile: string};
  PermissionsScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStacksParams>();

export type RootStacksProp = NativeStackNavigationProp<RootStacksParams>;

export default function Stacks() {
  const navigator = useNavigationContainerRef();
  // useReduxDevToolsExtension(navigator);
  // useFlipper(navigator);
  
  return (
    <NavigationContainer ref={navigator} >
      <RootStack.Navigator
        screenOptions={{animation: 'slide_from_right', headerShown: false}}>
        <RootStack.Screen name="App" component={App} />
        <RootStack.Screen name="DemoScreen" component={DemoScreen} />
        <RootStack.Screen
          name="NoteEditorScreen"
          component={NoteEditorScreen}
        />
        <RootStack.Screen name="LoginScreen" component={LoginScreen} />
        <RootStack.Screen name="SmsScreen" component={SmsScreen} />
        <RootStack.Screen
          name="PermissionsScreen"
          component={PermissionsScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
