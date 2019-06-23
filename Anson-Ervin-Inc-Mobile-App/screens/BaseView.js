import React from 'react';

import {
  Image,
  Text,
  View,
} from 'react-native';
import {LinearGradient} from 'expo';

// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.
import styles from './styles/global';

const imagesDirectory = '../assets/images/'
const logo = imagesDirectory + 'logo-globe.png'
const logoText = imagesDirectory + 'logo-text.png'
const landingPageImage = imagesDirectory + 'phone.png'
const backgroundImage = imagesDirectory + 'backgroundImage.jpg'

export default class HomeScreen extends React.Component {
  render() {   
    return (
        <View style={styles.container}>
            <LinearGradient
            colors={[ '#BDA7D3', '#662D8D',  '#0D0A0B']}
            start={[1, 1]}
            end={[1, 0]}
            style={{ padding: 15, alignItems: 'center', borderRadius: 10 }}
            >
                <View style={styles.welcomeContainer}>
                    <Image 
                        source={ require(logo) }
                        style={styles.welcomeImage}
                    />
                    <Text style={styles.header}>AnsonErvin Inc.{'\n'}</Text>
                </View>

                {this.props.children}

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
            </LinearGradient>
        </View>
    )}
}