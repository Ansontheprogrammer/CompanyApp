import React from 'react';

import {
  ScrollView,
  Image,
  Text,
  View,
} from 'react-native';

import styles from './styles/global';

const imagesDirectory = '../assets/images/'
const logo = imagesDirectory + 'logo-globe.png'
const logoText = imagesDirectory + 'logo-text.png'

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'About',
    header: null,
  };

  render() {
    
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.welcomeContainer}>
              <Image
                source={ require(logo) }
                style={styles.welcomeImage}
              />
              <Text style={styles.header}>About Us{'\n'}</Text>
            </View>
          <View style={styles.contentContainer}>
            <Text style={styles.subHeading}>Anson Ervin Inc.{'\n'}</Text>
          
            <Text style={styles.paragraph}>
              Software developer, with 3 years developing web applications, desktop applications, and mobile applications. I’m always trying to build using new technologies, and hone my skills.
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}