import React from 'react';
import {
  ScrollView,
  StyleSheet,
	TouchableOpacity,
	Text
} from 'react-native';

import Colors from '../constants/Colors';
import Router from '../navigation/Router';

import I18n from 'react-native-i18n'
import Languages from '../constants/Languages';
I18n.fallbacks = true
I18n.translations = Languages

export default class Add2 extends React.Component {
  static route = {
    navigationBar: {
      title: I18n.t('addOverviewTitle'),
    },
  }

  render() {
    return (

        <ScrollView
          style={styles.container}
          contentContainerStyle={this.props.route.getContentContainerStyle()}>

          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/exponent-wordmark.png')}
              style={styles.welcomeImage}
            />
          </View>

          <TouchableOpacity
            onPress={this._handlePressKolon}
            style={styles.fullWidthButton}>

            <Text style={styles.fullWidthButtonText}>
              Kolon
              {I18n.t('colon')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this._handlePressRektum}
            style={styles.fullWidthButton}>

            <Text style={styles.fullWidthButtonText}>
              Rektum
              {I18n.t('rectum')}
            </Text>
          </TouchableOpacity>

        </ScrollView>

        <View style={styles.infoButton}>
          <FontAwesome
            name="info"
            size={40}
            color="white" />
        </View>

      </View>
    );
  }

  _handlePressKolon = () => {
    console.log("Kolon pressed");
  }

  _handlePressRektum = () => {
    console.log("Rektum pressed");
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
  },
	fullWidthButton: {
    backgroundColor: Colors.buttonDark,
    flex: 1,
    margin: 20,
    padding: 5,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
	fullWidthButtonText: {
    fontSize: 50,
    fontWeight: 'normal',
    color: Colors.textLight,
  },
});
