import React from 'react'
import {View, Text, StyleSheet, Image, Button} from 'react-native'

/**
 * Simple view to create a tabBar navigation
 */
export default class About extends React.Component {

  static navigationOptions = {
    tabBarIcon: () => {
      return <Image source={require('../icons/User.png')} style={{height:20 , width: 20}} />
    }
  }

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Pourquoi cette application</Text>
          <Text style= {styles.texte}>L'objectif de cette application est de montrer comment fonctionne 
            une application mobile avec le framework React Native.
          </Text>
        </View>
      )
    }

}

const styles = StyleSheet.create({
    container: {

    },
    title: {
        fontSize: 22,
        margin: 20,
    },
    texte: {
      margin: 10,
    },
    buttonSearch: {

    }
})

