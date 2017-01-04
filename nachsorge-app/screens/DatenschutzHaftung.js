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
import { updateSchemaIsLoaded, calculateMeetingsFromScheme } from '../actions'

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

class DatenschutzHaftung extends React.Component {
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
		
    return (
      <View style={GlobalStyle.mainContainer}>
        <ScrollView
          style={GlobalStyle.scrollContainer}>

          <Header title={I18n.t('datenschutzHaftungTitle')} />
					
					<Text>
						Datenschutz- & Haftungserklärung bla bla bla bla bla...
					</Text>
					
					<Text>
						Indem Sie auf Speichern klicken, akzeptierien Sie die obenstehende
						Datenschutz- & Haftungserklärung.
					</Text>

          <Button
            onPress={this._clickNext}>
            {I18n.t('save')}
          </Button>

        </ScrollView>

        <InfoButton />

      </View>

    );
  }

  _clickNext = () => {
		this.props.updateSchemaIsLoaded(true);
    this.props.calculateMeetingsFromScheme(this.props.settings.schema, this.props.settings.opDate);
  	this.props.navigator.popToTop();
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

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    updateSchemaIsLoaded: updateSchemaIsLoaded,
		calculateMeetingsFromScheme: calculateMeetingsFromScheme
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DatenschutzHaftung);
