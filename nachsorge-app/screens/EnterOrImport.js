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
import InfoModalBox from '../components/InfoModalBox';


import I18n from 'react-native-i18n'
import Languages from '../constants/Languages';
I18n.fallbacks = true
I18n.translations = Languages

export default class EnterOrImport extends React.Component {
  static route = {
    navigationBar: {
      title(params) {
        if (typeof params.title === 'undefined') {
          return I18n.t('enterOrImportTitle');
        }
        return params.title;
       },
      backgroundColor: Colors.navigationBarBackground,
      tintColor: Colors.navigationBarTint,
      titleStyle: {"color": Colors.textDark, "fontWeight": "bold"}
    },
  }

  state = {
    modalVisible: false,
  }

  render() {
    return (
      <View style={GlobalStyle.mainContainer}>

        {/* info modal box*/}
        <InfoModalBox
            onPress={this._closeModal}
            visible={this.state.modalVisible}
            >
          {I18n.t('infoEnterOrImport')}
        </InfoModalBox>

        <ScrollView
          style={[GlobalStyle.scrollContainer, styles.contentContainer, this.state.modalVisible && {opacity : 0.2}]}>


          <Header title={I18n.t('enterOrImportHeader')} />

  				{/* Button for Enter data */}
          <Button
            onPress={this._clickEnter}>
            {I18n.t('enterData')}
          </Button>

  				{/* Button for Import */}
          <Button
            onPress={this._clickImport}
            active={false}>
            {I18n.t('importData')}
          </Button>

        </ScrollView>

        <InfoButton onPress={this._clickInfoButton} />

      </View>
    );
  }

	_clickEnter = () => {
    this.props.navigator.push(Router.getRoute('selectAffliction'));
  }

  _clickImport = () => {
    console.log("Import pressed");
  }

  _clickInfoButton = () => {
    this.setState({modalVisible: true});
  }

  _closeModal = () => {
    this.setState({modalVisible: false});
  }


}

const styles = StyleSheet.create({

});
