import React from 'react';

import {
  ScrollView,
  FlatList,
  Image,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import styles from './styles/global'
import productViewStyles from './styles/productViewStyles';

const imagesDirectory = '../assets/images/'
const logo = imagesDirectory + 'logo-globe.png'

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
                source={require(logo)}
                style={styles.welcomeImage}
              />
              <Text style={styles.header}>Products{'\n'}</Text>
            </View>

          <View style={productViewStyles.getStartedContainer}>
            <Text style={productViewStyles.getStartedText}>Anson Ervin Inc.{'\n'}</Text>
          </View>
            <FlatList
              contentContainerStyle={productViewStyles.productList}
              data={[
                {title: 'Websites', key: '1', screen: 'Website'},
                {title: 'Web Apps', key: '2', screen: 'WebApp'},
                {title: 'Cross Platform Apps', key: '3', screen: 'CrossPlatform'},
                {title: 'Native Apps', key: '4', screen: 'NativeApp'},
              ]}
              renderItem={({item}) => (
                <TouchableHighlight
                style = {productViewStyles.productTextBtnPress}
                underlayColor = {'white'}
                onPress = {()=>{
                  this.props.navigation.navigate(item.screen)
                }}>
                <Text
                style= {productViewStyles.productText}
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
}
