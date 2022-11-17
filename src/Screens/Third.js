import React from 'react';
import {
    SafeAreaView,
    StyleSheet, View, Text, Button
} from 'react-native';
import CreateTask from '../components/CreateTask';
import TaskContainer from '../components/TaskContainer';

export default function Third({navigation, route,name}){

    return(
       
            <View style={{
                flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'black'
            }}>
        <CreateTask></CreateTask>
        <Text>{"\n"}</Text>
    
        <Button title={"Back To Main "}  color={'orange'} onPress={ ()=>{navigation.navigate("Todo") }}></Button>
            <Text>{"\n"}</Text>

        <Button title={"View Data"} color={'orange'} onPress={ ()=>{navigation.navigate("Next") }}></Button>
                </View>
               
    );
        
        };

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    
  });
  

