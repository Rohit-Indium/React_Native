import React , {Component} from 'react';
// import Pagination from '@material-ui/lab/Pagination';
import {Button, SafeAreaView,Image, StyleSheet, Text,Alert, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import image from "../image/background1.png"; 
class App extends Component{
    constructor(props){
    super(props)
        this.state={
            image :'',
        };
    }
    goToPickImage=()=>{
        // alert('Email or Password is Wrong');
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log("CONSOLE",image);
            this.setState({image:image.path})
        });
 };

render(){
return (
    <View style={{flex:1}}>
    <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
            <TouchableOpacity
                onPress={()=>this.goToPickImage()}
                    style={{height:100,width:100,borderRadius:100,backgroundColor:'green'}}>
           {this.state.image !='' && (
           <Image 
            source={{uri:this.state.image}}
            style={{height:100,width:100,borderRadius:100}}/>
            )}
            </TouchableOpacity>
            {/* <Pagination count={10} /> */}
      </View>
    </View>
  );
    } ;
}

export default App;