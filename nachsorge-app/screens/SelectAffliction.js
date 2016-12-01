import React from 'react';
import {
  ScrollView,
  StyleSheet,
	TouchableOpacity,
	Text,
  View,
} from 'react-native';

import {
  FontAwesome,
} from '@exponent/vector-icons';

import Colors from '../constants/Colors';
import GlobalStyle from '../constants/GlobalStyle';
import Router from '../navigation/Router';

import InfoButton from '../components/InfoButton';
import Button from '../components/Button';

import I18n from 'react-native-i18n'
import Languages from '../constants/Languages';
I18n.fallbacks = true
I18n.translations = Languages

export default class SelectAffliction extends React.Component {
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

          {/* Button for colon */}
          <Button
            onPress={this._clickColon}>
            {I18n.t('colon')}
          </Button>

          {/* Button for rectum */}
          <Button
            onPress={this._clickRectum}>
            {I18n.t('rectum')}
          </Button>

        </ScrollView>

        <InfoButton />

      </View>

    );
  }

  _clickColon = () => {
    console.log("Kolon pressed");
     this.props.navigator.push(Router.getRoute('scheme'));
  }

  _clickRectum = () => {
    console.log("Rektum pressed");
  }


}

const styles = StyleSheet.create({

});
