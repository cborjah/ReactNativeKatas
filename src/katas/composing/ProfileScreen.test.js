
import React, { Component } from 'react';
import ReactNative, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '@/runner/colors'



const settings =  {
  "Name":"Chuck Norris",
  "Address":"56th Lowkick Ave., Texas",
  "Phone":"481-5162342",
  "Email":"chuck@norrisfamily.arpa",
}

// Profile Screen
//
// For this composition you'll have to use everything you have
// learned so far.
//
// Hints:
// - Fonts have weights
// - Don't be afraid to use explicit width values when needed (instead of flex based)
// - Components can alignSelf
//

const ProfileScreen = (props)=>{
  return (
    <View style={styles.container, {alignItems: 'center'}}>
      <View style={{backgroundColor:'gray', width:120, height:120, borderRadius: 60, marginTop: 30}}>
      </View>
      <Text style={{fontSize:26, fontWeight: '100', marginTop: 20, marginBottom: 50}}>
        Chuck Norris
      </Text>
      {
        Object.keys(settings).map((key)=>{
          return <View key={key} style={styles.setting}>
            <Text style={styles.settingProp}>
              {key}
            </Text>
            <Text style={styles.settingVal}>
              {settings[key]}
            </Text>
          </View>
        })
      }

    </View>
  )
}

const styles = StyleSheet.create({
  setting:{
    paddingBottom: 20,
    marginBottom: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#d8d8d8',
    alignSelf: 'stretch'
  },
  settingProp:{
    color:'#888',
    marginRight:10,
    paddingLeft: 20,
    width: 90
  },
  container: {
    flex:1,
    backgroundColor: 'white',
  },
});




ProfileScreen.displayName = 'ProfileScreen'
export default ProfileScreen
