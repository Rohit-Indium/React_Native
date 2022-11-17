import * as React from 'react';
import { ActivityIndicator, FlatList, Text, View ,Image,uri} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Help from '../Screens/Help';
import Third from '../Screens/Third';
import Next from '../Screens/Next';
import croppicker from '../Screens/croppicker';
import Todolist2 from '../Screens/Todolist2';
import plantzinger from '../Screens/plantzinger';
import Assignment1 from '../Screens/Assignment1';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Assignment2 from '../Screens/Assignment2';
import API from '../Screens/API';
import Carsuel from '../Screens/Carsuel';
import Register from '../Screens/Register';
import Plant from '../Screens/Plant';
import Users from '../Screens/Users';
import AntDesign from 'react-native-vector-icons/AntDesign';
import signin from '../Screens/Signin';
import Fontisto from 'react-native-vector-icons/Fontisto';
// import Edit from '../Screens/Edit';
import { HomeStack } from './HomeStack';
const Drawer = createDrawerNavigator();
import {NavigationContainer} from '@react-navigation/native';
import {CustomerDrawerContent} from './DrawerContent';
import { APP_ICON_WHITE } from '../theme/color';
import Apiredux from '../Screens/Apiredux';
import ImageCropPicker from 'react-native-image-crop-picker';

export function MyDrawer() {
  return (
    //  <NavigationContainer options={{backgroundcolor:'red'}}>
        <Drawer.Navigator drawerContent={(props)=><CustomerDrawerContent {...props}/>} >

            <Drawer.Screen name="MAIN MENU" component={HomeStack} options={{drawerActiveBackgroundColor:'black'}}></Drawer.Screen>
            <Drawer.Screen name="ASSIGNMENT 1" component={Assignment1} options={{drawerActiveBackgroundColor:'black'}}></Drawer.Screen>
            <Drawer.Screen name="ASSIGNMENT 2" component={Assignment2} options={{drawerActiveBackgroundColor:'black'}}></Drawer.Screen>
            <Drawer.Screen name="ASSIGNMENT 4 (TODO App)" component={Todolist2} options={{drawerActiveBackgroundColor:'black'}}/>
            <Drawer.Screen name="ASSIGNMENT 5 (TODO - Redux)" component={Next} options={{drawerActiveBackgroundColor:'black'}}/>
            <Drawer.Screen name="ASSIGNMENT 9 (signin)" component={signin} options={{drawerActiveBackgroundColor:'black'}}/>
            <Drawer.Screen name="ASSIGNMENT 9 (Register)" component={Register} options={{drawerActiveBackgroundColor:'black'}}/> 
            
            <Drawer.Screen name="ASSIGNMENT 10" component={Users} options={{drawerActiveBackgroundColor:'black'}}/>
            <Drawer.Screen name="ASSIGNMENT 12" component={Plant} options={{drawerActiveBackgroundColor:'black'}}/>
            {/* <Drawer.Screen name="HELP PAGE" component={Help} options={{drawerActiveBackgroundColor:'black'}} />
            <Drawer.Screen name="ADD PAGE" component={Third} options={{drawerActiveBackgroundColor:'black'}}/>
            <Drawer.Screen name="VIEW PAGE" component={Next} options={{drawerActiveBackgroundColor:'black'}}/> */}
            <Drawer.Screen name="CROP PICKER" component={croppicker} options={{drawerActiveBackgroundColor:'black'}}/>
            <Drawer.Screen name="API" component={API} options={{drawerActiveBackgroundColor:'black'}}/>
            <Drawer.Screen name="API - Redux" component={Apiredux} options={{drawerActiveBackgroundColor:'black'}}/>
             
            {/* <Drawer.Screen name="Carsuel" component={Carsuel} options={{drawerActiveBackgroundColor:'black'}}/>         */}
            <Drawer.Screen name="Plant" color={APP_ICON_WHITE} component={Plant} options={{drawerActiveBackgroundColor:'white',color:'white',headerShown:true,overlayColor:'green' ,headerStyle:{backgroundColor: '#477749',} ,headerRight:()=>(
             <View style={{color:'white'}}>
              <Text>
              <Fontisto name='heart-alt'  size={30} color={'white'}></Fontisto>{"      "}
              <AntDesign name='shoppingcart' size={33} color={'white'}></AntDesign>
              {"    "}
              </Text>
             </View>
            ) }} />
             <Drawer.Screen name="plantzinger" component={plantzinger} options={{drawerActiveBackgroundColor:'black',headerShown:false}}/>
        </Drawer.Navigator>
  // </NavigationContainer>
  );
}