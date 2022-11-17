import React from 'react'
import { View, Text, TouchableOpacity,Button } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Task({ selected, index, item, onPress ,completeTask}) {
    return (
        <View onPress={() => onPress(index)}  >
            
            <Text style={{ fontSize: 20 ,textDecorationLine:item.completed==true?"line-through":'none'}}>
                Task: {item.name}
                {"\n\n"}
         Time: {item.time}</Text>
          
     </View>
    )
}
