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
import GlobalStyle from '../constants/GlobalStyle';
import Router from '../navigation/Router';

import I18n from 'react-native-i18n'
import Languages from '../constants/Languages';
import Database from '../constants/Database';

I18n.fallbacks = true
I18n.translations = Languages

export default class Settings extends React.Component {
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

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView
        style={[GlobalStyle.mainContainer, GlobalStyle.scrollContainer]}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

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

      </ScrollView>
    );
  }

	_handlePressSprache = () => {
    this.props.navigator.push(Router.getRoute('settingsLanguage'));
  }

  _handlePressImport = () => {
    console.log("Import pressed");
  }

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
});
