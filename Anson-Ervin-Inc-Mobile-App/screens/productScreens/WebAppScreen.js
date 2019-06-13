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
            <Text style={styles.subHeading}>WebApps{'\n'}</Text>
          
            <Text style={styles.paragraph}>
              We make web apps using NodeJS / Express and other various technologies
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}