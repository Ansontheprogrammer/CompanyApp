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
const logo = imagesDirectory + 'logo-globe.png'
const logoText = imagesDirectory + 'logo-text.png'
const landingPageImage = imagesDirectory + 'phone.png'
const landingPageTextColor = 'white';
const landingPageBackgroundColor = 'black';

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
                source={
                  __DEV__
                    ? require(logo)
                    : require(logo)
                }
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
    marginTop: 10,
    backgroundColor: landingPageBackgroundColor,
    flexDirection: 'row',
    marginBottom: 50
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
  welcomeImage: {
    width: 85,
    height: 85,
    marginLeft: 20
  },
  header:{
    fontSize: 25,
    color: landingPageTextColor,
    lineHeight: 24,
    textAlign: 'left',
    marginTop: 35,
    textAlign: 'center',
    marginLeft: 23,
  },

  subHeading:{
    fontSize: 40,
    color: landingPageTextColor,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 50,
    paddingTop: 50,
    marginTop: 20
  },

  paragraph: {
    fontSize: 17,
    color: landingPageTextColor,
    lineHeight: 24,
    marginLeft: 30,
    marginRight: 30,
    textAlignVertical: 'center'
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
