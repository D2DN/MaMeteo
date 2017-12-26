import React from 'react'
import {View, Text, StyleSheet, Image, Button} from 'react-native'

export default class About extends React.Component {

  static navigationOptions = {
    tabBarIcon: () => {
      return <Image source={require('../icons/User.png')} style={{height:20 , width: 20}} />
    }
  }

  search(){
    this.props.navigation.navigate('Search')
  }

    render() {
      return (
        <View style={styles.container}>
          <Text style={styles.title}> à propos de moi</Text>
          <Text> dsopkf kdspkf skpdf dspofkds fksdpfo ksdo fpkdspo fkdspkf 
            ds fkpds kfpsodk fpodsk get  sdofpkpsqd kfp </Text>
          <Button style={styles.buttonSearch} onPress={() => this.search()} title='Rechercher' />
        </View>
      )
    }

}

const styles = StyleSheet.create({
    container: {

    },
    title: {
        fontSize: 22,
        marginBottom: 20,
    },
    buttonSearch: {
      
    }
})

