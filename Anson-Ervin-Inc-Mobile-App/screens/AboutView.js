import React from 'react';

import {
  ScrollView,
  Image,
  Text,
  View,
} from 'react-native';

import styles from './styles/global';
import Base from './BaseView';

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'About',
    header: null,
  };

  render() {
    
    return (
      <Base>
        <ScrollView>
          <View >
            <Text style={styles.subHeading}>Anson Ervin Inc.{'\n'}</Text>
          
            <Text style={styles.paragraph}>
              Software developer, with 3 years developing web applications, desktop applications, and mobile applications. I’m always trying to build using new technologies, and hone my skills.
            </Text>
          </View>
        </ScrollView>
      </Base>
    );
  }
}