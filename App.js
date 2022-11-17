
 import React, { useState, createContext, useContext } from 'react';
 import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
 import TaskContainer from './src/components/TaskContainer'
 import CreateTask from './src/components/CreateTask'
 import {MyDrawer} from './src/navigation/Drawer'

 import AppData, { AppContext } from "./src/context/AppData";
 import { HomeStack } from './src/navigation/HomeStack';
 
 import 'react-native-gesture-handler';
 import store from "./src/redux/store"
 import {Provider} from "react-redux"

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
   ,Route
 } from 'react-native';
 
 import {
   Colors,
   DebugInstructions,
   Header,
   LearnMoreLinks,
   ReloadInstructions,
 } from 'react-native/Libraries/NewAppScreen';
 import FirstPage from './src/Screens/Todo';
import { Authstack } from './src/navigation/Authstack';
 
 const App: () => Node = () => {
   const isDarkMode = useColorScheme() === 'dark';
   const { width, height } = useWindowDimensions();
   const [modalVisible, setModalVisible] = useState(false)
 
   return (
 <Provider store={store}>
      {/* <AppData> */}
       <Authstack></Authstack> 
      {/* <MyDrawer></MyDrawer> */}
        {/* <HomeStack></HomeStack> */}

            {/* </AppData>  */}
     </Provider>

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
 