import React from 'react';
import {
  ScrollView,
  StyleSheet,
	TouchableOpacity,
	Text
} from 'react-native';

import Colors from '../constants/Colors';
import Router from '../navigation/Router';

import I18n from 'react-native-i18n'
import Languages from '../constants/Languages';
I18n.fallbacks = true
I18n.translations = Languages

export default class Add1 extends React.Component {
  static route = {
    navigationBar: {
      title: I18n.t('addOverviewTitle'),
    },
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

				{/* Button for Eingabe */}
				<TouchableOpacity
					onPress={this._handlePressEingabe}
					style={styles.fullWidthButton}>
					<Text style={styles.fullWidthButtonText}>
						{I18n.t('enterData')}
					</Text>
				</TouchableOpacity>

				{/* Button for Import */}
				<TouchableOpacity
					onPress={this._handlePressImport}
					style={styles.fullWidthButton}>
					<Text style={styles.fullWidthButtonText}>
						{I18n.t('importData')}
					</Text>
				</TouchableOpacity>

      </ScrollView>
    );
  }

	_handlePressEingabe = () => {
    console.log("Eingabe pressed");
    this.props.navigator.push(Router.getRoute('add2'));
  }

  _handlePressImport = () => {
    console.log("Import pressed");
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
	fullWidthButton: {
    backgroundColor: Colors.buttonDark,
    flex: 1,
    margin: 20,
    padding: 5,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
	fullWidthButtonText: {
    fontSize: 50,
    fontWeight: 'normal',
    color: Colors.textLight,
  },
});
