import React, {useState, useContext, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Button,
  FlatList,
  ImageBackground,
  TextInput,
  placeholderTextColor,
  placeholder,
} from 'react-native';
import {AppContext} from '../context/AppData';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import image from '../image/background3.png';

export default function Signin({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  openAlert = () => {
    alert('Email or Password is Wrong');
  };


  const Register = () => {
    navigation.navigate('Register');
  };


  const onPress = () => {
    console.log('reached');
    const data = {
      email:email,
      //  'eve.holt@reqres.in',
      password: 'cityslicka',
    };
    try {
      fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(json => {
          console.log(json.token);
          if (json.token) navigation.navigate('MyDrawer');
          else {
            openAlert();
            console.log(json.error);
          }
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
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={{
        flex: 1,
        width: 500,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>{'\n\n'}</Text>

        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 70, fontWeight: '600', color: 'black'}}>
            login
            <TouchableOpacity onPress={onPress}>
              <MaterialIcon name="login" size={50} color="green" />
            </TouchableOpacity>
          </Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder={'        Username'}
            style={{
              marginRight: 260,
              backgroundColor: 'white',
              color: 'black',
              width: 280,
              height: 60,
              borderRadius: 30,
            }}></TextInput>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder={'       ********'}
            style={{
              marginRight: 260,
              width: 280,
              height: 60,
              borderRadius: 30,
              backgroundColor: 'white',
              color: 'black',
            }}></TextInput>

          <Text style={{fontSize: 20, fontWeight: '400', marginLeft: 200}}>
            Forgot ?
          </Text>
          <Text>{'\n'}</Text>
          <TouchableOpacity onPress={Register}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: '600',
                marginRight: 300,
                color: 'red',
              }}>
              REGISTER
            </Text>
          </TouchableOpacity>
          {/* <Button title='Alert Box' color={'blue'} onPress={this.openAlert}/> */}
        </View>
      </View>
      
      {/* <FlatList
                datas={datas}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (        
                <View>
                    <Text style={{color:'black',marginRight:300,}}>{item.id} {item.name}{item.email}{item.password}</Text>         
                </View>          
                )}
            />  */}

    </ImageBackground>
  );
}
