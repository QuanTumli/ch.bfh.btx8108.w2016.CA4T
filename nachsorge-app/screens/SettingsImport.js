import React from 'react';
import {
  ScrollView,
  View
} from 'react-native';

import { connect } from 'react-redux'

import MidataLogin from './MidataLogin';
import SettingsImportScreen from './SettingsImportScreen';

import Colors from '../constants/Colors';
import GlobalStyle from '../constants/GlobalStyle';

import Button from '../components/Button';
import Header from '../components/Header';
import ListCell from '../components/ListCell';

import I18n from 'react-native-i18n'
import Languages from '../constants/Languages';
I18n.fallbacks = true
I18n.translations = Languages

class SettingsImport extends React.Component {
  static route = {
    navigationBar: {
      title(params) {
        if (typeof params.title === 'undefined') {
          return I18n.t('importData');
        }
        return params.title;
       },
      backgroundColor: Colors.navigationBarBackground,
      tintColor: Colors.navigationBarTint,
      titleStyle: {"color": Colors.textDark, "fontWeight": "bold"}
    },
  }

  render() {
		const {
			settings,
			midata
		} = this.props

    return (
			<View style={GlobalStyle.mainContainer}>
				<Header title={I18n.t('import')} />
				{midata.authToken == null ? <MidataLogin /> : <SettingsImportScreen />}
			</View>
    );
  }

}

const mapStateToProps = (state) => {
    return {
			settings: state.settings,
			midata: state.midata
    }
}

export default connect(mapStateToProps, null)(SettingsImport);
