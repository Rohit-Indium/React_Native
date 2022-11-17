import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Todo from '../Screens/Todo';
import Next from '../Screens/Next';
import Third from '../Screens/Third';
import Help from '../Screens/Help';
import Plant from '../Screens/Plant';
import plantzinger from '../Screens/plantzinger';
import Register from '../Screens/Register';
import Todolist2 from '../Screens/Todolist2';
import croppicker from '../Screens/croppicker';
import Imagepicker from '../Screens/Imagepicker';
import Product from '../Screens/Product';
import Apiredux from '../Screens/Apiredux';
const Stack = createNativeStackNavigator();
const NewStack = createNativeStackNavigator();
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Api_redux from '../Screens/Apiredux';

export function HomeStack() {
    return (
       
            <Stack.Navigator 
                // screenOptions={{headerStyle:{backgroundColor: '',},
                //     headerTitleStyle: {fontWeight: 'bold',},}}
                    >
                        {/* <MaterialIcon name="close-box" size={50} color="red"/> */}
                <Stack.Screen 
                    name="Todo"
                    component={Todo}
                    options={{ title: 'TODO LIST',headerTintColor: 'pink' , headerShown: false ,navigationBarColor:'black',backgroundColor:"green" }} />
                {/* <MaterialIcon name="close-box" size={50} color="red"/> */}
                <Stack.Screen
                    name="Next"
                    component={Next}
                    options={{ title: 'ADD DATAS',title:'ADDS' , headerShown: false }}
                />
                <Stack.Screen
                    name="Third"
                    component={Third}
                    options={{ title: 'ADD DATAS',headerShown:false}}
                />
                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{ title: 'ADD DATAS',headerShown:false}}
                />
                <Stack.Screen
                    name="Help"
                    component={Help}
                    options={{ title: 'FEATURES',headerTintColor: 'pink'}}
                />
                <Stack.Screen
                    name="Todolist2"
                    component={Todolist2}
                    options={{ title: 'FEATURES',headerTintColor: 'pink'}}
                />
                <Stack.Screen
                    name="croppicker"
                    component={croppicker}
                    options={{ title: 'Crop Picker',headerTintColor: 'Black'}}
                />
                <Stack.Screen
                    name="Imagepicker"
                    component={Imagepicker}
                    options={{ title: 'Image Picker',headerTintColor: 'Black'}}
                />
               
                 <Stack.Screen
                    name="Product"
                    component={Product}
                    options={{ title: 'Product',headerTintColor: 'Black',headerShown:false}}
                />
             <Stack.Screen
                    name="Apiredux"
                    component={Apiredux}
                    options={{ title: 'Api',headerTintColor: 'Black',headerShown:true}}
                /> 
                  <Stack.Screen
                     name="Plants"
                    component={Plant}                   
                    options={{ title: 'Plantsss',headerTintColor: 'green',headerShown:false,backgroundColor:'green'}}
                />
                <Stack.Screen
                     name="plantzinger"
                    component={plantzinger}                   
                    options={{ title: 'plantzinger',headerTintColor: 'white',headerShown:false,backgroundColor:'green'}}
                    
               />

            </Stack.Navigator> 

      //  {/* </NavigationContainer> */}
    );
};