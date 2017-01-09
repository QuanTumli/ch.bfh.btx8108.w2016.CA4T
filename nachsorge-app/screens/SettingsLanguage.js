import React from 'react'
import {
  ScrollView,
  StyleSheet,
	TouchableOpacity,
	Text
} from 'react-native'

import {
  FontAwesome,
} from '@exponent/vector-icons'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateLanguage } from '../actions'

import Colors from '../constants/Colors';
import GlobalStyle from '../constants/GlobalStyle';
import Router from '../navigation/Router';

import I18n from 'react-native-i18n'
import Languages from '../constants/Languages';

I18n.fallbacks = true
I18n.translations = Languages

class SettingsLanguage extends React.Component {
  static route = {
    navigationBar: {
      title(params) {
        if (typeof params.title === 'undefined') {
          return I18n.t('language');
        }
        return params.title;
       },
       backgroundColor: Colors.navigationBarBackground,
       tintColor: Colors.navigationBarTint,
       titleStyle: {"color": Colors.textDark, "fontWeight": "bold"}
    }
  }
  
  _changeLanguage = (language) => () => {
    I18n.locale = language;
    this.props.navigator.updateCurrentRouteParams({
      title: I18n.t('language')
    })
    this.props.updateLanguage(language)
  }

  render() {
		const {
			settings
		} = this.props
		
		return (
      <ScrollView
        style={[GlobalStyle.mainContainer, GlobalStyle.scrollContainer]}>

        <Text style={styles.tableHeaderText}>{I18n.t('language').toUpperCase()}</Text>

				{/* Table Entry for Sprache Deutsch */}
				<TouchableOpacity
          language="de"
					onPress={this._changeLanguage("de")}
					style={styles.tableEntry}>
					<Text style={styles.tableEntryTextLeft}>
						{I18n.t('de')}
					</Text>
          <Text style={styles.tableEntryActivated}>
            {I18n.locale == 'de' &&
            <FontAwesome
              name="check"
              size={15}/>
            }
					</Text>
				</TouchableOpacity>

        {/* Table Entry for Sprache Egnlisch */}
				<TouchableOpacity
					onPress={this._changeLanguage("en")}
					style={styles.tableEntry}>
					<Text style={styles.tableEntryTextLeft}>
						{I18n.t('en')}
					</Text>
          <Text style={styles.tableEntryActivated}>
            {I18n.locale == 'en' &&
            <FontAwesome
              name="check"
              size={15}/>
            }
					</Text>
				</TouchableOpacity>

        {/* Table Entry for Sprache Französisch */}
				<TouchableOpacity
					onPress={this._changeLanguage("fr")}
					style={[styles.tableEntry, styles.tableEntryLast]}>
					<Text style={styles.tableEntryTextLeft}>
						{I18n.t('fr')}
					</Text>
          <Text style={styles.tableEntryActivated}>
            {I18n.locale == 'fr' &&
            <FontAwesome
              name="check"
              size={15}/>
            }
					</Text>
				</TouchableOpacity>

        <Text style={styles.tableFooterText}>{I18n.t('settingsLanguageFooter')}</Text>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  tableHeaderText: {
    fontSize: 16,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 5,
    color: Colors.textMiddle
  },
  tableFooterText: {
    fontSize: 14,
    paddingLeft: 15,
    paddingTop: 5,
    paddingBottom: 10,
    color: Colors.textMiddle
  },
	tableEntry: {
    backgroundColor: Colors.light,
    flex: 1,
    borderTopColor: Colors.tableBorder,
    borderTopWidth: 1,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center'
  },
  tableEntryLast: {
    borderBottomColor: Colors.tableBorder,
    borderBottomWidth: 1
  },
	tableEntryTextLeft: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'normal',
    color: Colors.textDark
  },
  tableEntryActivated: {
    fontSize: 20,
    fontWeight: 'normal',
    color: Colors.textDark
  }
});

const mapStateToProps = (state) => {
    return {
      settings: state.settings
    }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    updateLanguage: updateLanguage
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsLanguage);