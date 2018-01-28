import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    Keyboard
} from 'react-native'
import {StackNavigator} from 'react-navigation';
import List from './List'

/**
 * This class allow to the user to enter the city
 */
class Search extends React.Component {

    static navigationOptions = {
        title: 'Rechercher une ville',
        tabBarIcon: () => {
            return <Image
                source={require('../icons/Home.png')}
                style={{
                height: 20,
                width: 20
            }}/>
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            city: ' '
        }
    }

    setCity(city) {
        this.setState({city})
    }

    submit() {
        Keyboard.dismiss()
        this
            .props
            .navigation
            .navigate('Result', {city: this.state.city})
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    underlineColorAndroid='transparent'
                    placeholder='Ex: Brignoles'
                    placeholderTextColor='grey'
                    onSubmitEditing= {() => this.submit()}
                    style={styles.TextInputCity}
                    onChangeText={(text) => this.setCity(text)}/>
                <TouchableOpacity style={styles.buttonSearch} onPress={() => this.submit()}>
                    <Text style={styles.titleButton}>Rechercher ville</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const navigationOptions = {
    headerStyle : { 
        backgroundColor: 'grey',
    },
    headerTitleStyle: {
        color: 'white',
    },
}

// Define the navigation in the tab Home
export default StackNavigator({
    Search: {
        screen: Search,
        navigationOptions,
    },  
    Result: {
        screen: List,
        navigationOptions,
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1
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
        backgroundColor: 'grey'
    },
    titleButton: {
        color: 'white',
        textAlign: 'center'
    }
})
