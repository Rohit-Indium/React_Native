import React , { useState } from 'react';
import {Button,Image,ImageBackground,ScrollView, SafeAreaView, StyleSheet, Text, View,TextInput} from 'react-native';
import image from "../image/background1.png"; 
import bike1 from "../image/bike1.jpg";
import plant3 from "../image/plant3.jpg";
import plant4 from "../image/plant4.jpg";

import plant2 from "../image/plant2.jpg";
import plant5 from "../image/plant5.jpg";
import plant6 from "../image/plant6.jpg";
import plant7 from "../image/plant7.jpg";
import plant8 from "../image/plant8.jpg";
import plant9 from "../image/plant9.jpg";
import plant10 from "../image/plant10.jpg";
import bike2 from "../image/bike2.jpg";
import bike10 from "../image/bike10.jpg";
import bike11 from "../image/bike11.jpg";
import bike7 from "../image/bike7.jpg";
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

const App = ({navigation, route, name}) => {
  const[img,setimage]=useState(0)
  const [data, setdata] = useState([
  {
    id: 1,
    image:'https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?cs=srgb&dl=pexels-marianna-ole-757889.jpg&fm=jpg',
    name:'Zingiber Officenale',
    price:238
  },
  {
    id: '2',
    image:'https://m.media-amazon.com/images/I/41uiaRgicsL._AC_SS450_.jpg',
    name:'Pachyrthizus',
    price:89
  },
]);



const renderItem = ({item, index}) => {
<View style={{backgroundColor:"grey"}}>
        <Text
          style={{
            fontSize: 30,
            margin: 5,
            fontWeight: '400',
            flexDirection: 'row',
            justifyContent: 'center',
            color:'black'
          }}>
          {item.id}{"    "}{item.name}{"    "}{item.price}{"    "}{"  "}
        </Text>
      </View>
}

  return (
    
      <ScrollView>
        <View style={{padding:10,backgroundColor:'#477749',height:190,borderBottomLeftRadius:35,borderBottomRightRadius:-35}}>
          <Text style={{fontSize:35,color:'white',fontFamily:'Quicksand-Bold'}}>Let's Grab Your {"\n"} 
             Favorite Plant -</Text>
            <TextInput style={{backgroundColor:'white',color:'black',width:350,height:40,margin:18}} placeholder={"Search for your favorite plant"} ></TextInput>                        
        </View>
             
          <View style={{backgroundColor:"black"}}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}/>
           </View>     

            <View style={{flex:1,flexDirection:'row'}}>
                <View style={{flexDirection:'column',marginLeft:5}}>
                      <View style={{justifyContent:"space-evenly",margin:5,marginTop:15,backgroundColor:'white',borderRadius:15,height:250,width:190,border:'15',borderColor:'black',elevation:50}}>
                        <Image source={plant10}   style={{flex: 1,width:190,height:250,justifyContent: "center",borderRadius:15,alignItems:'center'}} ></Image>
                        <Text  style={{marginLeft:15,fontFamily:'Quicksand-Bold',fontSize:18,color:'black'}}>ZingiBer officenale</Text>               
                        <Text style={{marginLeft:15,fontFamily:'Quicksand-Light',color:'green',fontSize:20}}>$295.99            <MaterialIcon name='arrow-right-bold-box' style={{color:'green'}} size={30} onPress={() => {navigation.navigate('plantzinger')}}></MaterialIcon></Text>
                      </View>
                      
                      <View style={{justifyContent:"space-evenly",margin:5,marginTop:15,backgroundColor:'white',borderRadius:15,height:250,width:190,border:'15',borderColor:'black',elevation:50}}>
                        <Image source={plant8}   style={{flex: 1,width:190,height:250,justifyContent: "center",borderRadius:15,alignItems:'center'}} ></Image>
                        <Text  style={{marginLeft:15,fontSize:18,color:'black'}}>ZingiBer officenale</Text>               
                        <Text style={{marginLeft:15,fontWeight:'500',color:'green',fontSize:20}}>$295.99            <MaterialIcon name='arrow-right-bold-box' style={{color:'green'}} size={30} onPress={() => {navigation.navigate('plantzinger')}}></MaterialIcon></Text>
                      </View>
                </View>
                <View style={{flex:1,flexDirection:'column',marginLeft:5,}}>
                      <View style={{justifyContent:"space-evenly",margin:5,marginTop:15,backgroundColor:'white',borderRadius:15,height:310,width:170,border:'15',borderColor:'black',elevation:50}}>
                          <Image source={plant6}   style={{flex: 1,width:170,height:250,justifyContent: "center",borderRadius:15,alignItems:'center'}} ></Image>
                          <Text  style={{marginLeft:15,fontWeight:'500',fontSize:14,color:'black'}}>Pachyrthizus erosus</Text>               
                          <Text style={{marginLeft:15,fontWeight:'500',color:'green',fontSize:20}}>$95.20            <MaterialIcon name='arrow-right-bold-box' style={{color:'green'}} size={30} onPress={() => {navigation.navigate('plantzinger')}}></MaterialIcon></Text>
                          {/* <Button title='View' color={'black'}  onPress={() => {navigation.navigate('Imagepicker')}}></Button> */}
                      </View>
                      <View style={{justifyContent:"space-evenly",margin:5,marginTop:15,backgroundColor:'white',borderRadius:15,height:300,width:170,border:'15',borderColor:'black',elevation:50}}>
                          <Image source={plant9}   style={{flex: 1,width:170,height:250,justifyContent: "center",borderRadius:15,alignItems:'center'}} ></Image>
                          <Text  style={{marginLeft:15,fontWeight:'500',fontSize:18,color:'black'}}>Pachyrthizus erosus</Text>               
                          <Text style={{marginLeft:15,fontWeight:'500',color:'green',fontSize:20}}>$95.20            <MaterialIcon name='arrow-right-bold-box' style={{color:'green'}} size={30}></MaterialIcon></Text>
                    </View>
                 </View>   
                </View>          
                
      </ScrollView>
   
  );
};

export default App;