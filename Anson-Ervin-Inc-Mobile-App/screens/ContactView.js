import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    TouchableNativeFeedback,
    ScrollView
} from 'react-native';

import Base from './BaseView'

export default class CalendarScreen extends Component {
    static navigationOptions = {
        header: null,
      };

    render() {

        return (
            <Base>
                <View>
                    <ScrollView>
                        
                    </ScrollView>
                </View>
            </Base>
        )
    }
}