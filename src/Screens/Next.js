import React from 'react';
import {
    SafeAreaView,
    StyleSheet, View, Text, Button,ImageBackground
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import CreateTask from '../components/CreateTask';
import TaskContainer from '../components/TaskContainer';
import image from "../image/background2.png"; 
export default function Next({navigation, route,name}){
   
    return(
        // <ScrollView>
        // <ImageBackground source={image} resizeMode="cover" style={{flex: 1,width:500}}>
        <SafeAreaView style={{flex:1}}> 
           
            <View style={{
                flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black'}}>

                {/* <Button title={"BACK TO MAIN"} color={'purple'} onPress={ ()=>{navigation.navigate("Todo") }}></Button> */}
                {/* <Button title={"Refresh"} color={'pink'} onPress={ ()=>{navigation.navigate("Next") }}></Button> */}
                {/* <MaterialIcon name='refresh' size={40} color={'red'} onPress={ ()=>{navigation.navigate("Next") }}></MaterialIcon> */}
                <TaskContainer ></TaskContainer> 
                {/* <Text style={{fontSize:20}}>Hello {route.name}</Text> */}
                <View style={{margin:80}}>
                <Button title={"ADD DATA"} color={'orange'} onPress={ ()=>{navigation.navigate("Third") }}></Button>
                </View>
               
                </View>
        
        </SafeAreaView>
    // </ImageBackground>
    );
        };

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    
  });
  

