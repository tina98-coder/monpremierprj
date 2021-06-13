import React  from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';


class DescritpioScreen extends React.Component{
    render()
    {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.texttwo}>
                        Nous vous guidons a preserver votre vie contre Covid19
                    

                    </Text>
                    <TouchableOpacity style={styles.nexttwo} >
                        <Text style={styles.textnextwo}>
                            Next
                        </Text>
                    </TouchableOpacity>

                </View>

            </View>
          )
    }




}
export default DescritpioScreen;

const styles = StyleSheet.create({
 
    container: {
      height: "100%",
      alignItems: "center",
      justifyContent:"center",
    },
    texttwo:{
        fontSize:10,
        fontWeight: "bold",


    },
    nexttwo:{
        backgroundColor:"blue",
        paddingVertical:10,
        marginTop:50,
    },
    textnextwo:{
        textAlign:"center",
        color:"#fff",
        fontSize: 18,

    }

   
   
    
  });