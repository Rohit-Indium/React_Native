import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Alert, ToastAndroid, Button, Modal } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Task from './Task'
import { AppContext } from '../context/AppData';
import { useDispatch,useSelector } from 'react-redux';
import { removeTask } from '../redux/reducers/taskSlice';

export default function TaskContainer() {
    const [selected, setSelected] = useState(-1)
    const [count, setCount] = useState(0)
    const [data1, setdata] = useState(0)
//    const { data, dispatchDataEvent } = useContext(AppContext)
     const data = useSelector((state)=>state.tasks)
     const dispatch=useDispatch()

    const completeTask = index => {
        const newTasks = [...data];
        newTasks[index].completed = true;
        console.log(newTasks);
        dispatch(newTasks)
   //   dispatchDataEvent(newTasks);
        console.log(data)
    };

    useEffect(() => {
        setCount(count * 2);
        console.log("rendered ", count, "times", selected)
    },
        [selected]);

    const onPress = (idToRemove) => {
       //  dispatchDataEvent("REMOVE_TASK", data.filter((item) => { return parseInt(item.id) != idToRemove }))
        dispatch(removeTask(data.filter((item)=>parseInt(item.id)!=idToRemove)))
        console.log(data)
    }

    const renderItem = ({ item, index }) => {
        return (
            <View style={{ paddingHorizontal: 10, backgroundColor:'orange', height: 110,fontSize:25,width:300, flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
                <Task selected={selected} index={index} item={item}  data={data}>                 
                </Task> 
                <Text style={{ fontSize: 25 ,textDecorationLine:item.completed==true?"line-through":'none'}}>
                <Button title='Completed' color='blue' onPress={() => completeTask(index)} ></Button>
                <MaterialIcon name="close-box" size={50} color="red" title="DELETE" onPress={() => onPress(item.id)} /> 
                </Text>
             </View>
        )
    }

    return (
        <View 
            style={{ flex: 3, justifyContent: 'center', alignItems: 'center', padding: 10, marginTop: 10,}}>
            {data &&
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}>
                </FlatList>
            }
      </View>
    )
}
