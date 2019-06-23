import React from 'react';
import {AsyncStorage} from 'react-native';
import Database from '../../components/storage'

import {
  Text,
  View,
  TouchableHighlight,
  ScrollView,
  TextInput
} from 'react-native';

import styles from '../styles/global'

export default class LoginScreen extends React.Component {
    static navigationOptions = {
      title: 'Login',
      header: null,
    };

    state = {
      username: '',
      password: ''
    }

    handleSubmit = () => {
      new Database().employeeLogin(this.state.username, this.state.password)
      .then()
      .catch(() => {
        console.error('User not in database')
        new Database().employeeRegister({
          username: 'AE0495',
          password: 'dreamg1rl',
          accessLevel: '1',
          signUpDate: '06/22/2019',
          firstName: 'Anson',
          lastName: 'Ervin',
          email: 'anson.ervin@ansonervin.com',
          phoneNumber: '9082097544'
        })
      })
    }

    render() {
      
      return (
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}> 
            <TextInput
              style={{
                  height: 40, 
                  borderColor: 'gray', 
                  borderWidth: 1,
                  color: 'white'
              }}
              onChangeText={(username) => {
                  this.state.username === 'Username' ?
                      this.setState({username: ''})
                      :
                      this.setState({username})
                  }
              }
              value={this.state.username}
            />
            <TouchableHighlight
            style = {{
                alignItems: 'center', 
                margin: 8, 
                paddingTop: 8, 
                paddingBottom: 8, 
                flex: 1,
                borderColor: '#d7deeb',
                borderRadius: 10,
                backgroundColor: 'blue'
            }}
            underlayColor = {'white'}
            onPress = {()=>{
              this.handleSubmit()
            }}>
            <Text
                style= {{color: 'white', textAlign: 'center', fontSize: 20}}
                title={'btn'} 
            > Login </Text>
          </TouchableHighlight> 
          </ScrollView>
        </View>
      );
    }
  }