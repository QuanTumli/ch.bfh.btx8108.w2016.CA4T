import React from 'react';
import {
  ScrollView,
  StyleSheet,
	TouchableOpacity,
	Text,
  View
} from 'react-native';

import Colors from '../constants/Colors';
import GlobalStyle from '../constants/GlobalStyle';
import Router from '../navigation/Router';

import InfoButton from '../components/InfoButton';
import Button from '../components/Button';

import I18n from 'react-native-i18n'
import Languages from '../constants/Languages';
I18n.fallbacks = true
I18n.translations = Languages

export default class EnterOrImport extends React.Component {
  static route = {
    navigationBar: {
      title: I18n.t('addOverviewTitle'),
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

  				{/* Button for Enter data */}
          <Button
            onPress={this._clickEnter}>
            {I18n.t('enterData')}
          </Button>

  				{/* Button for Import */}
          <Button
            onPress={this._clickImport}>
            {I18n.t('importData')}
          </Button>

        </ScrollView>

        <InfoButton />

      </View>
    );
  }

	_clickEnter = () => {
    console.log("Eingabe pressed");
    this.props.navigator.push(Router.getRoute('selectAffliction'));
  }

  _clickImport = () => {
    console.log("Import pressed");
  }

}

const styles = StyleSheet.create({

});