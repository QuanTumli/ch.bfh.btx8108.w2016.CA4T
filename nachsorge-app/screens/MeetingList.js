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
import ListCell from '../components/ListCell';

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

  render() {
		const {
			meetings
		} = this.props
    console.log(meetings);
    return (
      <View style={GlobalStyle.mainContainer}>
        <ScrollView
          style={GlobalStyle.scrollContainer}>
					
					{meetings.map((meeting, i) => {
						return (
							<ListCell
								key={i}
								onPress={this._clickMeetings}
								title={meeting.titles.de}
								subtitle={meeting.date}
							/>
						)
					})}

					

        </ScrollView>

        <InfoButton />

      </View>

    );
  }
  _clickMeetings = () => {
    console.log("Meetings pressed");
    this.props.navigator.push(Router.getRoute('meetingDetail'));
  }

}


const styles = StyleSheet.create({

});

const mapStateToProps = (state) => {
    return {
      meetings: state.meetings
    }
}

export default connect(mapStateToProps, null)(MeetingList);
