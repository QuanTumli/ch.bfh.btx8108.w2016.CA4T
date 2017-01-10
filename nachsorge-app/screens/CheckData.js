import React from 'react';
import {
  DatePickerIOS,
  ScrollView,
  StyleSheet,
	TouchableOpacity,
	Text,
  View
} from 'react-native';

import { connect } from 'react-redux'

import Colors from '../constants/Colors';
import GlobalStyle from '../constants/GlobalStyle';
import Router from '../navigation/Router';

import InfoButton from '../components/InfoButton';
import Button from '../components/Button';
import Header from '../components/Header';
import DetailRow from '../components/DetailRow';

import { getReadableDateLong } from '../utilities/dateHelper'

import I18n from 'react-native-i18n'
import Languages from '../constants/Languages';
I18n.fallbacks = true
I18n.translations = Languages

class CheckData extends React.Component {
  static route = {
    navigationBar: {
      title(params) {
        if (typeof params.title === 'undefined') {
          return I18n.t('checkDataTitle');
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
			schemes
		} = this.props
    
		const opDateString = getReadableDateLong(new Date(settings.opDate))
    
    return (
      <View style={GlobalStyle.mainContainer}>
        <ScrollView
          style={GlobalStyle.scrollContainer}>

          <Header title={I18n.t('checkDataHeader')} />
					
					<DetailRow
						title={I18n.t('selectAfflictionTitle') + ":"}
						text={schemes[settings.affliction].names[I18n.locale]}
					/>
					
					<DetailRow
						title={I18n.t('selectSchemeTitle') + ":"}
						text={settings.schema.names[I18n.locale]}
					/>
					
					<DetailRow
						title={I18n.t('selectOpTitle') + ":"}
						text={opDateString}
					/>
          
          <DetailRow
						title={I18n.t('selectKoloskopieTitle') + ":"}
						text={settings.koloskopie ? I18n.t('yes') : I18n.t('no')}
					/>

          <Button
            onPress={this._clickNext}>
            {I18n.t('next')}
          </Button>

        </ScrollView>

      </View>

    );
  }

  _clickNext = () => {
		this.props.navigator.push(Router.getRoute('datenschutzHaftung'));
  };

}

const styles = StyleSheet.create({

});

const mapStateToProps = (state) => {
    return {
			schemes: state.schemes,
			settings: state.settings
    }
};

export default connect(mapStateToProps, null)(CheckData);
