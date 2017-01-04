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
import { midataLogout, midataPutTemperature, midataGetLast3Temperatures } from '../actions'

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
	
	componentWillMount() {
		this.props.midataGetLast3Temperatures(this.props.midata.authToken)
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
			midataLogout,
			midataPutTemperature
		} = this.props
		
    return (
      <View style={GlobalStyle.mainContainer}>
        <ScrollView
          style={GlobalStyle.scrollContainer}>	
					<Header title={I18n.t('midata')} />
					<Text
						style={styles.label}
						>
						{I18n.t('temperature')}
					</Text>
					<TextInput
		        style={styles.textInput}
						onChangeText={(temp) => this.setState({temp})}
		        value={this.state.temp.toString()}
						keyboardType='numeric'
						maxLength={4}
		      />
					<Button
						active={!midata.loading}
						onPress={() => midataPutTemperature(this.state.temp, midata.authToken)}
						small={true}
						>
						{I18n.t('midataSend')}
					</Button>
					
					{midata.loading && this._renderLoadingSpinner()}
					
					<Header title={I18n.t('last3Values')} />
					{midata.temperatures.map((entry, i) => {
						const date = new Date(entry.date);
						const dateString =  ("0" + date.getDate()).slice(-2) + "." + ("0" + (date.getMonth()+1)).slice(-2) + "." 
							+ date.getFullYear().toString().substr(2,2) + " " 
							+ ("0" + date.getHours()).slice(-2) + ":"
							+ ("0" + date.getMinutes()).slice(-2) + ":"
							+ ("0" + date.getSeconds()).slice(-2);
						return (
							<DetailRow key={i}
								title={dateString}
								text={entry.value.toString() + "°"}
							/>
							)
					})}
					
					<Button
						onPress={() => midataLogout()}
						small={true}
						>
						{I18n.t('midataLogout')}
					</Button>

        </ScrollView>

      </View>

    );
  }

}


const styles = StyleSheet.create({
	label: {
		marginHorizontal: 20,
		fontSize: 20,
	},
	textInput: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginHorizontal: 20,
		paddingHorizontal: 5
	}
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
		midataPutTemperature: midataPutTemperature,
		midataGetLast3Temperatures: midataGetLast3Temperatures
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MidataScreen);
