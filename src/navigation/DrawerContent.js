import { DrawerContentScrollView,DrawerItem,DrawerItemList, } from "@react-navigation/drawer";
import { Linking } from 'react-native';

export function CustomerDrawerContent(props){
    return(

    <DrawerContentScrollView {...props}>
            <DrawerItem
            label="ABOUT COMPANY"
            onPress={()=>Linking.openURL('https://www.indiumsoftware.com')}/>
            {/* <DrawerItem
            label="REACT NATIVE "
            onPress={()=>Linking.openURL('https://reactnative.dev/')}/> */}
            <DrawerItemList {...props}></DrawerItemList>
    </DrawerContentScrollView>   
)
}