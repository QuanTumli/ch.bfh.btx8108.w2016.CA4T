import React from 'react';
import {
  ScrollView,
  StyleSheet,
	TouchableOpacity,
	Text,
  View,
  DatePickerIOS
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

export default class CheckData extends React.Component {
  static route = {
    navigationBar: {
      title(params) {
        if (typeof params.title === 'undefined') {
          return I18n.t('checkDataTitle');
        }
        return params.title;
       },
      backgroundColor: Colors.navigationBarBackground,
      tintColor: Colors.navigationBarTint,
      titleStyle: {"color": Colors.textDark, "fontWeight": "bold"}
    },
  }

  state = {
    actualData: this.props.actualData
  }

  render() {
    console.log("in check");
    console.log(this.state.actualData);
    return (
      <View style={GlobalStyle.mainContainer}>
        <ScrollView
          style={GlobalStyle.scrollContainer}>

          <Header title={I18n.t('checkDataHeader')} />

          {Object.keys(this.state.actualData).map(key => {
            return (
              <Text key={key}>{key}: {this.state.actualData[key]}</Text>
            )
          })}


          <Button
            onPress={this._clickNext}
            active={false}>
            {I18n.t('next')}
          </Button>

        </ScrollView>

        <InfoButton />

      </View>

    );
  }

  _clickNext = () => {
    console.log("Next pressed");
     //this.props.navigator.push(Router.getRoute('scheme'));
  };

  static propTypes = {
		actualData: React.PropTypes.object.isRequired
	}

}

const styles = StyleSheet.create({

});
