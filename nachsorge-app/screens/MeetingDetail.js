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

class MeetingDetail extends React.Component {
  static route = {
    navigationBar: {
      title(params) {
        if (typeof params.title === 'undefined') {
          return I18n.t('meetingDetailHeader');
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

    const date = new Date(this.props.route.params.meeting.date);
    const meetingString =  ("0" + date.getDate()).slice(-2) + "." + ("0" + (date.getMonth()+1)).slice(-2) + "."
      + date.getFullYear();
    return (
      <View style={GlobalStyle.mainContainer}>
        <ScrollView
          style={GlobalStyle.scrollContainer}>


					<View>
						<Text style={styles.title}>
							{I18n.t('meetingDetailWhat')}:
						</Text>
						<Text style={styles.text}>
            {this.props.route.params.meeting.titles.de}
						</Text>
					</View>

					<View>
						<Text style={styles.title}>
							{I18n.t('meetingDetailWhen')}:
						</Text>
						<Text style={styles.text}>
            {meetingString}
						</Text>
					</View>


          <Button
            onPress={this._clickChange}>
            Ändern
          </Button>

        </ScrollView>

        <InfoButton />

      </View>

    );
  }

  _clickChange = () => {
  	this.props.navigator.push(Router.getRoute('meetingFind'));
  };

}

const styles = StyleSheet.create({
  title: {
		marginTop: 10,
		paddingTop: 5,
		paddingBottom: 5,
    paddingLeft: 20,
		paddingRight: 20,
    fontSize: 30,
		fontWeight: 'bold'
  },
  text: {
    fontSize: 24,
    paddingLeft: 40,
		paddingRight: 20
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

export default connect(mapStateToProps, mapDispatchToProps)(MeetingDetail);
