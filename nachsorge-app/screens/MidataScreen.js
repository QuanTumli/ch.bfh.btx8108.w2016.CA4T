import React from 'react';
import {
	ActivityIndicator,
  ScrollView,
  StyleSheet,
	TouchableOpacity,
	Text,
	TextInput,
  View
} from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { midataLogout, midataPutTemperature } from '../actions'

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

class MidataScreen extends React.Component {
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
	
	constructor(props) {
    super(props);
    this.state = { temp: 38 };
  }

  render() {
		const {
			settings,
			midata,
			midataLogout,
			midataPutTemperature
		} = this.props
		console.log(midata)
    return (
      <View style={GlobalStyle.mainContainer}>
        <ScrollView
          style={GlobalStyle.scrollContainer}>	
					<Header title={I18n.t('midata')} />
					<Button
						onPress={() => midataLogout()}>
						{I18n.t('midataLogout')}
					</Button>
					<TextInput
		        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
						onChangeText={(temp) => this.setState({temp})}
		        value={this.state.temp.toString()}
						keyboardType='numeric'
						maxLength={2}
		      />
					<Button
						active={false}
						onPress={() => midataPutTemperature(this.state.temp)}>
						{I18n.t('midataSend')}
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
			settings: state.settings,
			midata: state.midata
    }
}
const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    midataLogout: midataLogout,
		midataPutTemperature: midataPutTemperature
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MidataScreen);
