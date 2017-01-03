import React from 'react';
import {
	ActivityIndicator,
  ScrollView,
  StyleSheet,
	TouchableOpacity,
	Text,
  View
} from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { midataLogin } from '../actions'

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

class MidataLogin extends React.Component {
  static route = {
    navigationBar: {
      title(params) {
        if (typeof params.title === 'undefined') {
          return I18n.t('meetings');
        }
        return params.title;
       },
      backgroundColor: Colors.navigationBarBackground,
      tintColor: Colors.navigationBarTint,
      titleStyle: {"color": Colors.textDark, "fontWeight": "bold"}
    },
  }
	
	_renderLoadingSpinner() {
		return (
			<ActivityIndicator
        animating={true}
        style={{height: 80}}
        size="large"
				color={Colors.navigationBarTint}
      />
		)
	}

  render() {
		const {
			settings,
			midata,
			midataLogin
		} = this.props
    return (
      <View style={GlobalStyle.mainContainer}>
        <ScrollView
          style={GlobalStyle.scrollContainer}>	
					<Header title={I18n.t('midataLoginText')} />
					<Button
						active={!midata.loading}
						onPress={() => midataLogin()}>
						{I18n.t('midataLogin')}
					</Button>
					{midata.loading && this._renderLoadingSpinner()}

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
			settings: state.settings,
			midata: state.midata
    }
}
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    midataLogin: midataLogin
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MidataLogin);
