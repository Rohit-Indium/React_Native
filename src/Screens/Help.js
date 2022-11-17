import React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

export default function Help({navigation, route, name}) {
  return (
    
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'black',
        }}>
         <Text style={{margin:1,fontSize: 25,fontWeight:'400',color:'white'}}>FEATURES AVAILABLE{'\n\n'}</Text> 
        <Text style={{fontSize: 20,color:'white'}}>This Button is used to Visit the Main page{'\n'}</Text>

        <Button
          title={'Back To Main '}
          color={'blue'}
          onPress={() => {
            navigation.navigate('Todo');
          }}></Button>
        <Text style={{fontSize: 20,color:'white'}}>{'\n'}This Button is used to View the Data's{'\n'}</Text>
        <Button
          title={'View Data'}
          color={'blue'}
          onPress={() => {
            navigation.navigate('Next');
          }}></Button>
       <Text style={{fontSize: 20,color:'white'}}>{'\n'}This Button is used to Add the Data's{'\n'}</Text>
        <Button
          title={'Add Data'}
          color={'blue'}
          onPress={() => {
            navigation.navigate('Third');
          }}></Button>

      </View>
   
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
