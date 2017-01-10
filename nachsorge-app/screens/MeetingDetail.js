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
import { updateAppointedDate, updateMeetingCompleted, updateAppointedTreatingDoctor } from '../actions'

import Colors from '../constants/Colors';
import GlobalStyle from '../constants/GlobalStyle';
import Router from '../navigation/Router';

import InfoButton from '../components/InfoButton';
import Button from '../components/Button';
import Header from '../components/Header';
import DetailRow from '../components/DetailRow'

import { getReadableDateWithTime, getMonthNameAndYear } from '../utilities/dateHelper'

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
	
	constructor(props) {
		super(props)
		const thisMeeting = this.getActualMeeting(props.allMeetings, props.meetingId)
		this.state = {
			meetingId: props.meetingId,
			inEditMode: false,
			date: thisMeeting.dateAppointed ? 
				new Date(thisMeeting.dateAppointed) :
				new Date(thisMeeting.dateCalculated),
			timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60
		}
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
	
	getActualMeeting = (meetings, id) => {
		return meetings.filter(meeting => meeting.id == id)[0];
	}
	
	getSelectedDoctor = (doctors, id) => {
		return doctors.filter(doctor => doctor.id == id)[0];
	}

  render() {
		const thisMeeting = this.getActualMeeting(this.props.allMeetings, this.state.meetingId)
		var selectedDoctor;
		if(thisMeeting.treatingDoctor != null){
			selectedDoctor = this.getSelectedDoctor(this.props.doctors, thisMeeting.treatingDoctor)
		}
		
		var date, buttonString
		if(thisMeeting.completed){
			date = new Date(thisMeeting.dateAppointed)
			buttonString = null
		}else {
			date = thisMeeting.dateAppointed ? 
				new Date(thisMeeting.dateAppointed) :
				new Date(thisMeeting.dateCalculated);
			buttonString = this.state.inEditMode ? I18n.t('save') : I18n.t('edit')
		}
		var meetingDateString = getMonthNameAndYear(date, I18n.locale)
		if(thisMeeting.dateAppointed && !this.state.inEditMode){
			meetingDateString = getReadableDateWithTime(date)
		}
		
    return (
      <View style={GlobalStyle.mainContainer}>
        <ScrollView
          style={GlobalStyle.scrollContainer}>
					<DetailRow
						title={I18n.t('meetingDetailWhat') + ":"}
						text={thisMeeting.titles[I18n.locale]}
					/>
					
					<DetailRow
						title={I18n.t('meetingDetailWhen') + ":"}
						text={meetingDateString}
					/>
					
					{this.state.inEditMode && this._renderDatePicker()}
					
					{!this.state.inEditMode &&
						<DetailRow
							title={I18n.t('doctor') + ":"}
							text={thisMeeting.treatingDoctor != null ? selectedDoctor.name + ", " + selectedDoctor.tel : '-'}
						/>
					}
					
					{this.state.inEditMode &&
						<TouchableOpacity
							onPress={this._chooseDoctor}>
							<DetailRow
								title={I18n.t('doctor') + ":"}
								text={thisMeeting.treatingDoctor != null ? selectedDoctor.name + ", " + selectedDoctor.tel : '-'}
							/>
						</TouchableOpacity>
					}
					
					{!thisMeeting.completed &&
	          <Button
	            onPress={this._clickSave}>
	            {this.state.inEditMode ? I18n.t('save') : I18n.t('edit')}
	          </Button>
					}
					
					{(thisMeeting.dateAppointed && !thisMeeting.completed)  &&
						<Button
	            onPress={this._clickCompleted}
							small={true}>
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
						mode="datetime"
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
		if(this.state.inEditMode){
			const thisMeeting = this.getActualMeeting(this.props.allMeetings, this.state.meetingId)
			this.props.updateAppointedDate(thisMeeting, this.state.date.toString())
		}
		this.setState({ inEditMode: !this.state.inEditMode })
  }
	
	_clickCompleted = () => {
		this.props.updateMeetingCompleted(this.state.meetingId)
  }
	
	_chooseDoctor = () => {
		this.props.navigator.push(Router.getRoute('meetingDetailChooseDoctor', {meetingId: this.state.meetingId}));
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
			allMeetings: state.meetings,
			doctors: state.doctors
    }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    updateAppointedDate: updateAppointedDate,
		updateMeetingCompleted: updateMeetingCompleted,
		updateAppointedTreatingDoctor: updateAppointedTreatingDoctor
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MeetingDetail);
