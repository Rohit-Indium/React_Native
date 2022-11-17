import React, {useState} from 'react';
import {
  SafeAreaView,
  Pressable,
  TextInput,
  Item,
  Span,
  ScrollView,
  text,
  onChangeText,
  StatusBar,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  useColorScheme,
  KeyboardAvoidingView,
  View,
  DrawerLayoutAndroid,
  Button,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const App: () => Node = () => {
  const [name, setname] = useState('');
  const [time, settime] = useState('');
  const [selected, setSelected] = useState(-1);
  const [data, setdata] = useState([
    {
      id: 1,
      name: 'Jogging',
      done: false,
      time: 10,
    },
    {
      id: '2',
      name: 'Swiming',
      done: false,
      time: 45,
    },
  ]);

  let totaltime = 0;
  let hours=0;
  let minutes=0;

  data.forEach(item => {
    totaltime += parseInt(item.time);
    hours=Math.floor(totaltime/60);
    minutes=totaltime%60;
  });

  console.log(hours)
  console.log(totaltime);
  console.log({time});
  console.log(data);


  const addItem = () => {
    console.log(name, time);
    const newTask = {
      id: 1 + data.length,
      name: name,
      done: false,
      time: time,
    };
    
    //   console.log({time})
    // console.log(time)
    // console.log(data[time])
    //   console.log(...data)
    // const dataarr=[...data]
    // dataarr.push(newTask)
    // setdata(dataarr)
    setdata([...data, newTask]);
  };

 //   const newData = data
  //   newData[index].done=true
  //   markDone(newData)
  // }

     const markDone= item => {
      setSelected(item.done=true)
      //  setdata(data.filter(item=>item.done==true));
   };

  const onPress = index => {
    setSelected(index);
  };

  const handleDelete = id => {
    console.log(id);
    setdata(data.filter(item => item.id !== id));
  };

  const renderItem = ({item, index}) => {
    return (
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{flex:1}}>
      <ScrollView>
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
          {item.id}{"    "}{item.name}{"    "}{item.time}{"    "}<MaterialIcon name="close" size={45} color="red" title="DELETE" onPress={() => handleDelete(item.id)} />{"  "}<TouchableOpacity onPress={() => onPress(index)}><MaterialIcon name="check-circle" size={45}  color={selected == index ? 'green' : ''}></MaterialIcon></TouchableOpacity>
         {/* <TouchableOpacity onPress={()=>markDone(index)} >
          <MaterialIcon name="cricle" size={50}  color={selected==index.done?"red":"green"}></MaterialIcon></TouchableOpacity>  */}
          {/* <MaterialIcon name="cricle"  onPress={() => { setIsHungry(false);}}
        disabled={!isHungry} color={isHungry ? "grey" : "green"}/> */}
        </Text>
      </View>
      </ScrollView>
      </KeyboardAvoidingView>
    );
  };

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={{flex:1}}>
    <View style={{backgroundColor:"black"}}>
      <Text
        style={{
          fontSize: 45,
          fontWeight: '500',
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          color:'white'
        }}>
        {' '}
        DAILY DAIRY
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: '350',
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center',
          color:'white'
        }}>
          <Text>{"\n"}</Text>
        {' '}
        Total Tasks : {data.length} {"                             "}Time :{hours}:{minutes}
      </Text>
      <Text>{'\n'}</Text>
      <Text style={{fontSize: 20,color:'white'}}> {'Enter a Task'}</Text>
      <TextInput
        onChangeText={value => {
          setname(value);
        }}
        style={{
          height: 40,
          margin: 32,
          borderRadius: 20,
          borderWidth: 1,
          padding: 8,
          backgroundColor: 'white',
          color:'black'
        }}></TextInput>
      <Text style={{fontSize: 20,color:'white'}}> {'Enter a Duration of Task'}</Text>
      <TextInput
        onChangeText={value => {
          settime(value);
        }}
        style={{
          borderRadius: 20,
          height: 40,
          margin: 32,
          borderWidth: 1,
          padding: 10,
          backgroundColor: 'white',
          color:'black'
        }}/>
      <TouchableOpacity 
        onPress={() => addItem()}
        style={{padding: 2, margin: 30,justifyContent:'center',alignContent:"center"}}>
        <Text
          style={{
            color: 'black',
            height: 35,
            width: 150,
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
            backgroundColor: 'white',
            justifyContent:"center"
          }}>
          ADD</Text></TouchableOpacity>
      <View style={{backgroundColor:"black"}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>     
    </View>
    </KeyboardAvoidingView>
  );
};

export default App;
