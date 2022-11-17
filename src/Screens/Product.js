import React from 'react';
import {Button,Image,ImageBackground,ScrollView, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import image from "../image/background1.png"; 
import bike1 from "../image/bike1.jpg";
import bike2 from "../image/bike2.jpg";
import bike10 from "../image/bike10.jpg";
import bike11 from "../image/bike11.jpg";
import bike7 from "../image/bike7.jpg";
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default function Product({navigation, route, name}) {
  return (
    
      <ScrollView>
        <View style={{backgroundColor:'lightblue',height:90}}>

          <Text style={{textAlign:"center",fontSize:35,fontWeight:'800',color:'black'}}>BIKE WALE</Text>
          <Text style={{marginLeft:18,fontSize:23,fontWeight:'400',color:'black'}}>Live To Ride <MaterialIcon name="weather-windy" size={25} color="blue" />  &  Love To Race <MaterialIcon name="heart" size={25} color="red" /></Text>
        </View>
        <View style={{flex:1,flexDirection:'row',marginLeft:5}}>
            <View style={{justifyContent:"space-evenly",marginTop:5,backgroundColor:'lightgrey',height:250,width:190,border:'15',borderColor:'black'}}>
                <Image source={bike1}   style={{margin:5,flex: 1,width:180,height:200,justifyContent: "center",alignItems:'center'}} ></Image>
                <Text  style={{marginLeft:15,fontWeight:'500',fontSize:23,color:'black'}}>Honda Activa</Text>               
                <Text style={{marginLeft:15,fontWeight:'500',color:'black',fontSize:20}}>Price : 3 lakhs</Text>
                {/* <TouchableOpacity onPress={() => {navigation.navigate('Imagepicker')}}>
                <Text style={{borderRadius:50,}} onPress={() => {navigation.navigate('Imagepicker')}}>View Details</Text>
                </TouchableOpacity> */}
                <Button title='View' color={'black'}  onPress={() => {navigation.navigate('Imagepicker')}}></Button>
            </View>
            <Text>{" "}</Text>
            <View style={{justifyContent:"space-evenly",marginTop:5,backgroundColor:'lightgrey',height:250,width:190,border:'15',borderColor:'black'}}>
                <Image source={bike7}   style={{margin:5,flex: 1,width:180,height:200,justifyContent: "center",alignItems:'center'}} ></Image>
                <Text  style={{marginLeft:15,fontWeight:'500',fontSize:23,color:'black'}}>TRUIMPH</Text>               
                <Text style={{marginLeft:15,fontWeight:'500',color:'black',fontSize:20}}>Price : 6 lakhs</Text>
                <Button title='View' color={'black'}  onPress={() => {navigation.navigate('Imagepicker')}}></Button>
            </View>
        </View>
        
        <View style={{flex:1,flexDirection:'row',marginLeft:5,marginTop:5}}>
        <View style={{justifyContent:"space-evenly",marginTop:5,backgroundColor:'lightgrey',height:250,width:190,border:'15',borderColor:'black'}}>
                <Image source={bike10}   style={{margin:5,flex: 1,width:180,height:200,justifyContent: "center",alignItems:'center'}} ></Image>
                <Text  style={{marginLeft:15,fontWeight:'500',fontSize:23,color:'black'}}>DUCATI</Text>               
                <Text style={{marginLeft:15,fontWeight:'500',color:'black',fontSize:20}}>Price : 20 lakhs</Text>
                {/* <TouchableOpacity onPress={() => {navigation.navigate('Imagepicker')}}>
                <Text style={{borderRadius:50,}} onPress={() => {navigation.navigate('Imagepicker')}}>View Details</Text>
                </TouchableOpacity> */}
                <Button title='View' color={'black'}  onPress={() => {navigation.navigate('Imagepicker')}}></Button>
            </View>
            <Text>{" "}</Text>
            <View style={{justifyContent:"space-evenly",marginTop:5,backgroundColor:'lightgrey',height:250,width:190,border:'15',borderColor:'black'}}>
                <Image source={bike11}   style={{margin:5,flex: 1,width:180,height:200,justifyContent: "center",alignItems:'center'}} ></Image>
                <Text  style={{marginLeft:15,fontWeight:'500',fontSize:23,color:'black'}}>AUGUSTA</Text>               
                <Text style={{marginLeft:15,fontWeight:'500',color:'black',fontSize:20}}>Price : 18 lakhs</Text>
                <Button title='View' color={'black'}  onPress={() => {navigation.navigate('Imagepicker')}}></Button>
            </View>
        </View>           
        
{/*        <Button
          title={'View Data'}
          color={'blue'}
          onPress={() => {
            navigation.navigate('Next');
          }}></Button>

        <Button title={'Add Data'}color={'blue'}onPress={() => {navigation.navigate('Third');}}></Button> */}
      </ScrollView>
   
  );
}

