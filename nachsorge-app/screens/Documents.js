import React from 'react';
import {
  ScrollView,
  StyleSheet,
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

export default class Documents extends React.Component {
  static route = {
    navigationBar: {
      title: I18n.t('documents'),
      backgroundColor: Colors.navigationBarBackground,
      tintColor: Colors.navigationBarTint,
      titleStyle: {"color": Colors.textDark, "fontWeight": "bold"}
    },
  }

  render() {
    return (
      <View style={GlobalStyle.mainContainer}>
        <ScrollView
          style={GlobalStyle.scrollContainer}
          contentContainerStyle={this.props.route.getContentContainerStyle()}>

  				<Text>Some documents will come here...</Text>

        </ScrollView>

        <InfoButton />

      </View>
    );
  }

}

const styles = StyleSheet.create({

});
