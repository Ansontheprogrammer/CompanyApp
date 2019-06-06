import React from 'react';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

const imagesDirectory = '../assets/images/'
const logo = imagesDirectory + 'logo-globe.png'
const logoText = imagesDirectory + 'logo-text.png'
const landingPageImage = imagesDirectory + 'phone.png'
const landingPageTextColor = 'white';
const landingPageBackgroundColor = 'black';
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
              source={
                __DEV__
                  ? require(logo)
                  : require(logo)
              }
              style={styles.welcomeImage}
            />
          </View>

          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}

            <Text style={styles.getStartedText}>Anson Ervin Inc.{'\n'}</Text>
          
            <Text style={styles.getStartedText}>
              Providing small business and startups with affordable software products, one business at a time!
            </Text>
          </View>
          
          <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}></MonoText>
          </View>

          {this.getCompletedProjects()}
        </ScrollView>
        <View style={styles.homeViewContainer}>
            <Image
              source={
                __DEV__
                  ? require(landingPageImage)
                  : require(landingPageImage)
              }
              style={styles.homeViewImage}
            />
            <Image
              source={
                __DEV__
                  ? require(logoText)
                  : require(logoText)
              }
              style={styles.logoText}
            />
        </View>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      return
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: landingPageBackgroundColor,
  },
  developmentModeText: {
    marginBottom: 20,
    color: landingPageTextColor,
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: landingPageBackgroundColor
  },
  welcomeImage: {
    width: 10,
    height: 85,
    paddingRight: 200,
  },
  homeViewContainer: {
    marginTop: 10,
    backgroundColor: landingPageBackgroundColor,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  logoText: {
    width: 150,
    height: 20,
    marginLeft: 50,
    paddingTop: 10,
    marginTop: 175
    
  },
  homeViewImage: {
    width: 200,
    height: 200,
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: landingPageTextColor,
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
  },
  getStartedText: {
    fontSize: 17,
    color: landingPageTextColor,
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 3,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
