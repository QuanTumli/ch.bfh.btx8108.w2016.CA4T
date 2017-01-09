import React from 'react';
import {
  ScrollView,
  StyleSheet,
	TouchableOpacity,
	Text,
  View,
} from 'react-native';

import {
  FontAwesome,
} from '@exponent/vector-icons';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateKoloskopie } from '../actions'

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

class SelectKoloskopie extends React.Component {
  static route = {
    navigationBar: {
      title(params) {
        if (typeof params.title === 'undefined') {
          return I18n.t('selectAfflictionTitle');
        }
        return params.title;
       },
      backgroundColor: Colors.navigationBarBackground,
      tintColor: Colors.navigationBarTint,
      titleStyle: {"color": Colors.textDark, "fontWeight": "bold"}
    },
  }
  
  _click = (koloskopie) => {
    this.props.updateKoloskopie(koloskopie);
		this.props.navigator.push(Router.getRoute('checkData'));
  }

  render() {
		const {
			schemes
		} = this.props

    return (
      <View style={GlobalStyle.mainContainer}>
        <ScrollView
          style={GlobalStyle.scrollContainer}>

          <Header title={I18n.t('selectKoloskopieHeader')} />

					<Button
						onPress={() => this._click(true)}>
						{I18n.t('yes')}
					</Button>
					<Button
						onPress={() => this._click(false)}>
						{I18n.t('no')}
					</Button>

        </ScrollView>

        <InfoButton />

      </View>

    );
  }
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
    updateKoloskopie: updateKoloskopie
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectKoloskopie);
