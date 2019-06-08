import React from 'react';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TextInput,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

const imagesDirectory = '../assets/images/'
const logo = imagesDirectory + 'logo-globe.png'
const landingPageTextColor = 'white';
const landingPageBackgroundColor = 'black';

function allocate(income, equity){
    let marketing = 0.1, equipment = 0.1, stockPortfolio = 0.3
    let board = 0.3, developer = 0.1 , CEO = 0.1
    let ansonEq = 0.3, ansonErvinIncEq = 0.6, securingPartyEq = 0.1
    let ceo = 0.4, presidentOfSales = 0.3
    const getBoard = (boardIncome, dividend) => boardIncome * dividend
    /*
        Income:
        10% will be invested in marketing / promotions *
        10% will be used to purchase equipment (Owned by AnsonErvin Inc.)
        20% will be held invested in stock
        20% of income goes toward CEO.
                10% to Anson Ervin
                30% to Board
    */
    return {
        marketing: marketing * income,
        contractorsOrEquipment: equipment * income,
        portfolio: stockPortfolio * income,
        board: {
            ceoPosition: getBoard(board * income, ceo),
            president: getBoard(board * income, presidentOfSales)
        },
        anson: 0.1 * income,
        ceoPosition: ceo * income,
        equity: {
            anson: ansonEq * equity,
            company: ansonErvinIncEq * equity,
            securingParty: securingPartyEq * equity
        }
    }
}

export default class PayrollScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  state = {
      showAllocationInputs: false,
      showingAllocationResults: false,
      equity: 'Equity',
      income: 'Income',
      allocation: {},
      submitted: false
  }

  handleSubmit = () => {
        this.setState({
            allocation: allocate(this.state.income, this.state.equity),
            showAllocationInputs: false,
        })
  }

  showAllocationResults = () => {
      const { allocation } = this.state; 
      return (
        <View>
            <Text style={styles.subHeading}>
            Income: 
            </Text>
            <View style={{flexDirection: 'column'}}>
                <Text style={{color: 'white',flex: 1, paddingLeft: 5}}>
                    {'\u2022'} Marketing: {allocation.marketing}
                </Text>
                <Text style={{color: 'white',flex: 1, paddingLeft: 5}}>
                    {'\u2022'} Equipment: {allocation.contractorsOrEquipment}
                </Text>
                <Text style={{color: 'white',flex: 1, paddingLeft: 5}}>
                    {'\u2022'} Portfolio: {allocation.portfolio}
                </Text>
                <Text style={{color: 'white',flex: 1, paddingLeft: 5}}>
                    {'\u2022'} Anson: {allocation.anson}
                </Text>
                <Text style={{color: 'white',flex: 1, paddingLeft: 5}}>
                    {'\u2022'} Ceo: {allocation.ceoPosition}
                </Text>
                <Text style={{color: 'white',flex: 1, paddingLeft: 5}}>
                    {'\n'} Board: {'\n\n'}
                    <Text style={{color: 'white',flex: 1, paddingLeft: 5}}>
                        {'\u2022'} Ceo board: {allocation.board.ceoPosition} {'\n'}
                    </Text>
                    <Text style={{color: 'white',flex: 1, paddingLeft: 5}}>
                        {'\u2022'} President: {allocation.board.president}
                    </Text>
                </Text>

                <Text style={{color: 'white',flex: 1, paddingLeft: 5}}>
                    {'\n'} Equity: {'\n\n'}
                    <Text style={{color: 'white',flex: 1, paddingLeft: 5}}>
                        {'\u2022'} Anson: {allocation.equity.anson} {'\n'}
                    </Text>
                    <Text style={{color: 'white',flex: 1, paddingLeft: 5}}>
                        {'\u2022'} Company: {allocation.equity.company} {'\n'}
                    </Text>
                    <Text style={{color: 'white',flex: 1, paddingLeft: 5}}>
                        {'\u2022'} Securing Party: {allocation.equity.securingParty}
                    </Text>
                </Text>
                
            </View>
        </View>
      )
  }

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

  getCalculateBtn(){
      return <TouchableHighlight
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
      this.setState({
          // Revert equity and income back to empty to ensure we can enter a new value
          // Revert show allocation results back to false to clear previous results
          showAllocationInputs: true,
          showingAllocationResults: false,
          allocation: {},
          equity: 'Equity',
          income: 'Income',
        })
      }}>
      <Text
      style= {{color: 'white', textAlign: 'center', fontSize: 20}}
      title={'btn'} 
      > Allocate </Text>
      </TouchableHighlight> 
  }

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
            <Text style={styles.header}>Payroll{'\n'}</Text>
          </View>

          <View>
            <Text style={styles.subHeading}>
              Allocation
            </Text>
            <Text style={styles.paragraph}>
              Calculate how all income should be allocated inside the company
            </Text>
          </View>

          <View style={{marginTop: 50, marginLeft: 25, marginRight: 25}}>
            {this.state.showingAllocationResults ? 
                this.showAllocationResults()
                : 
                null
            }
            {!this.state.showAllocationInputs ? 
                this.getCalculateBtn()
                :
                this.allocationInputs()
            }
          </View>

        </ScrollView>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      return
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
    marginLeft: 50,
  },

  subHeading:{
    fontSize: 40,
    color: landingPageTextColor,
    lineHeight: 24,
    marginLeft: 30,
    marginBottom: 50,
    paddingTop: 50,
    marginTop: 20
  },

  paragraph: {
    fontSize: 17,
    color: landingPageTextColor,
    lineHeight: 24,
    marginLeft: 30,
    marginRight: 30
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
