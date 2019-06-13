import React from 'react';

import {
  ScrollView,
  Text,
  View,
} from 'react-native';

import styles from '../styles/global'

export default class ProductScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    
  }

  render() {
    
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            
          <View style={styles.contentContainer}>
            <Text style={styles.subHeading}>Native Apps{'\n'}</Text>
          
            <Text style={styles.paragraph}>
              We make native mobile apps using Swift and Android
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}