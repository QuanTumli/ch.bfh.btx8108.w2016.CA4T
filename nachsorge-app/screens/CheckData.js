import React from 'react';
import {
  ScrollView,
  StyleSheet,
	TouchableOpacity,
	Text,
  View,
  DatePickerIOS
} from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Colors from '../constants/Colors';
import GlobalStyle from '../constants/GlobalStyle';
import Router from '../navigation/Router';

import InfoButton from '../components/InfoButton';
import Button from '../components/Button';
import Header from '../components/Header';
import DetailRow from '../components/DetailRow';

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
    
		const date = new Date(settings.opDate);
		const opDateString =  ("0" + date.getDate()).slice(-2) + "." + ("0" + (date.getMonth()+1)).slice(-2) + "." 
			+ date.getFullYear();
    
    return (
      <View style={GlobalStyle.mainContainer}>
        <ScrollView
          style={GlobalStyle.scrollContainer}>

          <Header title={I18n.t('checkDataHeader')} />
					
					<DetailRow
						title={I18n.t('selectAfflictionTitle') + ":"}
						text={schemes[settings.affliction].names.de}
					/>
					
					<DetailRow
						title={I18n.t('selectSchemeTitle') + ":"}
						text={settings.schema.names.de}
					/>
					
					<DetailRow
						title={I18n.t('selectOpTitle') + ":"}
						text={opDateString}
					/>

          <Button
            onPress={this._clickNext}>
            {I18n.t('next')}
          </Button>

        </ScrollView>

        <InfoButton />

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
