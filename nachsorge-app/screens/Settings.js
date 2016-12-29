import React from 'react';
import {
	Alert,
  ScrollView,
  StyleSheet,
	TouchableOpacity,
	Text,
	View
} from 'react-native';

import {
  FontAwesome,
} from '@exponent/vector-icons';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { resetSchemeSettings, resetStore } from '../actions'

import Colors from '../constants/Colors';
import GlobalStyle from '../constants/GlobalStyle';
import Router from '../navigation/Router';

import Button from '../components/Button';

import I18n from 'react-native-i18n'
import Languages from '../constants/Languages';

I18n.fallbacks = true
I18n.translations = Languages

class Settings extends React.Component {
  static route = {
    navigationBar: {
      title(params) {
        return I18n.t('settings');
       },
       backgroundColor: Colors.navigationBarBackground,
       tintColor: Colors.navigationBarTint,
       titleStyle: {"color": Colors.textDark, "fontWeight": "bold"}
    },
  }

  render() {
		const {
			settings,
			schemes
		} = this.props
		
    return (
      <ScrollView
        style={[GlobalStyle.mainContainer, GlobalStyle.scrollContainer]}>

        <Text style={styles.tableHeaderText}>{I18n.t('settings').toUpperCase()}</Text>

				{/* Table Entry for Sprache */}
				<TouchableOpacity
					onPress={this._handlePressSprache}
					style={[styles.tableEntry, styles.tableEntryLast]}>
					<Text style={styles.tableEntryTextLeft}>
						{I18n.t('language')}
					</Text>
          <Text style={styles.tableEntryTextRight}>
						{I18n.t(I18n.locale) + " "}
            <FontAwesome
              name="chevron-right"
              size={15} />
					</Text>
				</TouchableOpacity>
				
				<Text style={styles.tableHeaderText}>{I18n.t('selectAfflictionTitle').toUpperCase()}</Text>
				
				{/* Table Entry */}
				<View
					style={styles.tableEntry}>
					<Text style={styles.tableEntryTextLeft}>
						{I18n.t('selectAfflictionTitle')}
					</Text>
          <Text style={styles.tableEntryTextRight}>
						{settings.affliction ? schemes[settings.affliction].names.de : '-'}
					</Text>
				</View>
				
				{/* Table Entry */}
				<View
					style={styles.tableEntry}>
					<Text style={styles.tableEntryTextLeft}>
						{I18n.t('selectSchemeTitle')}
					</Text>
          <Text style={styles.tableEntryTextRight}>
						{settings.schema ? settings.schema.names.de : '-'}
					</Text>
				</View>
				
				{/* Table Entry */}
				<View
					style={styles.tableEntry}>
					<Text style={styles.tableEntryTextLeft}>
						{I18n.t('selectOpTitle')}
					</Text>
          <Text style={styles.tableEntryTextRight}>
						{settings.opDate ? settings.opDate : '-'}
					</Text>
				</View>
        
        {/* Table Entry */}
				<TouchableOpacity
					onPress={this._handlePressResetSchema}
					style={[styles.tableEntry, styles.tableEntryLast]}>
					<Text style={[styles.tableEntryTextLeft, styles.italic]}>
						{I18n.t('resetSchemeSettings')}
					</Text>
          <Text style={styles.tableEntryTextRight}>
						<FontAwesome
              name="chevron-right"
              size={15} />
					</Text>
				</TouchableOpacity>
				
				<Text style={styles.tableHeaderText}>{I18n.t('resetAllSettings').toUpperCase()}</Text>
				
				{/* Table Entry */}
				<TouchableOpacity
					onPress={this._handlePressResetAllSettings}
					style={[styles.tableEntry, styles.tableEntryLast]}>
					<Text style={[styles.tableEntryTextLeft, styles.italic]}>
						{I18n.t('resetAllSettings')}
					</Text>
          <Text style={styles.tableEntryTextRight}>
						<FontAwesome
              name="chevron-right"
              size={15} />
					</Text>
				</TouchableOpacity>

      </ScrollView>
    );
  }

	_handlePressSprache = () => {
    this.props.navigator.push(Router.getRoute('settingsLanguage'));
  }

  _handlePressImport = () => {
    console.log("Import pressed");
  }
	
	_handlePressResetSchema = () => Alert.alert(
		I18n.t('resetSchemeSettings'),
		I18n.t('resetSchemeSettingsAlertMessage'),
		[
			{text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
			{text: 'OK', onPress: () => this.props.resetSchemeSettings()},
		]
	)
	
	_handlePressResetAllSettings = () => Alert.alert(
		I18n.t('resetAllSettings'),
		I18n.t('resetAllSettingsAlertMessage'),
		[
			{text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},
			{text: 'OK', onPress: () => this.props.resetAllSettings()},
		]
	)

}

const styles = StyleSheet.create({
  tableHeaderText: {
    fontSize: 16,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 5,
    color: Colors.textMiddle,

  },
  tableFooterText: {
    fontSize: 14,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 10,
    color: Colors.textMiddle,

  },
  tableEntry: {
    backgroundColor: Colors.light,
    flex: 1,
    borderTopColor: Colors.tableBorder,
    borderTopWidth: 1,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
	tableEntryLast: {
    borderBottomColor: Colors.tableBorder,
    borderBottomWidth: 1,
  },
	tableEntryTextLeft: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'normal',
    color: Colors.textDark,
  },
  tableEntryTextRight: {
    fontSize: 20,
    fontWeight: 'normal',
    color: Colors.textMiddle,
  },
	italic: {
		fontStyle: 'italic'
	}
});

const mapStateToProps = (state) => {
    return {
      settings: state.settings,
			schemes: state.schemes
    }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    resetSchemeSettings: resetSchemeSettings,
		resetAllSettings: resetStore
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);