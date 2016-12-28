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
import { updateSchemaIsLoaded } from '../actions'

import Colors from '../constants/Colors';
import GlobalStyle from '../constants/GlobalStyle';
import Router from '../navigation/Router';

import InfoButton from '../components/InfoButton';
import Button from '../components/Button';
import Header from '../components/Header';

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
    console.log("in check");
		const { 
			settings,
			schemes
		} = this.props
		
		
    return (
      <View style={GlobalStyle.mainContainer}>
        <ScrollView
          style={GlobalStyle.scrollContainer}>

          <Header title={I18n.t('checkDataHeader')} />
					
					<View> 
						<Text style={styles.title}>
							{I18n.t('selectAfflictionTitle')}
						</Text>
						<Text style={styles.text}>
							{schemes[settings.affliction].names.de}
						</Text>
					</View>
					
					<View> 
						<Text style={styles.title}>
							{I18n.t('selectSchemeTitle')}
						</Text>
						<Text style={styles.text}>
							{settings.schema.names.de}
						</Text>
					</View>
					
					<View> 
						<Text style={styles.title}>
							{I18n.t('selectOpTitle')}
						</Text>
						<Text style={styles.text}>
							{settings.opDate}
						</Text>
					</View>

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
		this.props.updateSchemaIsLoaded(true);
  	this.props.navigator.popToTop();
  };

}

const styles = StyleSheet.create({
  title: {
		marginTop: 10,
		paddingTop: 5,
		paddingBottom: 5,
    fontSize: 30,
		textAlign: 'center',
    backgroundColor: Colors.navigationBarBackground
  },
  text: {
		marginTop: 10,
    fontSize: 24,
		textAlign: 'center'
  }
});

const mapStateToProps = (state) => {
    return {
			schemes: state.schemes,
			settings: state.settings
    }
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    updateSchemaIsLoaded: updateSchemaIsLoaded
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckData);
