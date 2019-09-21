import React from 'react';

import {
  ScrollView,
  Text,
  View,
} from 'react-native';

import styles from '../styles/global'
import Base from '../BaseView'
export default class ProductScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    
  }

  render() {
    
    return (
      <Base>
        <View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
            
          <View style={styles.contentContainer}>
            <Text style={styles.subHeading}>WebApps{'\n'}</Text>
          
            <Text style={styles.paragraph}>
              We make web apps using NodeJS / Express and other various technologies
            </Text>
          </View>
        </ScrollView>
        </View>
      </Base>
    );
  }
}