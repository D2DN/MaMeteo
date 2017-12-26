import React from 'react'
import {View, StyleSheet, Text, TextInput, Image, TouchableOpacity} from 'react-native'


export default class Search extends React.Component{

    static navigationOptions = {
        tabBarIcon: () => {
          return <Image source={require('../icons/Home.png')} style={{height:20 , width: 20}} />
        }
      }

    constructor(props){
        super(props)
        this.state = {
            city : ' '
        }
    }


    setCity(city){
        this.setState({city})
    }

    submit(){
        console.log("function submit");
    }

    render() {
      return (
        <View style={styles.container}>
           <TextInput 
            underlineColorAndroid='transparent'
            placeholder= 'Ex: Brignoles'
            placeholderTextColor= 'grey'
            style={styles.TextInputCity}
            onChangeText={(text) => this.setCity(text)}
            />
            <TouchableOpacity
            style={styles.buttonSearch}
            onPress={() => this.submit()}
            >
                <Text style={styles.titleButton}>Rechercher ville</Text>
            </TouchableOpacity>
        </View>
      )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    TextInputCity: {
        height: 40,
        margin: 10,
        padding: 10,
        borderColor: 'grey',
        borderWidth: 1
    },
    buttonSearch: {
        margin: 10,
        padding: 10,
        backgroundColor: 'grey',
    },
    titleButton: {
        color: 'white',
        textAlign: 'center',
    }
})


