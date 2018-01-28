import React from 'react'
import {View, ActivityIndicator, ListView, Text, Image} from 'react-native'
import Axios from 'axios'
import WeatherRow from './weather/Row';

// This class allows to display the weather for all the day of the week
export default class List extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
        title: navigation.state.params.city,
        tabBarIcon: () => {
            return <Image
                source={require('../icons/Home.png')}
                style={{
                height: 20,
                width: 20
                }}/>
            }
         }
    }

    constructor(props) {
        super(props),
        this.state = {
            city: this.props.navigation.state.params.city,
            report: null
        }
        this.fetchMeteo()
    }

    /**
     * This method allows to recovery the data about the {this.state.city}
     */
    fetchMeteo() {
        Axios
            .get(`http://api.openweathermap.org/data/2.5/forecast/?q=${this.state.city}&mode=json&units=metric&cnt=10&APPID=5a4d34f33726bef39cc153abbdcbcff0`)
            .then((reponse) => {
                this.setState({report: reponse.data})
                console.log(reponse)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {

        // If no reponse of the API open weather then we displays an activity indicator
        if (this.state.report === null) {
            return (<ActivityIndicator color='grey' size="large"/>);
        } else {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

            return (
                    <ListView
                        dataSource={ds.cloneWithRows(this.state.report.list)}
                        renderRow={(rowData, j, k) => <WeatherRow day={rowData} index={parseInt(k,10)}/>}
                    />
            );
        }

    }
}