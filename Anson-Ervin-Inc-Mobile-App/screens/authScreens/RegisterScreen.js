import React from 'react';

import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import styles from '../styles/global'

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
      title: 'Login',
      header: null,
    };
    
    allocationInputs = () => {
        return (
            <View style={styles.container}>
              <TextInput
                style={{
                    height: 40, 
                    borderColor: 'gray', 
                    borderWidth: 1,
                    color: 'white'}}
                onChangeText={(income) => {
                    this.state.income === 'Income' ?
                        this.setState({income: ''})
                        :
                        this.setState({income})
                    }
                }
                value={this.state.income}
              />
              <TextInput
                style={{
                    height: 40, 
                    borderColor: 'gray', 
                    borderWidth: 1,
                    color: 'white'
                }}
                onChangeText={(equity) => {
                    this.state.equity === 'Equity' ?
                        this.setState({equity: ''})
                        :
                        this.setState({equity})
                    }
                }
                value={this.state.equity}
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
                    // If user has not entered anything revert income & equity fields and don't show results
                    if(!this.state.equity || !this.state.income){
                        this.setState({
                            equity: 'Equity',
                            income: 'Income',
                        })
                    } else {
                        this.setState({
                            showingAllocationResults: true,
                        })
                        this.handleSubmit()
                    }
                }}>
                <Text
                    style= {{color: 'white', textAlign: 'center', fontSize: 20}}
                    title={'btn'} 
                > Calculate </Text>
              </TouchableHighlight> 
            </View>
        );
      }

    render() {
      
      return (
        <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
              <View style={styles.welcomeContainer}>
                {/* <Image
                  source={ require(logo) }
                  style={styles.welcomeImage}
                /> */}
                <Text style={styles.header}>About Us{'\n'}</Text>
              </View>
            <View style={styles.contentContainer}>
              <Text style={styles.subHeading}>Anson Ervin Inc.{'\n'}</Text>
            
              <Text style={styles.paragraph}>
                Software developer, with 3 years developing web applications, desktop applications, and mobile applications. I’m always trying to build using new technologies, and hone my skills.
              </Text>
            </View>
          </ScrollView>
        </View>
      );
    }
  }