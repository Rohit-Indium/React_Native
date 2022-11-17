
import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity,ActivityIndicator, Button, FlatList,ImageBackground,Alert,Modal, TextInput,placeholderTextColor,placeholder ,navigation,navigate} from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppContext } from '../context/AppData';
import image from "../image/background3.png"; 

export default function Register({navigation}) {
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
   
    openAlert=()=>{
        alert('Alert with one button');
      }

    //   signin=()=>{
    //     navigation.navigate('Signin')        
    // }  

    const onPress = () => {
        console.log('Sent');
        const data = {
          email: 'eve.holt@reqres.in',
          password: 'cityslicka',
        };
        try {
          fetch('https://reqres.in/api/register', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then(response => response.json())
            .then(json => {
              console.log('ID : ',json.id);
              console.log('Token : ',json.token);
              if (json.token) navigation.navigate('Signin');
              else {
                openAlert();
                console.log(json.error);              }
            })
            .catch(err => {
              console.log(err);
            });
        } catch (error) {
          console.log(error);
        } finally {
          // navigation.navigate('Tasks')
        }
      };

    return (
        <ImageBackground source={image} resizeMode="cover" style={{flex: 1,width:500,justifyContent: "center",alignItems:'center'}}>
 <View>

        <View style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>

        <Text>{"\n\n"}</Text> 

       

        <View style={{flex:1,justifyContent:'center', alignItems: 'center' }}>            
        <Text style={{fontSize:50,fontWeight:'600',color:'black'}}>Register</Text>  
            <TextInput value={username}  onChangeText={setUsername} placeholder={"         Username"} style={{marginRight:240,backgroundColor:'white',color:'black',width:280,height:60,borderRadius:30}}></TextInput>
            <TextInput value={password} onChangeText={setPassword} placeholder={"        ********"} style={{marginRight:240,width:280,height: 60,borderRadius:30,backgroundColor: 'white',color:'black'}}></TextInput>  
            <TextInput value={email} onChangeText={setEmail} placeholder={"         E-Mail"} style={{marginRight:240,width:280,height: 60,borderRadius:30,backgroundColor: 'white',color:'black'}}></TextInput>
            <TouchableOpacity onPress={onPress}>
            <MaterialIcon name='arrow-right-circle' size={80} color="green" style={{margin:30}}></MaterialIcon>
             </TouchableOpacity>
                         {/* <Button title={"LOGIN"} color={'red'} onPress={onPress}></Button> */}

                {/* <Button title='Alert Box' color={'blue'} onPress={this.openAlert}/> */}

        </View>
              
            </View>

            {/* <FlatList
           data={data}
           keyExtractor={({ id }, index) => id}
           renderItem={({ item }) => (
             // <Text style={{fontSize:30}}>{item.id} {item.title}, {item.releaseYear}</Text>
             <View>
               <Text style={{color:'black'}}>{item.id} {item.name}{item.email}{item.password}</Text>         
               {/* <Image source={{uri: item.avatar}} style={{height:30,width:30}}></Image>  
 
              </View>
              
           )}
         /> */}

        </View>
        
        </ImageBackground>        
    )
}
