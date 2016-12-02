import React from 'react';
import {
  ScrollView,
  StyleSheet,
	TouchableOpacity,
	Text,
  View
} from 'react-native';

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

export default class Scheme extends React.Component {
  static route = {
    navigationBar: {
      title(params) {
        if (typeof params.title === 'undefined') {
          return I18n.t('selectSchemeTitle');
        }
        return params.title;
       },
      backgroundColor: Colors.navigationBarBackground,
      tintColor: Colors.navigationBarTint,
      titleStyle: {"color": Colors.textDark, "fontWeight": "bold"}
    },
  }

  state = {
    actualData: {
      affliction: this.props.affliction
    },
    schemes: [
      {name: 'Schema 1'},
      {name: 'Schema 2'},
    ]
  }

  render() {
    return (
      <View style={GlobalStyle.mainContainer}>
        <ScrollView
          style={GlobalStyle.scrollContainer}>

          <Header title={I18n.t('selectSchemeHeader')} />

          {this.state.schemes.map((scheme, i) => {
              return (
                <Button
                  onPress={() => this._clickScheme(scheme.name)}
                  key={i}>
                  {scheme.name}
                </Button>
              )
            })
          }

        </ScrollView>

        <InfoButton />

      </View>
    );
  }


	_clickScheme = (name) => {
    console.log("Scheme pressed: ", name);
    const newData = {...this.state.actualData, scheme: name};
    console.log(newData);
    this.props.navigator.push(Router.getRoute('selectOpDate', {actualData: newData}));
  };

  static propTypes = {
		affliction: React.PropTypes.string.isRequired
	}
}

const styles = StyleSheet.create({

});
