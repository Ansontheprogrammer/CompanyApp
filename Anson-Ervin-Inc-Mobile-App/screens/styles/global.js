import {
    Platform,
    StyleSheet,
  } from 'react-native';

// **** Theme colors ****

const landingPageTextColor = 'white';
const standardBackgroundColor = '#0D0A0B';
const complementColor = '#BDA7D3'
const colorWhite = '#EAD9F0'

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: standardBackgroundColor,
    },
    
    backgroundContainer: {
      flex: 1,
      width: null,
      height: null,
      justifyContent: 'center',
      alignItems: 'center'
    },

    welcomeContainer: {
      flexDirection: 'row',
      top: 30,
      height: 130,
    },

    contentContainer: {
      paddingTop: 30,
    },

    homeViewContainer: {
      flexDirection: 'row',
      position:'absolute',
      bottom:100,
    },

    logoText: {
      width: 150,
      height: 20,
      marginRight: 25,
      paddingTop: 10,
      marginTop: 175,
      bottom:25,
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
      marginLeft: 0
    },

    header:{
      fontSize: 25,
      color: landingPageTextColor,
      lineHeight: 24,
      textAlign: 'left',
      marginTop: 35,
      textAlign: 'center',
      marginLeft: 15,
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
