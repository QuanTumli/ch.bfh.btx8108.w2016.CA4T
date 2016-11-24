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

export default class Settings extends React.Component {
  static route = {
    navigationBar: {
      title(params) {
        return I18n.t('settings');
       },
    },
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

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
    console.log("Sprache pressed");
    this.props.navigator.push(Router.getRoute('settingsLanguage'));
  }

  _handlePressImport = () => {
    console.log("Import pressed");
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
  tableEntryTextRight: {
    fontSize: 20,
    fontWeight: 'normal',
    color: Colors.textMiddle,
  },
});
