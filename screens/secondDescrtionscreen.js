import React  from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity,ActivityIndicator} from 'react-native';


class SecondDescrtionscreen extends React.Component{
    render()
    {
        return (
            <View style={styles.container}>
                <ActivityIndicator/>
                

            </View>
          )
    }




}
export default SecondDescrtionscreen;

const styles = StyleSheet.create({
 
    container: {
      height: "100%",
      alignItems: "center",
      justifyContent:"center",
    },
 
   
   
    
  });