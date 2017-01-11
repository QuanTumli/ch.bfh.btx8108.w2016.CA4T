import React from 'react'
import {
	ActivityIndicator,
  ScrollView,
  StyleSheet,
	Text,
	TextInput,
	View
} from 'react-native'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { midataLogout, midataImportData } from '../actions'

import Colors from '../constants/Colors';
import GlobalStyle from '../constants/GlobalStyle';

import Button from '../components/Button';
import Header from '../components/Header';
import DetailRowInput from '../components/DetailRowInput'

import I18n from 'react-native-i18n'
import Languages from '../constants/Languages';

I18n.fallbacks = true
I18n.translations = Languages

class SettingsImportScreen extends React.Component {
  static route = {
    navigationBar: {
      title(params) {
        if (typeof params.title === 'undefined') {
          return I18n.t('importData');
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

  _clickDecrypt = () => {
    console.log("clicked import")
		if(this.state.password == null || this.state.password == ''){
			console.log("please enter a password")
			return;
		}
		
		this.props.midataImportData(this.state.password, this.props.midata.authToken)
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
		
		return (
			
      <ScrollView
        style={[GlobalStyle.mainContainer, GlobalStyle.scrollContainer]}>
        
				<Header title={I18n.t('decryptData')} />
				
				<DetailRowInput
					title={I18n.t('password') + ":"}
					text={this.state.password}
					onChangeText={(password) => this.setState({password})}
				/>
				
				<Button
					onPress={() => this._clickDecrypt()}>
					{I18n.t('decryptData')}
				</Button>
				
				{midata.loading && this._renderLoadingSpinner()}
				
				{midata.exportSent && <Text>Exported...</Text>}
				
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
	ciphertext: {
		height: 200,
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
		midataImportData: midataImportData
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsImportScreen);