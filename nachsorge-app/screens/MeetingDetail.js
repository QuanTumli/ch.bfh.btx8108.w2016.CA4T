import React from 'react';
import {
	DatePickerIOS,
	Platform,
  ScrollView,
  StyleSheet,
	TouchableOpacity,
	Text,
  View
} from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateAppointedDate } from '../actions'

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
	
	state = {
		inEditMode: false,
		date: new Date(this.props.route.params.meeting.dateCalculated),
		timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
		actualMeeting: this.props.route.params.meeting,
	}

  onDateChange = (date) => {
    this.setState({date: date})
  }

  onTimezoneChange = (event) => {
    var offset = parseInt(event.nativeEvent.text, 10);
    if (isNaN(offset)) {
      return;
    }
    this.setState({timeZoneOffsetInHours: offset});
  }

  showPicker = async (stateKey, options) => {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action !== DatePickerAndroid.dismissedAction) {
        var date = new Date(year, month, day+1);
        this.onDateChange(date);
      }
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };

  render() {
		
		const date = this.state.inEditMode ? 
			new Date(this.state.actualMeeting.dateCalculated) :
			this.state.date;
    const meetingString =  ("0" + date.getDate()).slice(-2) + "." + 
			("0" + (date.getMonth()+1)).slice(-2) + "."
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
            {this.state.actualMeeting.titles.de}
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
					
					{this.state.inEditMode && this._renderDatePicker()}

          <Button
            onPress={this._clickChange}>
            Ändern
          </Button>

        </ScrollView>

        <InfoButton />

      </View>

    );
  }
	
	_renderDatePicker() {
		return (
			<View>
				{Platform.OS === 'ios' && <DatePickerIOS
						date={this.state.date}
						mode="date"
						timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
						onDateChange={this.onDateChange}/>
				}

				{Platform.OS === 'android' && <View><TouchableWithoutFeedback
						onPress={this.showPicker.bind(this, 'preset', {date: this.state.date})}>
											<Button
												onPress={this.showPicker}>
												{I18n.t('chooseDate')}
											</Button>
						</TouchableWithoutFeedback>
						<CustomText text={I18n.t('chosenDate')}></CustomText>
						<CustomText text={this.state.date.toISOString().substring(0, 10)}></CustomText>
					</View>
				}
			</View>
		)
	}

  _clickChange = () => {
		this.setState({ inEditMode: !this.state.inEditMode })
		this.props.updateAppointedDate(this.state.actualMeeting.id, this.state.date)
  	//this.props.navigator.push(Router.getRoute('meetingFind'));
  }
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
			meetings: state.meetings
    }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    updateAppointedDate: updateAppointedDate
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MeetingDetail);
