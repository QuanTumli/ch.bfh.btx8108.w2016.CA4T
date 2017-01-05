import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

import SelectButton from '../components/SelectButton';
import Colors from '../constants/Colors';
import Header from '../components/Header';
import GlobalStyle from '../constants/GlobalStyle';
import Button from '../components/Button';
import Router from '../navigation/Router';



import I18n from 'react-native-i18n'
import Languages from '../constants/Languages';
I18n.fallbacks = true
I18n.translations = Languages


export default class Tnm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      T1: false,
      T2: false,
      T3: false,
      T4: false,
      N0: false,
      N1: false,
      N2: false,
      M0: false,
      M1: false,
    }
  }

  updateChoice(type) {
    let newState = {...this.state};
    newState[type] = !newState[type];
    this.setState(newState);
  }

  static route = {
    navigationBar: {
      title(params) {
        if (typeof params.title === 'undefined') {
          return I18n.t('enterOrImportTitle');
        }
        return params.title;
       },
      backgroundColor: Colors.navigationBarBackground,
      tintColor: Colors.navigationBarTint,
      titleStyle: {"color": Colors.textDark, "fontWeight": "bold"}
    },
  }

  render() {
    return (
      <View style={GlobalStyle.mainContainer}>
        <ScrollView
          style={GlobalStyle.scrollContainer}>
        <Header title="Geben Sie Ihr TNM ein" />

          <View style={styles.container}>
            <View style={{flex: 1, alignItems: 'center', flexDirection: 'row',justifyContent: 'center',marginTop:20}}>
              <SelectButton label='1' onPress={() => { this.updateChoice('T1') }} selected={this.state.T1} />
              <SelectButton label='2' onPress={() => { this.updateChoice('T2') }} selected={this.state.T2} />
              <SelectButton label='3' onPress={() => { this.updateChoice('T3') }} selected={this.state.T3} />
              <SelectButton label='4' onPress={() => { this.updateChoice('T4') }} selected={this.state.T4} />

            </View>

            <View style={{flex: 1, alignItems: 'center', flexDirection: 'row',justifyContent: 'center',marginTop:20}}>
              <SelectButton label='N0' onPress={() => { this.updateChoice('N0') }} selected={this.state.N0} />
              <SelectButton label='N1' onPress={() => { this.updateChoice('N1') }} selected={this.state.N1} />
              <SelectButton label='N2' onPress={() => { this.updateChoice('N2') }} selected={this.state.N2} />

            </View>

            <View style={{flex: 1, alignItems: 'center', flexDirection: 'row',justifyContent: 'center',marginTop:20}}>
              <SelectButton label='M0' onPress={() => { this.updateChoice('M0') }} selected={this.state.M0} />
              <SelectButton label='M1' onPress={() => { this.updateChoice('M1') }} selected={this.state.M1} />

            </View>


          </View>

          <Button
            onPress={this._clickEnter}>
            Weiter
          </Button>



        </ScrollView>
      </View>
    );
  }

  _clickEnter = () => {
    this.props.navigator.push(Router.getRoute('selectOpDate'));
  }

};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },

  row: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -30,
  },



});

module.exports = Tnm;

AppRegistry.registerComponent('main', () => Tnm);
