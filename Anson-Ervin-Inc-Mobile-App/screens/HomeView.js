import React from 'react';

import {
  Image,
  ScrollView,
  Text,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import Video from 'react-native-video';
import Base from './BaseViewWithoutImage'
// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.
import styles from './styles/global';
import homeViewStyles from './styles/homeViewStyles/homeViewStyles';

const anson = './styles/homeViewStyles/ansonervin.png';
const saleHogs = './styles/homeViewStyles/saleHogs.png';
const zooty = './styles/homeViewStyles/zootythebarber.png';
const label = './styles/homeViewStyles/labelmeathreat.png';

const completedProjects = [
  {
    description: 'This is our company website that our team worked very hard to create.',
    url: 'https://ansonervin.com',
    key: 'anson',
    title: 'Our Website'
  },
  {
    description: 'Sale Hogs is a third party deal platform. Users can locate deals nearby or abroad on vacation.',
    url: 'https://salehogs.com',
    key: 'saleHogs',
    title: 'Sale Hogs'
  },
  {
    description: 'Zooty the Barber is a website used by Zooty the Barber to relay information to his clients. There is a link on the website so his clients can schedule their appointments. They are able to be notified of hours and personal information about Zooty also.',
    url: 'https://zootythebarber.com',
    key: 'zooty',
    title: 'Zooty the Barber'
  },
  {
    description: 'Label me a threat is a website created for a clients clothing line being pushed the summer of 2019.',
    url: 'https://labelmeathreat.com',
    key: 'label',
    title: 'Label Me A Threat'
  }
]

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  getCompletedProjects(){
    return completedProjects.map((project, index) => {
      return (
        <View style={homeViewStyles.urlContainer}>
          <TouchableOpacity key={index} onPress={this.getBrowserInSync(project)} style={homeViewStyles.url}>
          </TouchableOpacity>
          <Text key={index + 1} style={homeViewStyles.urlText}>{project}{'\n'}</Text>
        </View>
      )
    })
  }
  
  getBrowserInSync(url){
    return () => WebBrowser.openBrowserAsync(url)
  }

  render() {   
    return (
      <Base>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <View>
            <Text style={styles.subHeading}>
              Mission
            </Text>
            <Text style={styles.paragraph}>
              Providing small business and startups with affordable software products, one business at a time!
            </Text>
          </View>

          <Text style={styles.subHeading}>
              Websites
          </Text>
          <FlatList
              contentContainerStyle={homeViewStyles.websiteList}
              data={completedProjects}
            
              renderItem={({item}) => {
            
              return (
                <TouchableHighlight
                style = {homeViewStyles.productTextBtnPress}
                underlayColor = {'white'}
                >
                <View style = {homeViewStyles.websiteListItem}>
                  <Image 
                    source = {
                      item.key === 'anson' ? require(anson) : 
                      item.key === 'saleHogs' ? require(saleHogs) :
                      item.key === 'zooty' ? require(zooty) :
                      item.key === 'label' ? require(label) :
                      null
                    }
                    style = {homeViewStyles.websiteListImage}
                  />
                  <Text style= {homeViewStyles.websiteListHeader}>{item.title}</Text>
                  <Text style= {homeViewStyles.websiteListText}>{item.description}</Text>
                </View>
              </TouchableHighlight>
              )}
            }
              keyExtractor={item => item.key}
            />
        </ScrollView>
      </Base>
    );
  }
}

