import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View ,Image,uri} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = () => {
     try {
      // fetch('https://reactnative.dev/movies.json')
     // fetch('https://reqres.in/api/login')
      fetch('https://randomuser.me/api/?results=500')
      .then((res)=>res.json())
      .then((json)=>setData(json.data))
      .catch((err)=>{
        console.log(err.response)
      })
      setLoading(false);

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    
    <View style={{ flex: 1, padding: 24,backgroundColor:'pink' }}>
        <Text>BOYS</Text>
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            // <Text style={{fontSize:30}}>{item.id} {item.title}, {item.releaseYear}</Text>
            <ScrollView>
           <View>
                <Text style={{color:'black'}}>{item.gender} </Text> 
               <Text style={{fontSize:30,marginVertical:10}}>hel</Text>
                 {/* <Text style={{color:'black'}}>{item.id} {item.name}{item.email}{item.password}</Text>          */}
                
                 {/* <Text style={{color:'black'}}>{item.gender} </Text>  */}
              {/* <Image source={{uri: item.avatar}} style={{height:30,width:30}}></Image>  */}
             
             </View>
             </ScrollView>
             
          )}
        />
        
      
     
    </View>
    
  );
};