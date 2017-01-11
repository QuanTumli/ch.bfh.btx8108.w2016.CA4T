import React from 'react';
import {
  ScrollView,
  StyleSheet,
	TouchableOpacity,
	Text,
  View
} from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateSchema } from '../actions'

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

class Scheme extends React.Component {
  static route = {
    navigationBar: {
      title(params) {
        if (typeof params.title === 'undefined') {
          return I18n.t('selectSchemeTitle');
        }
        return params.title;
       },
      backgroundColor: Colors.navigationBarBackground,
      tintColor: Colors.navigationBarTint,
      titleStyle: {"color": Colors.textDark, "fontWeight": "bold"}
    }
  }
  
  _clickScheme = (schema) => {
    this.props.updateSchema(schema);
    this.props.navigator.push(Router.getRoute('selectOpDate'));
  };

  render() {
		const { 
			schemes,
		 	settings
		} = this.props
		
    return (
      <View style={GlobalStyle.mainContainer}>
        <ScrollView
          style={GlobalStyle.scrollContainer}>

          <Header title={I18n.t('selectSchemeHeader')} />

          {schemes[settings.affliction].schemes.map((scheme, i) => {
              return (
                <Button
                  onPress={() => this._clickScheme(scheme)}
                  key={i}>
                  {scheme.names[I18n.locale]}
                </Button>
              )
            })
          }

        </ScrollView>

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
    updateSchema: updateSchema
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Scheme);