import React , { useState,useCallback,useRef,useEffect} from 'react';
import {Button,Image,FlatList,ImageBackground,ScrollView, SafeAreaView, StyleSheet, Text, View,TextInput, ImageStore} from 'react-native';

//import Slideshow from 'react-native-slideshow';
import plant3 from "../image/plant3.jpg";
import plant4 from "../image/plant4.jpg";
import plant2 from "../image/plant2.jpg";
import plant5 from "../image/plant5.jpg";
import plant6 from "../image/plant6.jpg";
import plant7 from "../image/plant7.jpg";
import plant8 from "../image/plant8.jpg";
import plant9 from "../image/plant9.jpg";
import plant10 from "../image/plant10.jpg";

import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import globalStyles from '../theme/common';

const App = ({navigation, route, name}) => {
  const[img,setimage]=useState(0);
  const flatref=useRef();
  const [ind,setind] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [data, setdata] = useState([
  {
    id: 1,
    image:'../image/plant3.jpg',
  },
  {
    id: 2,
    image:'../image/plant5.jpg'
  },
  {
    id: 3,
    image:'../image/plant6.jpg'
  },
  
]);

const onViewableItemsChangeds = useCallback(({viewableItems, changed}) => {
  console.log('Visible items are', viewableItems);
  console.log('Changed in this iteration', changed);
  setSelectedIndex(viewableItems[0].index)
}, []);

// const nextImage=()=>
// {
//   console.log("IMAGE LENGTH :",ind,data)
//   const len=data.length
//   if(len>0 && flatref.current)
//   {
//     if(ind<len-1)
//     {
//       flatref.current.scrollToIndex({index:data[0].id+1})
//       setdata(data+1)
//     }
//     else
//     {
//       flatref.current.scrollToIndex({index:0})
//       setdata(0)
//     }
//   }
// }
// useEffect(()=>
// {
// setTimeout(()=>{nextImage()},2000)
// },[img,ind])

const viewabilityConfig = {
  itemVisiblePercentThreshold: 50,   
};


const renderItem = ({item, index}) => {
  return (
    <ScrollView style={{margin:1,marginTop:60}}>
    <View key={index} style={globalStyles.imagesliderView}>
        
        {/* <View pagingEnabled horizontal showsHorizontalScrollIndicator={false}
        style={{backgroundColor:'#0b6d01',height:300,borderBottomLeftRadius:35}}> */}
        <ImageBackground
        key={index}
            style={{
              width: '100%',
              borderRadius: 10,
              height: '100%',
            }}
            resizeMode={'cover'}
           source={plant3}
           >          
           {/* <MaterialIcon
              name='arrow-back'
              color={'white'}
              size={28}
              onPress={() => {navigation.navigate('plant')}}></MaterialIcon>          */}
          </ImageBackground>
      {/* </View>    */}
    </View>

    </ScrollView>
  );
}

const _renderItemPage = ({item, index}) => {
  return (
    <>
      
      <View
        key={index}
        style={
          selectedIndex == index? globalStyles.pagingView  : globalStyles.pagingViewUnselected

        }></View>      
    </>
  );
};


          const _renderItem = () => {
            return (
              <View style={{height:50,backgroundColor:'pink'}}>
                  <Text style={{fontSize:20}}>HI{"\n\n\n"}</Text>                  
              </View>

            );
          };

  return (
<View style={{justifyContent:'flex-end'}}>
    <ScrollView> 
      <>
         <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ref={flatref}
          horizontal={true}
          // onViewableItemsChanged={onViewableItemsChangeds}
           viewabilityConfig={viewabilityConfig}
          pagingEnabled={true}/>   
      </>
        <FlatList
            data={img}
            renderItem={_renderItemPage}
            horizontal={true}
            pagingEnabled={true}
          />

        <View style={{marginLeft:5}}>
            <Text style={{color:'black',fontSize:30,margin:5}}>Zingiber officinale     <EvilIcons name='share-google' style={{alignItems:'flex-end'}} size={34}></EvilIcons>  <Fontisto name='heart-alt' size={28}></Fontisto></Text>
            <Text style={{margin:5}}>Ginger Officinale Plant</Text>
            <Text style={{fontSize:18,color:'green',margin:6}}><Feather name='sun' size={18}/>  20-28c             <Fontisto name='cloudy' size={18} style={{justifyContent:'center',alignContent:'center',alignItems:'center'}}/> Outdoor      <MaterialIcon name='map-marker-radius-outline' size={18}/>  Yogyakarta</Text>
            <Text style={{color:'black',fontSize:20,margin:5}}>Description</Text>
            <Text style={{margin:5,fontFamily:'Quicksand-Bold'}}>Ginger (Zingiber Officinale) is a flowering plant whose rhizome, ginger root or ginner, is widely used as a spice and a folk medicine.[2] it is a herbaceous perennial which grows annual pseudostems 
                (false stems made of the rolled bases of leaves) about one meter tall bearing narrow leaf blades. The inflorescences bear flowers having pale yellow petals with purple edges, and arise directly from the rhizome ginger root or ginner, is widely used as a spice and a folk medicine.[2] it is a herbaceous perennial which grows annual pseudostems 
                (false stems made of the rolled bases of leaves) about one meter tall bearing narrow leaf blades.The inflorescences bear flowers having pale yellow petals with purple edges, and arise directly from the rhizome ginger root or ginner, is widely used as a spice and a folk medicine.[2] it is a herbaceous perennial which grows annual pseudostems 
                (false stems made of the rolled bases of leaves) about one meter tall bearing narrow leaf blades.The inflorescences bear flowers having pale yellow petals with purple edges, and arise directly from the rhizome ginger root or ginner, is widely used as a spice and a folk medicine.[2] it is a herbaceous perennial which grows annual pseudostems 
                (false stems made of the rolled bases of leaves) about one meter tall bearing narrow leaf blades.The inflorescences bear flowers having pale yellow petals with purple edges, and arise directly from the rhizome ginger root or ginner, is widely used as a spice and a folk medicine.[2] it is a herbaceous perennial which grows annual pseudostems 
                (false stems made of the rolled bases of leaves) about one meter tall bearing narrow leaf blades.The inflorescences bear flowers having pale yellow petals with purple edges, and arise directly from the rhizome ginger root or ginner, is widely used as a spice and a folk medicine.[2] it is a herbaceous perennial which grows annual pseudostems 
                (false stems made of the rolled bases of leaves) about one meter tall bearing narrow leaf blades.The inflorescences bear flowers having pale yellow petals with purple edges, and arise directly from the rhizome ginger root or ginner, is widely used as a spice and a folk medicine.[2] it is a herbaceous perennial which grows annual pseudostems 
                (false stems made of the rolled bases of leaves) about one meter tall bearing narrow leaf blades.
            </Text>
        </View>
        <FlatList
          renderItem={_renderItem}/>   
    </ScrollView>  
    
     <View style={{backgroundColor:'white',height:120}}>
      <Text>{}</Text>
      <Text style={{justifyContent:'center',alignContent:'center'}}> {"      "}<MaterialIcon name='message-reply-text-outline' size={50} color={'green'}/>{"    "}
          <View style={{height:45,width:290,justifyContent:'center',alignContent:'center',backgroundColor:'green',borderWidth:1,borderRadius:8}}>
            <Text style={{fontSize:14,color:'white',justifyContent:'center',alignItems:'center',alignSelf:'center',}}>   ADD TO CART</Text>
          </View>
          </Text>
        </View> 
    
    </View>
 
  );
};

export default App;