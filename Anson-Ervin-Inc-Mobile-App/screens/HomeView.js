import React from 'react';

import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import styles from './styles/global'

const imagesDirectory = '../assets/images/'
const logo = imagesDirectory + 'logo-globe.png'
const logoText = imagesDirectory + 'logo-text.png'
const landingPageImage = imagesDirectory + 'phone.png'
const completedProjects = [
  'https://labelmeathreat.com',
  'https://k-butta.com',
  'https://zootythebarber.com'
]

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  getCompletedProjects(){
    return completedProjects.map((project, index) => {
      return (
        <View style={styles.helpContainer}>
          <TouchableOpacity key={index} onPress={this.getBrowserInSync(project)} style={styles.helpLink}>
            <Text key={index + 1} style={styles.helpLinkText}>{project}{'\n'}</Text>
          </TouchableOpacity>
        </View>
      )
    })
  }
  
  getBrowserInSync(url){
    return () => WebBrowser.openBrowserAsync(url)
  }

  render() {   
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
                source={ require(logo) }
                style={styles.welcomeImage}
            />
            <Text style={styles.header}>Anson Ervin Inc.{'\n'}</Text>
          </View>

          <View>
            {this._maybeRenderDevelopmentModeWarning()}
            <Text style={styles.subHeading}>
              Mission
            </Text>
            <Text style={styles.paragraph}>
              Providing small business and startups with affordable software products, one business at a time!
            </Text>
          </View>

          <Text style={styles.subHeading}>
              Works
          </Text>
          {this.getCompletedProjects()}
        </ScrollView>
        <View style={styles.homeViewContainer}>
            <Image
              source={ require(landingPageImage) }
              style={styles.homeViewImage}
            />
            <Image
              source={ require(logoText) }
              style={styles.logoText}
            />
        </View>
      </View>
    );
  }
}

