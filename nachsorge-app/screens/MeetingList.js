import React from 'react';
import {
  ScrollView,
  StyleSheet,
	TouchableOpacity,
	Text,
  View,
} from 'react-native';

import {
  FontAwesome,
} from '@exponent/vector-icons';

import { connect } from 'react-redux'

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

class MeetingList extends React.Component {
  static route = {
    navigationBar: {
      title(params) {
        if (typeof params.title === 'undefined') {
          return I18n.t('selectAfflictionTitle');
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
			schemes
		} = this.props

    return (
      <View style={GlobalStyle.mainContainer}>
        <ScrollView
          style={GlobalStyle.scrollContainer}>

          <Header title={I18n.t('selectAfflictionHeader')} />

          <View View style={styles.button}>
					     <Text style={styles.bold}>Koloskopie</Text>
               <Text style={styles.text}>Mai 2017</Text>
          </View>


          <TouchableOpacity
            onPress={this._clickMeetings}
            style={styles.button}>

          <Text style={styles.bold}>CEA Titer bestimmen im Spital</Text>
          <Text style={styles.text}>17. Januar 2017</Text>
          </TouchableOpacity>
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

  button: {
    margin: 7,
    padding: 5,
    backgroundColor: '#eaeaea',
    borderRadius: 3,
  },
  buttonContents: {
    flexDirection: 'row',
    width: 64,
    height: 64,
  },

  bold:  {
    fontWeight: 'bold',
    fontSize: 30,
},

  text:
    {fontSize: 30,
}



});

const mapStateToProps = (state) => {
    return {
      schemes: state.schemes
    }
}

export default connect(mapStateToProps, null)(MeetingList);
