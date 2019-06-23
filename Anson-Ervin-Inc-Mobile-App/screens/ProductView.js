import React from 'react';

import {
  ScrollView,
  FlatList,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import styles from './styles/global'
import productViewStyles from './styles/productViewStyles';

import Base from './BaseView';

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
      <Base>
      <View>
        <ScrollView contentContainerStyle={productViewStyles.contentContainer}>
            <FlatList
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
                 navigate(item.screen)
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
     </Base>
    );
  }
}
