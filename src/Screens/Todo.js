import React from 'react';
import {
    SafeAreaView,
    StyleSheet, View, Button,Text,ImageBackground,Image,Script,Span
} from 'react-native';
import CreateTask from '../components/CreateTask';
import TaskContainer from '../components/TaskContainer';
import Next from '../Screens/Next';
import Third from '../Screens/Third';
import croppicker from '../Screens/croppicker';
 import image from "../image/background1.png"; 
// const image = { uri: "https://www.adobe.com/express/create/media_1c1b113c8036dff671906a84b21303f72eb68caf4.png" };
{/* <Script src="javascript.js"></Script> */}

// import ImagePicker from 'react-native-image-crop-picker';

// ImagePicker.openPicker({
//    width: 300,
//    height: 400,
//    cropping: true
//  }).then(image => {
//    console.log(image);
//  });

export default function Todo({navigation, route,name}) {

    return(
      
      <ImageBackground source={image} resizeMode="cover" style={{flex: 1,width:500,justifyContent: "center",alignItems:'center'}}>
         {/* <Image source={image} resizeMode="cover" style={{flex: 1,width:500,justifyContent: "center",alignItems:'center'}}></Image>  */}
       
        <View style={{flex:1,marginTop:245,marginRight:155}}>
          <Text style={{color:'black'}}>
         
             
        
            <View>
                {/* <Text style={{height:30,width:80,color:'white',backgroundColor:'red'}}>Cricket</Text> */}
                {/* <Button title={"Add Data"} color={'grey'} onPress={ ()=>{navigation.navigate("Third") }}></Button>
                <Text>{"\n"}</Text>
                <Button title={"User"} color={'grey'} onPress={ ()=>{navigation.navigate("Users") }}></Button>
                <Text>{"\n"}</Text> */}

                <Button title={"IMAGE PICKER"} color={'black'} onPress={ ()=>{navigation.navigate("Imagepicker") }}></Button>
                <Text></Text>
                <Button title={"PLANT"} color={'black'} onPress={ ()=>{navigation.navigate("Plant") }}></Button>
                <Text></Text>
                <Button  title={"TODO"}  color={'black'} onPress={ ()=>{navigation.navigate("Next", {name:"Rohit"}) }}></Button> 
                <Text></Text>
                {/* <Button title={"CROP PICKER"} color={'black'} onPress={ ()=>{navigation.navigate("croppicker") }}></Button>
                <Text></Text> */}
                <Button title={"PRODUCT"} color={'black'} onPress={ ()=>{navigation.navigate("Product") }}></Button>
                <Text></Text>
                <Button title={"API REDUX"} color={'black'} onPress={ ()=>{navigation.navigate("Apiredux") }}></Button>                
                <Text></Text>
                {/* <Button title={"Api_redux"} color={'grey'} onPress={ ()=>{navigation.navigate("Api_redux") }}></Button> */}
            </View>
         </Text>
      </View>
</ImageBackground>

 )



}