import React from 'react';
import {
Platform,
  ScrollView,
  StyleSheet,
	TouchableOpacity,
	Text,
  View,
  DatePickerIOS,
  DatePickerAndroid,
  TouchableWithoutFeedback,
  } from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateOpDate } from '../actions'

import Colors from '../constants/Colors';
import GlobalStyle from '../constants/GlobalStyle';
import Router from '../navigation/Router';

import InfoButton from '../components/InfoButton';
import Button from '../components/Button';
import Header from '../components/Header';
import CustomText from '../components/CustomText';

import I18n from 'react-native-i18n'
import Languages from '../constants/Languages';
I18n.fallbacks = true
I18n.translations = Languages

class MeetingFind extends React.Component {
  static route = {
    navigationBar: {
      title(params) {
        if (typeof params.title === 'undefined') {
          return I18n.t('selectOpTitle');
        }
        return params.title;
       },
      backgroundColor: Colors.navigationBarBackground,
      tintColor: Colors.navigationBarTint,
      titleStyle: {"color": Colors.textDark, "fontWeight": "bold"}
    },
  }

  static defaultProps = {
    opDate: new Date(),
    timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
  }

  state = {
    opDate: this.props.opDate,
    timeZoneOffsetInHours: this.props.timeZoneOffsetInHours
  }

  componentWillMount() {
    this.props.updateOpDate(this.state.opDate.toISOString().substring(0, 10));
  }

  onDateChange = (date) => {
    this.setState({opDate: date});
		this.props.updateOpDate(date.toISOString().substring(0, 10));
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
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'dismissed';
      } else {
        var date = new Date(year, month, day+1);
        this.onDateChange(date);
      }
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };

  render() {
    return (
      <View style={GlobalStyle.mainContainer}>
        <ScrollView
          style={GlobalStyle.scrollContainer}>

          <View>
            <Text style={styles.title}>
              {I18n.t('meetingDetailWhat')}:
            </Text>
            <Text style={styles.text}>
            {I18n.t('meetingDetailWhatKoloskopie')}
            </Text>
          </View>

          <View>
            <Text style={styles.title}>
              {I18n.t('meetingDetailWhen')}:
            </Text>
          </View>


          {Platform.OS === 'ios' && <DatePickerIOS
              date={this.state.opDate}
              mode="date"
              timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
              onDateChange={this.onDateChange}/>
          }

          {Platform.OS === 'android' && <View><TouchableWithoutFeedback
              onPress={this.showPicker.bind(this, 'preset', {date: this.state.opDate})}>
                        <Button
                          onPress={this.showPicker}>
                          {I18n.t('chooseDate')}
                        </Button>
              </TouchableWithoutFeedback>
              <CustomText text={I18n.t('chosenDate')}></CustomText>
              <CustomText text={this.state.opDate.toISOString().substring(0, 10)}></CustomText>
            </View>
          }


          <Button
            onPress={this._clickNext}>
            Speichern
          </Button>

        </ScrollView>

        <InfoButton />

      </View>

    );
  }

  _clickNext = () => {
    this.props.navigator.pop();
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
			settings: state.settings
    }
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    updateOpDate: updateOpDate
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MeetingFind);
