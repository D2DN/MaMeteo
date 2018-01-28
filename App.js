import React from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import About from './components/About'
import Search from './components/Search'
import {TabNavigator} from 'react-navigation'

// Define the tabBar navigation
const Tabs = TabNavigator({
  Search: {
    screen: Search
  },
  About: {
    screen: About
  }
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    indicatorStyle: {
      height: 2,
      backgroundColor: 'white'
    },
    style: {
      backgroundColor: 'grey',
      borderTopWidth: 1,
      borderColor: 'grey'
    }
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Tabs/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40, //TODO ==> For iphone X delete this line and verified if OK
  }
});
