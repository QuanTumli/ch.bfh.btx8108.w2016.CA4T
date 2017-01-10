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
import { updateAppointedDate, updateMeetingCompleted } from '../actions'

import Colors from '../constants/Colors';
import GlobalStyle from '../constants/GlobalStyle';
import Router from '../navigation/Router';

import InfoButton from '../components/InfoButton';
import Button from '../components/Button';
import Header from '../components/Header';

import { getReadableDateLong, getMonthNameAndYear } from '../utilities/dateHelper'

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
		date: this.props.route.params.meeting.dateAppointed ? 
			new Date(this.props.route.params.meeting.dateAppointed) :
			new Date(this.props.route.params.meeting.dateCalculated),
		dateFromProps: this.props.route.params.meeting.dateAppointed ? 
			new Date(this.props.route.params.meeting.dateAppointed) :
			new Date(this.props.route.params.meeting.dateCalculated),
		timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
		actualMeeting: this.props.route.params.meeting,
		completed: this.props.route.params.meeting.meetingsCompleted,
		appointed: (this.props.route.params.meeting.dateAppointed && 
			!this.props.route.params.meeting.meetingsCompleted) ? true : false
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
		var date, buttonString
		if(this.state.actualMeeting.meetingsCompleted){
			date = new Date(this.state.actualMeeting.dateAppointed)
			buttonString = null
		}else {
			date = new Date(this.state.dateFromProps)
			buttonString = this.state.inEditMode ? I18n.t('save') : I18n.t('edit')
		}
		var meetingDateString = getReadableDateLong(date)
		if(!this.state.appointed && !this.state.completed){
			meetingDateString = getMonthNameAndYear(date, I18n.locale)
		}
		
    return (
      <View style={GlobalStyle.mainContainer}>
        <ScrollView
          style={GlobalStyle.scrollContainer}>
					<View>
						<Text style={styles.title}>
							{I18n.t('meetingDetailWhat')}:
						</Text>
						<Text style={styles.text}>
            {this.state.actualMeeting.titles[I18n.locale]}
						</Text>
					</View>

					<View>
						<Text style={styles.title}>
							{I18n.t('meetingDetailWhen')}:
						</Text>
						<Text style={styles.text}>
            {meetingDateString}
						</Text>
					</View>
					
					{this.state.inEditMode && this._renderDatePicker()}
					
					{!this.state.completed &&
	          <Button
	            onPress={this._clickSave}>
	            {this.state.inEditMode ? I18n.t('save') : I18n.t('edit')}
	          </Button>
					}
					
					{(this.state.appointed && !this.state.completed)  &&
						<Button
	            onPress={this._clickCompleted}>
	            {I18n.t('complete')}
	          </Button>
					}
        </ScrollView>
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

  _clickSave = () => {
		this.setState({ inEditMode: !this.state.inEditMode, dateFromProps: this.state.date, appointed: this.state.inEditMode })
		this.props.updateAppointedDate(this.state.actualMeeting.id, this.state.date.toString())
  }
	
	_clickCompleted = () => {
		this.setState({ completed: true })
		this.props.updateMeetingCompleted(this.state.actualMeeting.id)
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
			
    }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    updateAppointedDate: updateAppointedDate,
		updateMeetingCompleted: updateMeetingCompleted
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MeetingDetail);
