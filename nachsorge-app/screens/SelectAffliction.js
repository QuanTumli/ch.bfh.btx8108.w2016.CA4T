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
import { updateAffliction } from '../actions'

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

class SelectAffliction extends React.Component {
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

  render() {
		const {
			schemes
		} = this.props
		var buttons = [];
		var that = this
		Object.keys(schemes).forEach(function(key, index) {
		  buttons.push(<Button
				key={key}
				onPress={() => that._click(key)}>
				{this[key].names.de}
			</Button>)
		}, schemes);
		
    return (
      <View style={GlobalStyle.mainContainer}>
        <ScrollView
          style={GlobalStyle.scrollContainer}>

          <Header title={I18n.t('selectAfflictionHeader')} />
					
					{buttons}

        </ScrollView>

        <InfoButton />

      </View>

    );
  }

  _click = (affliction) => {
		this.props.updateAffliction(affliction);
		this.props.navigator.push(Router.getRoute('scheme'));
  }

}

const styles = StyleSheet.create({

});

const mapStateToProps = (state) => {
    return {
      schemes: state.schemes
    }
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    updateAffliction: updateAffliction
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectAffliction);