import React from 'react';

import {
  Platform,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

const imagesDirectory = '../assets/images/'
const logo = imagesDirectory + 'ANSON-ERVIN-INC.png'
const landingPageTextColor = 'white';
const landingPageBackgroundColor = 'black';

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.welcomeContainer}>
              <Text style={styles.getStartedText}>About Us{'\n'}</Text>
              <Image
                source={
                  __DEV__
                    ? require(logo)
                    : require(logo)
                }
                style={styles.welcomeImage}
              />
            </View>
          <View style={styles.welcomeContainer}>
            <Text style={styles.getStartedText}>Anson Ervin Inc.{'\n'}</Text>
          
            <Text style={styles.getStartedText}>
              Software developer, with 3 years developing web applications, desktop applications, and mobile applications. I’m always trying to build using new technologies, and hone my skills.
            </Text>
          </View>
            
          <View style={styles.getStartedContainer}>
            {this._maybeRenderDevelopmentModeWarning()}
          </View>
          
          <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}></MonoText>
          </View>
        </ScrollView>
        <View style={styles.welcomeContainer}>
        </View>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      return (
        <Text style={styles.developmentModeText}>
          In development mode 
        </Text>
      );
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
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: landingPageBackgroundColor
  },
  welcomeImage: {
    width: 400,
    height: 210,
    marginTop: 3,
    paddingLeft: 10,
    paddingRight: 10,
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
