import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import Signin from '../Screens/Signin';
import Register from '../Screens/Register'
import {MyDrawer} from './Drawer';
import { HomeStack } from './HomeStack';

const Stack = createNativeStackNavigator();
const NewStack = createNativeStackNavigator();

export function Authstack() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: ''},
          headerTitleStyle: {fontWeight: 'bold'},
        }}>
           <Stack.Screen
          name="MyDrawer"
          component={MyDrawer}
          options={{title: 'ADD DATAS', title: 'ADDS', headerShown: false}}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{
            title: 'TODO LIST',
            headerTintColor: 'pink',
            headerShown: false,
            navigationBarColor: 'black',
            backgroundColor: 'green',
          }}
        />
         <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{ title: 'ADD DATAS',headerShown:false}}
                />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
