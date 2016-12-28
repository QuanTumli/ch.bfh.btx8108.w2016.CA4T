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
  TouchableWithoutFeedback
  } from 'react-native';

import {
  FontAwesome,
} from '@exponent/vector-icons';

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

export default class SelectOpDate extends React.Component {
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
    timeZoneOffsetInHours: this.props.timeZoneOffsetInHours,
    actualData: {...this.props.actualData, opDate: this.props.opDate.toISOString().substring(0, 10)},
  }

  onDateChange = (date) => {
    const newData = {...this.state.actualData, opDate: date.toISOString().substring(0, 10)};
    this.setState({actualData: newData, opDate: date});
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
        var date = new Date(year, month, day);
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

          <Header title={I18n.t('selectOpHeader')} />

          {Platform.OS === 'ios' && <DatePickerIOS
              date={this.state.opDate}
              mode="date"
              timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
              onDateChange={this.onDateChange}/>
          }

          {Platform.OS === 'android' && <TouchableWithoutFeedback
              onPress={this.showPicker.bind(this, 'preset', {date: this.state.opDate})}>
                        <Button
                          onPress={this.showPicker}>
                          {I18n.t('chooseDate')}
                        </Button>
              </TouchableWithoutFeedback>
          }


          <Button
            onPress={this._clickNext}>
            {I18n.t('next')}
          </Button>

        </ScrollView>

        <InfoButton />

      </View>

    );
  }

  _clickNext = () => {
    console.log("Next pressed");
    console.log(this.state.actualData);
    const dataToPass = this.state.actualData;
    this.props.navigator.push(Router.getRoute('checkData', {actualData: dataToPass}));
  };

  static propTypes = {
		actualData: React.PropTypes.object.isRequired
	}

}

const styles = StyleSheet.create({

});
