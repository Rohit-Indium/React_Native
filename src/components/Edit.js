
import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, Button, Modal, TextInput,placeholderTextColor,placeholder } from 'react-native'
import { AppContext } from '../context/AppData';
import { multiply } from 'react-native-reanimated';
import { addTask } from '../redux/reducers/taskSlice';
import { useDispatch,useSelector } from 'react-redux';

export default function CreateTask() {
    const [task, setTask] = useState("")
    const [time, setTime] = useState(0)
    // const { data, dispatchDataEvent } = useContext(AppContext)
    const data=useSelector((state)=>state.tasks)
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const dispatch=useDispatch()

    useEffect(() => {
        setTask("")
        setTime("")
    }, [data])

    const onPress = () => {
        const newTask = {
            id: data.length + 1,
            name: task,
            completed: false,
            time: time,
        }
        setModalIsVisible(true)
        // dispatchDataEvent("ADD_TASK", newTask)
        dispatch(addTask(newTask))
        
    }

    return (
        <>
        <Text style={{ fontSize: 40, fontWeight: 'bold',color:'white' }}>ADD TASK</Text>
            <View style={{
                backgroundColor: 'orange', borderRadius: 10,color:'black',
                shadowColor: "#000",
                width:300, marginTop: 40,
                height:300, justifyContent: 'center', alignItems: 'center'}}>
                <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: 20, }}>
                    <Text style={{ fontSize: 25, fontWeight: 'bold' , color:'black'}}>TASK : </Text>
                    <TextInput value={task}  onChangeText={setTask}
                    style={{backgroundColor:'white',color:'black',width:80,height:40,borderRadius:10}} 
                    ></TextInput>
                 </View>
                <Text>{"\n"}</Text> 
                <View style={{ alignItems: 'center', flexDirection: 'row' }}>
                <Text style={{fontSize: 25, fontWeight: 'bold', color:'black'}}>TIME : </Text>             
                <TextInput value={time} onChangeText={setTime}
        style={{width:80,height: 40,
          borderRadius: 10,//   borderWidth: 1,//   padding: 8,
          backgroundColor: 'white',color:'black'}}></TextInput>
                </View>

                <Text>{"\n"}</Text>
                <Button title={"Add Task"} color={'red'} onPress={onPress}></Button>            
            </View>
            {data.length> 0 &&
            <Modal
                visible={modalIsVisible}
                transparent={true}
                animationType='fade'>
   
                <View  style={{ flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                    <View style={{
                        backgroundColor: '#C4EE80', height: 320, width: 300, borderRadius: 10,
                        shadowColor: "#000",
                        elevation: 2,
                        marginTop: 20,
                        justifyContent: 'center', alignItems: 'center'
                    }}>

                        <Text style={{ fontSize: 15 }}>TASK {data[data.length-1].name}</Text>
                        <Text style={{ fontSize: 15 }}>TIME {data[data.length-1].time}</Text>
                        <Text>{"\n"}</Text>
                        <TouchableOpacity onPress={() => setModalIsVisible(false)}><Text style={{fontSize:20}}>Hide Modal</Text></TouchableOpacity>
                    </View>
                </View>

            </Modal>
}
        </>
    )
}
