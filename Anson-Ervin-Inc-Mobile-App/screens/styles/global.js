import {
    Platform,
    StyleSheet,
  } from 'react-native';

const landingPageTextColor = 'white';
const standardBackgroundColor = 'black';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: standardBackgroundColor,
    },
    contentContainer: {
      paddingTop: 30,
    },
    welcomeContainer: {
      marginTop: 10,
      backgroundColor: standardBackgroundColor,
      flexDirection: 'row',
      marginBottom: 50
    },
    homeViewContainer: {
      marginTop: 10,
      backgroundColor: standardBackgroundColor,
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
      paddingLeft: 30,
      marginBottom: 50,
      paddingTop: 50,
      paddingBottom: 25,
      marginTop: 20,
      borderColor: 'white',
      borderWidth: 5,
      borderRadius: 20
    },
  
    paragraph: {
      fontSize: 17,
      color: landingPageTextColor,
      lineHeight: 24,
      marginLeft: 30,
      marginRight: 30,
      marginBottom: 20
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
  });
