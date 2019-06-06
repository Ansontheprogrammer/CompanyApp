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

import {ListItem } from 'react-native-elements';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

const imagesDirectory = '../assets/images/'
const logo = imagesDirectory + 'ANSON-ERVIN-INC.png'
const landingPageTextColor = 'white';
const landingPageBackgroundColor = 'black';

export default class ProductScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    
  }

  render() {
    const { navigate } = this.props.navigation
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
          <View style={styles.welcomeContainer}>
            <Text style={styles.getStartedText}>Products{'\n'}</Text>
          </View>

          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>Anson Ervin Inc.{'\n'}</Text>
            {this._maybeRenderDevelopmentModeWarning()}
          </View>
            <FlatList
              contentContainerStyle={styles.productList}
              data={[
                {title: 'Websites', key: 'item1'},
                {title: 'Web Apps', key: 'item1'},
                {title: 'Cross Platform Apps', key: 'item1'},
                {title: 'Native Apps', key: 'item1'},
              ]}
              renderItem={({item}) => (
                <TouchableHighlight
                style = {{alignItems: 'center', margin: 8, paddingTop: 8, paddingBottom: 8, //flex: 1,
                borderColor: '#d7deeb',
                borderRadius: 10,
              }}
                underlayColor = {'white'}
                onPress = {()=>{
                  navigate('WebApps')
                }}>
                <Text
                style= {{color: 'black', textAlign: 'center', fontSize: 20}}
                title={item.title} 
              > {item.title} </Text>
              </TouchableHighlight>
              )}
              keyExtractor={item => item.key}
            />
        </ScrollView>
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
  productList: {
    backgroundColor: 'grey',
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
