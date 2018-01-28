import React, {Component} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import PropTypes from 'prop-types'

/**
 * Allows to import moment.js in fr
 */
import Moment from 'moment'
import 'moment/locale/fr'
Moment.locale('fr')

/**
 * This component allow to display the row in de Result view (List.js)
 * Each day of the week have an component Row
 */
export default class Row extends Component {

    // Return day with moment.js
    day() {
        let day = Moment(this.props.day.dt * 1000).format('ddd')
        return (
            <Text style={[styles.bold, styles.white]}>
                {day.toUpperCase()}
            </Text>
        );
    }

    // Return date with moment.js
    date() {
        let date = Moment(this.props.day.dt * 1000).format('DD/MM')
        return (
            <Text style={styles.white}>
                {date}
            </Text>
        );
    }
    
    // Return the icons with the good size
    icon(size) {
        const type = this
            .props
            .day
            .weather[0]
            .main
            .toLowerCase()
        let image
        switch (type) {
            case 'clouds':
                image = require('../../icons/weather/cloud.png')
                break;
            case 'rain':
                image = require('../../icons/weather/rain.png')
                break;
            default:
                image = require('../../icons/weather/sun.jpg')
        }
        return (
        <Image
            source={image}
            style={{
            marginRight: 30,
            width: size,
            height: size
        }}
        />);
    }

    render() {
        // If it is the current day
        if (this.props.index === 0){
            return (
                <View style={[styles.view, styles.currentView]}>
                    <View>
                        {this.day()}
                        {this.date()}
                        {this.icon(90)} 
                    </View>
                    <Text style={styles.temp}>{Math.round(this.props.day.main.temp)} °C</Text>
                </View>
            ); 
        }
        else {
            return (
                <View style={styles.view}>
                    <View style={{flex:1, flexDirection: 'row', alignItems: 'center'}}>
                        {this.icon(50)} 
                        {this.day()}
                        {this.date()}
                    </View>
                    <Text style={styles.temp}>{Math.round(this.props.day.main.temp)} °C</Text>
                </View>
            ); 
        }

       
    }
}

Row.prototypes = {
    day: PropTypes.object,
    index: PropTypes.number
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: 'grey',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    currentView: {
      backgroundColor: 'red',
    },
    temp: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 35
    },
    white: {
        color: 'white'
    },
    bold: {
        fontWeight: 'bold'
    }

})
