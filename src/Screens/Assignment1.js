/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState } from 'react';
 import type {Node} from 'react';
 import FontIcon from 'react-native-vector-icons/FontAwesome';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   TouchableOpacity,
   useColorScheme,
   View,
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 
 /* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
  * LTI update could not be added via codemod */
 const Section = ({children, title}): Node => {
   const isDarkMode = useColorScheme() === 'dark';
   return (
     <View style={styles.sectionContainer}>
       <Text
         style={[
           styles.sectionTitle,
           {
             color: isDarkMode ? Colors.white : Colors.black,
           },
         ]}>
         {title}
       </Text>
       <Text
         style={[
           styles.sectionDescription,
           {
             color: isDarkMode ? Colors.light : Colors.dark,
           },
         ]}>
         {children}
       </Text>
     </View>
   );
 };
 
 const App: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 const [color, setColor] = useState("red")
 const onPress=() =>{
   if(color == "orange")
     setColor("grey")
   else
     setColor("orange")
 }
   return (
 
     <View>
         <View style={{justifyContent:"space-evenly",backgroundColor:'#50E3C2'}}>
           <Text style={{fontSize:25}}></Text>
         </View>
         <Text>{"\n"}</Text>
         <Text>{"\n"}</Text>
       {/* <TouchableOpacity onPress={onPress}>   
       <View style={{size:80}}> 
         <FontIcon name='circle'  style={{size:100,color:color}}></FontIcon>
         </View>
         </TouchableOpacity> */}
 
         {/* <Text>{"\n"}</Text>
         <Text>{"\n"}</Text> */}
       <TouchableOpacity  >   
       <View style={{backgroundColor:color}}> 
         <View style={styles.container}>
           {/* <View style={styles.SquareShapeView} /> */}
           <View style={{width: 100,height:100,backgroundColor:color}}></View>
           </View>    
         </View>
         </TouchableOpacity>
           <Text>{"\n\n\n\n"}</Text>
       <View style={{backgroundColor:'orange'}}> 
         <View style={styles.container}>
           {/* <View style={styles.RectangleShapeView} /> */}
           <View style={{width:200,height:30,backgroundColor:'orange'}}></View>
         </View>        
       </View>
         <Text>{"\n\n"}</Text>
         {/* <TouchableOpacity onPress={onPress}>   
           <View style={{justifyContent:"space-evenly",backgroundColor:color}}>
           <Text style={{fontSize:25}}></Text>
         </View>
         </TouchableOpacity> */}
         <View style={{flexDirection:'row'}}>
             <Text style={{fontSize:78,width:'50%',backgroundColor:'#9013FE'}}> </Text>
             <Text style={{fontSize:78,width:'50%',backgroundColor:'#4A90E2'}}> </Text>  
         </View>
 
        
         <View style={{backgroundColor:'#50E3C2',justifyContent:"flex-end"}}>
           <Text style={{fontSize:12}}></Text>
       </View>
 
         <Text>{"\n\n\n\n"}</Text>
       <TouchableOpacity onPress={onPress}>   
       <View style={{backgroundColor:color}}>
       <View style={styles.containers}>
         <View style={{width: 100,height: 100,backgroundColor:color}} />
         <View style={{width: 100,height: 100,backgroundColor:color}} />
         <View style={{width: 100,height: 100,backgroundColor:color}} />
       </View>
       </View>
       </TouchableOpacity>
 
       <Text>{"\n\n\n\n\n\n"}</Text>
       <TouchableOpacity onPress={onPress}>   
       <View style={{backgroundColor:color}}>
       <View style={styles.containers}>
       <View style={{width: 100,height: 100,backgroundColor:color}} />
       <View style={{width: 100,height: 100,backgroundColor:color}} />
       <View style={{width: 100,height: 100,backgroundColor:color}} />
       </View>
       </View>
       </TouchableOpacity>
 
       {/* </View>
       </TouchableOpacity> */}
       <Text>{"\n\n\n"}</Text>
       <View style={{backgroundColor:'#4A90E2',alignItems:"flex-end"}}>
           <Text style={{fontSize:45}}></Text>
       </View>
 
     </View>
 
 
     );
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
   
   container: {
  
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: 'orange',
   },
  
   SquareShapeView: {
     width: 100,
     height: 100,
     backgroundColor: 'orange'
   },
 
   RectangleShapeView: {
     width: 120 * 2,
     height: 25,
     backgroundColor: 'orange'
   },
 
   containers: {
  
     flex: 1,
     flexDirection:'row',
     justifyContent:'space-evenly',
     alignItems: 'center',
     backgroundColor: 'orange',
   },
   SquareShapesView: {
     width: 100,
     height: 100,
     backgroundColor: 'orange'
   },
 
 
 });
 
 export default App;
 