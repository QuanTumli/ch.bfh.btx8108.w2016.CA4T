import React from 'react';
import {
  ScrollView,
  StyleSheet,
	TouchableOpacity,
	Text,
  View,
} from 'react-native';

import { connect } from 'react-redux'

import Colors from '../constants/Colors';
import GlobalStyle from '../constants/GlobalStyle';
import Router from '../navigation/Router';

import InfoButton from '../components/InfoButton';
import Header from '../components/Header';
import ListCell from '../components/ListCell';

import { getReadableDateLong, getMonthNameAndYear } from '../utilities/dateHelper'

import I18n from 'react-native-i18n'
import Languages from '../constants/Languages';
I18n.fallbacks = true
I18n.translations = Languages

class MeetingList extends React.Component {
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
	
	_renderCompletedMeetings(meeting, key) {
		const meetingDateString = getReadableDateLong(new Date(meeting.dateAppointed))
		return ( 
			<ListCell
				key={key}
				title={meeting.titles.de}
				subtitle={meetingDateString}
			/>
		)
	}
	
	_renderAppointedMeetings(meeting, key) {
		const meetingDateString = getReadableDateLong(new Date(meeting.dateAppointed))
		return ( 
			<ListCell
				key={key}
				onPress={() => this._clickMeetings(meeting)}
				title={meeting.titles.de}
				subtitle={meetingDateString}
			/>
		)
	}
	
	_renderCalculatedMeetings(meeting, key) {
		const meetingDateString = getMonthNameAndYear(new Date(meeting.dateCalculated), I18n.locale)
		return ( 
			<ListCell
				key={key}
				onPress={() => this._clickMeetings(meeting)}
				title={meeting.titles.de}
				subtitle={meetingDateString}
			/>
		)
	}
	
	_getCompletedMeetings(meetings){
		return meetings.filter(meeting => meeting.completed).sort((a,b) => {
			const dateA = new Date(a.dateAppointed)
			const dateB = new Date(b.dateAppointed)
      return (dateA > dateB) ? 1 : ((dateB > dateA) ? -1 : 0);
    })
	}
	
	_getAppointedMeetings(meetings){
		return meetings.filter(meeting => meeting.dateAppointed && !meeting.completed).sort((a,b) => {
			const dateA = new Date(a.dateAppointed)
			const dateB = new Date(b.dateAppointed)
      return (dateA > dateB) ? 1 : ((dateB > dateA) ? -1 : 0);
    })
	}
	
	_getCalculatedMeetings(meetings){
		return meetings.filter(meeting => !meeting.dateAppointed && !meeting.completed).sort((a,b) => {
			const dateA = new Date(a.dateCalculated)
			const dateB = new Date(b.dateCalculated)
      return (dateA > dateB) ? 1 : ((dateB > dateA) ? -1 : 0);
    })
	}

  render() {
		const {
			meetings
		} = this.props

		const meetingsCompleted = this._getCompletedMeetings(meetings)
		const meetingsAppointed = this._getAppointedMeetings(meetings)
		const meetingsCalculated = this._getCalculatedMeetings(meetings)
    return (
      <View style={GlobalStyle.mainContainer}>
        <ScrollView
          style={GlobalStyle.scrollContainer}>
					<Header title={I18n.t('meetingsCompleted')} />
					{meetingsCompleted.map((meeting, i) => {
						return this._renderCompletedMeetings(meeting, i)
					})}
					<View style={{margin: 20}}></View>
					<Header title={I18n.t('meetingsAppointed')} />
					{meetingsAppointed.map((meeting, i) => {
						return this._renderAppointedMeetings(meeting, i)
					})}
					<View style={{margin: 20}}></View>
					<Header title={I18n.t('meetingsCalculated')} />
					{meetingsCalculated.map((meeting, i) => {
						return this._renderCalculatedMeetings(meeting, i)
					})}
        </ScrollView>

        <InfoButton />

      </View>

    );
  }
  _clickMeetings = (meeting) => {
    this.props.navigator.push(Router.getRoute('meetingDetail', {meeting: meeting}));
  }
}

const styles = StyleSheet.create({

})

const mapStateToProps = (state) => {
    return {
      meetings: state.meetings
    }
}

export default connect(mapStateToProps, null)(MeetingList);
