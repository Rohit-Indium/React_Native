import React, {useState, useEffect} from 'react';
import {SafeAreaView,StyleSheet,View,Text,Button,ActivityIndicator,FlatList,Image,useWindowDimensions}from 'react-native';
import { useDispatch,useSelector } from 'react-redux';
import {getUsers} from '../redux/reducers/userslice';

export default function Apiredux({navigation,route}){
    const {width,height}=useWindowDimensions();
    const data = useSelector((state)=>state.users)
    const dispatch=useDispatch()
    const [isLoading,setLoading]=useState(true);
 
    useEffect(()=>{
        dispatch(getUsers())
        setLoading(false)
    },[]);

    return(
        <SafeAreaView style={{flex:1,backgroundColor:'black'}}>
            <View style={{flex:1,justifyContent:'center',alignItems:'center',paddingHorizontal:10,}}>
                <FlatList data={data}
                keyExtractor={({id},index)=>id}
                renderItem={({item})=>(
                    <View style={{paddingHorizontal:15,height:70,margin:5,justifyContent:'space-evenly',width:width-50,flexDirection:'row',backgroundColor:'lightpink',borderRadius:10}}>
                        <View style={{width:'75%',alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:16,fontWeight:'500'}}>{item.first_name}</Text>
                            <Text style={{fontSize:12,fontWeight:'500'}}>{item.email}</Text>
                        </View>
                        <View style={{width:'25%',alignItems:'flex-end',justifyContent:"flex-end"}}>
                            <Image source={{uri:item.avatar}} style={{height:60,width:60}}></Image>
                        </View>
                        <View>
                            <Text>{"\n"}</Text>
                        </View>
                    </View>
                )}
                />
            </View>
        </SafeAreaView>
    )
}