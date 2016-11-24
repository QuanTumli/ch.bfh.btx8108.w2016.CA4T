import React from 'react';
import {
  ScrollView,
  StyleSheet,
	TouchableOpacity,
	Text
} from 'react-native';

import {
  FontAwesome,
} from '@exponent/vector-icons';

import Colors from '../constants/Colors';
import Router from '../navigation/Router';

import I18n from 'react-native-i18n'
import Languages from '../constants/Languages';
import Database from '../constants/Database';

I18n.fallbacks = true
I18n.translations = Languages

export default class SettingsLanguage extends React.Component {
  static route = {
    navigationBar: {
      title(params) {
        if (typeof params.title === 'undefined') {
          return I18n.t('language');
        }
        return params.title;
       },
    },
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

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

      </ScrollView>
    );
  }

	_changeLanguage = (language) => () => {
    console.log("Sprache pressed: ", language);
    I18n.locale = language;
    this.forceUpdate();
    this.props.navigator.updateCurrentRouteParams({
      title: I18n.t('language')
    })
    Database.settings.update({key: "language"}, {value: language}, function(updated_table){
      console.log(updated_table);
    })
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: Colors.containerBackground
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
  tableEntryActivated: {
    fontSize: 20,
    fontWeight: 'normal',
    color: Colors.textDark,
  },
});
