import React, { useState } from 'react';
import {Modal,SafeAreaView,ScrollView,StatusBar,Usestate,Pressable,StyleSheet,onPres,onPress,Text,TouchableOpacity,FlatList,useColorScheme,useWindowDimensions,View,}
from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {

  const [selected, setSelected] = useState(-1)
  const [modalVisible, setModalVisible] = useState(false);  

const DATA = [
  {
    id: "1",
    icon:"circle-o",
  },

  {
    id: "2",
    icon:"circle",
  },

  {
    id: "3",
    icon:"circle-o",
  },
];
const renderItem=({item,index}) =>{ 
  const onPres = (index)=>{
    setSelected(index)
  }
    return ( 
  <View>
    <View>
        <Text>{"\n"}</Text>
     </View>
     <View style={{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'flex-start'}}>
      
      <TouchableOpacity onPress={()=>onPres(index)} >
      <MaterialIcon name={selected==index ? "check-circle":"circle"} size={selected==index?85:50} color={selected==index?"red":"black"}></MaterialIcon>
      <Text style={{fontSize:20}}>{item.name}</Text>
      </TouchableOpacity>      
    </View>
    </View>  
    )
    }
    return (
      <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id} />
         
        <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);}}>

        <View style={{flex:1,justifyContent:"flex-start",alignItems: "center"}}>   
          <View style={{margin: 20,backgroundColor: "black",padding: 115,shadowOpacity: 0.25,shadowRadius: 24,elevation: 5,alignItems:"flex-start",shadowColor: "#000",}}>
            <MaterialIcon name='check-circle' size={50} color="red" style={{margin:30}}></MaterialIcon>
            <Pressable
              style={{borderRadius: 20,padding: 10,backgroundColor:"red"}}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={{color: "black",fontWeight: "bold",size:"30px",margin:30}}>SHOW ICONS</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={{borderRadius: 20,padding: 10,margin:60,elevation: 2,backgroundColor: "red"}}
        onPress={() => setModalVisible(true)}>
        <Text style={{color: "white",fontWeight: "bold",textAlign: "center"}}>HIDE ICONS</Text>
      </Pressable>
      </View>
  );
};

export default App;
