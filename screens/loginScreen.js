import React  from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';


class LoginScreen extends React.Component{
    render()
    {
        return (
            <View style={styles.container}>
              <View style={styles.forwrapper}>
                
                <Text style={styles.text}>
                  Welcome to our anticovid19 app
                </Text>

                <View>
                    <TextInput
                      style={styles.textInput}
                      placeholder="Entrer votre numero de telephone"
                    
                    >
                    </TextInput>

                  

                </View>

                <TouchableOpacity style={styles.next}
                                    onPress={() => navigation.navigate('App')}
                
                >
                  <Text style={styles.nextText}
                  >
                    Next
                  </Text>
                </TouchableOpacity>

              </View>
            </View>
          )
    }




}
export default LoginScreen;

const styles = StyleSheet.create({
 
    container: {
      height: "100%",
      alignItems: "center",
      justifyContent:"center",
    },
   
    forwrapper: {
        width:"90%",
      },
    textInput:{
      backgroundColor: "#ddd",
      height:40,
      padding:10,


    },
    text:
    {
      textAlign: "center",
      marginBottom:20,
      fontSize:24,
      padding:10
     

    },
    next:{
      backgroundColor:"blue",
      paddingVertical:10,
      marginTop:50,
      


    },
    nextText:{
      textAlign:"center",
      color:"#fff",
      fontSize: 18,
    },
    
  });