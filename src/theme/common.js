import { StyleSheet, useWindowDimennsions } from "react-native"
import {margin,padding} from '/spacing';
import * as colors from './color'

export default globalStyles = StyleSheet.create({
    selectGreenButton: {
        backgroundColor:colors.APP_GREEN,
        width:110,
        height:29,
     borderRadius:3,
    },
imagesliderView:{
    backgroundColor:colors.APP_IMAGE_GREY,
    width:390,
    height:300,
    borderRadius:5,
    borderColor:colors.APP_BORDER_GREY,
    borderWidth:1,
    borderTopWidth:3
},
pagingView:{
    backgroundColor:colors.DARK_GREY,
    width:20,
    height:8,
   borderRadius:5,
    // borderColor:colors.APP_BORDER_GREY,
    // borderWidth:3
},
pagingViewUnselected:{
    backgroundColor:colors.APP_GREEN,
    width:5,
    height:5,
    borderRadius:15,
    // borderColor:colors.APP_BORDER_GREY,
    // borderWidth:3
},
});