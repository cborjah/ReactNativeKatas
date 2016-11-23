import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'



// Filling and Centering
//
// Your goal is to make content dead center, and make background fill everything
// Hint: You have to combine multiple properties
//

const FillAll = (props)=>{
  return (
    <View style={styles.container}>
      <Icon style={{color:'white'}} name='ios-bulb-outline' size={120} />
    </View>
  )
}


// TODO: Fix the styles here
//
const styles = StyleSheet.create({
  container: {
    flex: 1, // Fills all available space, shared evenly amongst each other components with the same parent.
    backgroundColor: colors[0],
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    color: 'white',
    textAlign:'center'
  }
});





FillAll.displayName = 'FillAll'
export default FillAll
