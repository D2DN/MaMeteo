import React from 'react'
import {View, StyleSheet, TextInput, Image} from 'react-native'


export default class Search extends React.Component{

    static navigationOptions = {
        tabBarIcon: () => {
          return <Image source={require('../icons/Home.png')} style={{height:20 , width: 20}} />
        }
      }

    constructor(props){
        super(props)
        this.state = {
            city : 'Brignoles'
        }
    }


    setCity(city){
        this.setState({city})
    }

    render() {
      return (
        <View style={styles.container}>
           <TextInput 
            underlineColorAndroid='transparent'
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            value={this.state.city}
            onChangeText={(text) => this.setCity(text)}
            />
        </View>
      )
    }



}

const styles = StyleSheet.create({
    container: {

    },
})


