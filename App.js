{/*}
import React , {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,

  TextInput,
  TouchableOpacity,
} from 'react-native';

import AppContainer from './rootes';
const App = () => {


  return (
    <AppContainer />
     
  );
};



export default App;
{*/}
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {  StyleSheet, TextInput, TouchableOpacity} from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text style={styles.text}>
          Welcome to our anticovid19 app
       </Text>
   
      <TextInput
                      style={styles.textInput}
                      placeholder="Entrer votre numero de telephone"
                    
                    >
                </TextInput>
      <Button
        title="Suivant"
        onPress={() => navigation.navigate('Details')}
      />
      
    </View>
    
    


  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
 
  
  text:
  {
    textAlign: "center",
    marginBottom:20,
    fontSize:24,
    padding:10
   

  },
   textInput:{
      backgroundColor: "#ddd",
      height:40,
      padding:10,


    },
 
  
});