import React from 'react';

import {
  Platform,
  ScrollView,
  FlatList,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableHighlight
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
            <Text style={styles.subHeading}>Websites{'\n'}</Text>
          
            <Text style={styles.paragraph}>
              We make websites using WordPress, React Native and other various technologies
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}