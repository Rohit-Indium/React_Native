/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { useState, createContext, useContext } from 'react';
 import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
 import TaskContainer from './src/components/TaskContainer'
 import CreateTask from './src/components/CreateTask'
 
 import AppData, { AppContext } from "./src/context/AppData";
 import { HomeStack } from './src/navigation/HomeStack';
 
 
 
 import type { Node } from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   Text,
   useColorScheme,
   View,
   useWindowDimensions,
   TouchableOpacity,
   Alert,
   Modal,
   Pressable
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import FirstPage from './src/Screens/FirstPage';
 
 
 
 
 
 const App: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark';
   const { width, height } = useWindowDimensions();
   const [modalVisible, setModalVisible] = useState(false)
 
   return (
 
     <AppData>
       <HomeStack></HomeStack>
     </AppData>
 
 
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
   centeredView: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     marginTop: 22
   },
   modalView: {
     margin: 20,
     backgroundColor: "white",
     borderRadius: 20,
     padding: 35,
     alignItems: "center",
     shadowColor: "#000",
     shadowOffset: {
       width: 0,
       height: 2
     },
     shadowOpacity: 0.25,
     shadowRadius: 4,
     elevation: 5
   },
   button: {
     borderRadius: 20,
     padding: 10,
     elevation: 2
   },
   buttonOpen: {
     backgroundColor: "#F194FF",
   },
   buttonClose: {
     backgroundColor: "#2196F3",
   },
   textStyle: {
     color: "white",
     fontWeight: "bold",
     textAlign: "center"
   },
   modalText: {
     marginBottom: 15,
     textAlign: "center"
   }
 });
 
 export default App;
 