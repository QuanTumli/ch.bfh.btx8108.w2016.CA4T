import React from 'react'
import {
	ActivityIndicator,
  ScrollView,
  StyleSheet,
	Text,
	TextInput,
	View
} from 'react-native'

import CryptoJS from "crypto-js";

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { midataLogout, midataExportData } from '../actions'

import Colors from '../constants/Colors';
import GlobalStyle from '../constants/GlobalStyle';

import Button from '../components/Button';
import Header from '../components/Header';
import DetailRowInputPw from '../components/DetailRowInputPw'


import I18n from 'react-native-i18n'
import Languages from '../constants/Languages';

I18n.fallbacks = true
I18n.translations = Languages

class SettingsExportScreen extends React.Component {
  static route = {
    navigationBar: {
      title(params) {
        if (typeof params.title === 'undefined') {
          return I18n.t('export');
        }
        return params.title;
       },
       backgroundColor: Colors.navigationBarBackground,
       tintColor: Colors.navigationBarTint,
       titleStyle: {"color": Colors.textDark, "fontWeight": "bold"}
    }
  }

	constructor(props) {
    super(props);
  }

	state = {
		password: 'pw',
		ciphertext: null
	}

  _clickCreateEncText = () => {
		if(this.state.password == null || this.state.password == ''){
			console.log("please enter a password")
			return;
		}
		const {
			midata,
		  meetings,
		  settings,
		  schemes,
		  doctors
		} = this.props

		const exportQR = {
		  meetings,
		  settings,
		  schemes,
		  doctors
		}

		// Encrypt
		var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(exportQR), this.state.password);
		this.setState({ciphertext: ciphertext.toString()})
		this.props.midataExportData(ciphertext.toString(), midata.authToken)
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
			midata
		} = this.props
		// Decrypt
		//var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
		//var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
		//console.log(ciphertext.toString());
		return (

      <ScrollView
        style={[GlobalStyle.mainContainer, GlobalStyle.scrollContainer]}>

				<Header title={I18n.t('encryptData')} />

				<DetailRowInputPw
					title={I18n.t('password') + ":"}
					text={this.state.password}
					onChangeText={(password) => this.setState({password})}
				/>

				<Button
					onPress={() => this._clickCreateEncText()}>
					{I18n.t('export')}
				</Button>

				{midata.loading && this._renderLoadingSpinner()}

				{midata.exportSent && <Text style={styles.text}>Exported...</Text>}

				<Button
					onPress={() => this.props.midataLogout()}
					small={true}
					>
					{I18n.t('midataLogout')}
				</Button>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	textinput: {
    fontSize: 24,
    marginHorizontal: 20,
		paddingHorizontal: 5,
		height: 40,
		borderColor: 'gray',
		borderWidth: 1
  },
	text: {
    marginHorizontal: 20,
    fontSize: 20,
    paddingVertical: 10
  }
});

const mapStateToProps = (state) => {
    return {
      midata: state.midata,
		  meetings: state.meetings,
		  settings: state.settings,
		  schemes: state.schemes,
		  doctors: state.doctors
    }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    midataLogout: midataLogout,
		midataExportData: midataExportData
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsExportScreen);
