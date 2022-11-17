import React, {useState,useCallback,useRef,useEffect} from 'react';
import {render} from 'react-dom';
import {
  Button,
  SafeAreaView,
  Image,
  StyleSheet,
  Text,
  Alert,
  View,
  Platform,
  ImageBackground,
} from 'react-native';
import {
  FlatList,
  ScrollView,
  State,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import ImageCropPicker from 'react-native-image-crop-picker';
import ImagePicker from 'react-native-image-crop-picker';
import Entypo from 'react-native-vector-icons/Entypo';
import globalStyles from '../theme/common';
import * as colors from '../theme/color';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import image from '../image/background1.png';
import {color} from 'react-native-reanimated';
import { useDispatch,useSelector } from 'react-redux';
import { addImage } from '../redux/reducers/imageslice';

export default function Imagepicker({navigation, route}) {
//  const [img, setImg] = useState([0]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dispatch=useDispatch();
  const img =useSelector((state)=>state.imageslice)
  const flatref=useRef();
  const [jin, setJin] = useState([]);
  const [ind,setind] = useState(0);
  const [data, setdata] = useState([
    {
      id: 1,
      name: 'Ducati',
      uri: 'file:///storage/emulated/0/Android/data/com.navigation/files/Pictures/de09cf49-2c05-4d78-a010-01f04d36824b.jpg',
    },
    {
      id: '2',
      name: 'Gixxer',
      uri: 'file:///storage/emulated/0/Android/data/com.navigation/files/Pictures/de09cf49-2c05-4d78-a010-01f04d36824b.jpg',
    },
  ]);

  const deleteImage = index => {
    let imageList = img;
    let spliced = imageList.splice(index, 1);
    console.log(imageList);
    setImg([...imageList]);
  };
  var crt ='file:///storage/emulated/0/Android/data/com.navigation/files/Pictures/de09cf49-2c05-4d78-a010-01f04d36824b.jpg';
  var jim;

  let a = 0;
  //var jin;
  const openImagePicker = () => {
    let imageList = [];

    ImageCropPicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      includeExif: true,
      compressImageQuality: 0.8,
      maxFiles: 10,
      mediaType: 'any',
      includeBase64: true,
    })
      .then(response => {
        response.map(image => {
          if (Platform.OS === 'ios') {
            console.log('if');
            imageList.push({
              name: image.filename,
              uri: image.path,
              type: image.mime,
            });
          } else {
            const uriParts = image.path.split('.');
            //  const fileType = (uriParts.length-1);
            // console.log('datas',uriParts,fileType)

            setJin(image.path);

            console.log('', jin);
            imageList.push({
              name: image.path.substr(image.path.lastIndexOf('/') + 1),
              uri: image.path,
              type: image.mime,
            });
            //console.log('data',image.uri,'IMAGE PATH : ',image.path,'IMAGE LIST',imageList)
          }
        });
        console.log('_____', jin);

//        setImg([...img, ...imageList]);
        dispatch(addImage([...img, ...imageList]))
        //selectedIndex([imageList])
        //console.log("Length",selectedIndex)
        //console.log("Image : ",img)
        //console.log("URI .........",uri)
        //console.log("URI PARTS :",uriParts)
      })
      .catch(e => console.log('Error', e));
  };
  console.log('_____+', jin);

  useEffect(()=>
  {
  setTimeout(()=>{nextImage()},2000)
  },[img,ind])

const nextImage=()=>
{
  console.log("IMAGE LENGTH :",ind,img.length)
  const len=img.length
  if(len>0 && flatref.current)
  {
    if(ind<len-1)
    {
      flatref.current.scrollToIndex({index:ind+1})
      setind(ind+1)
    }
    else
    {
      flatref.current.scrollToIndex({index:0})
      setind(0)
    }
  }
}


  const onViewableItemsChangeds = useCallback(({viewableItems, changed}) => {
    console.log('Visible items are', viewableItems);
    console.log('Changed in this iteration', changed);
    setSelectedIndex(viewableItems[0].index)
  }, []);

const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,   
  };


  const _renderItem = ({item, index}) => {
    return (
      <ScrollView>
        <View key={index} style={globalStyles.imagesliderView}>
          <ImageBackground
            style={{
              width: '100%',
              borderRadius: 10,
              height: '100%',
            }}
            resizeMode={'cover'}
            source={{uri: item.uri}}>
            <Entypo
              name={'circle-with-cross'}
              color={'white'}
              size={28}
              onPress={() => deleteImage(index)}></Entypo>
              <Text>{"\n"}</Text>
          </ImageBackground>
        </View>
      </ScrollView>
    );
  };

  const _renderItemPage = ({item, index}) => {
    return (
      <>
        
        <View
          key={index}
          styles={{height:150}}
          style={
            selectedIndex == index? globalStyles.pagingView  : globalStyles.pagingViewUnselected}><Text>  </Text><Text>{"     "}</Text></View>      
      </>
    );
  };

  const renderItem = ({item, index}) => {
    return (
      <ScrollView>
        <View key={index} style={globalStyles.imagesliderView}>
          <Image
            style={{
              width: '100%',
              borderRadius: 10,
              height: '100%',
            }}
            resizeMode={'cover'}
            source={{uri: item.uri}}></Image>
        </View>
      </ScrollView>
    );
  };

  return (
    <ScrollView>
      <SafeAreaView style={{flex: 1}}>
        <View
          style={[
            globalStyles.imagesliderView,
            {marginTop: 5, justifyContent: 'center', alignItems: 'center'},
          ]}>
          <>
            <FlatList
              ListEmptyComponent={<View><Text>No images uploaded yet</Text></View>}
              onViewableItemsChanged={onViewableItemsChangeds}
              viewabilityConfig={viewabilityConfig}
              ref={flatref}
              data={img}
              renderItem={_renderItem}
              horizontal={true}
              pagingEnabled={true}
            />
          </>

          <FlatList
            data={img}
            renderItem={_renderItemPage}
            horizontal={true}
            pagingEnabled={true}
          />
        </View>
        <Text>{'\n'}</Text>
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
          <TouchableOpacity
            style={globalStyles.selectGreenButton}
            onPress={() => openImagePicker()}>
            <Text style={{color: 'white', textAlign: 'center'}}>
              UPLOAD images
            </Text>
          </TouchableOpacity>
         
          {/* <TouchableOpacity
            style={globalStyles.selectGreenButton}
            onPress={() => nextImage()}>  
          </TouchableOpacity> */}
        </View>

        {/* <FlatList
                            ListEmptyComponent={<View><Text>No images uploaded yet</Text></View>}
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}/>   */}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});
