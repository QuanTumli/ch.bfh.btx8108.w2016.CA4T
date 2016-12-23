import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import {
  FontAwesome,
} from '@exponent/vector-icons';

import { connect } from 'react-redux'

import GlobalStyle from '../constants/GlobalStyle';
import Router from '../navigation/Router';

import InfoButton from '../components/InfoButton';
import InfoModalBox from '../components/InfoModalBox';

import Languages from '../constants/Languages';

import I18n from 'react-native-i18n'
I18n.fallbacks = true
I18n.translations = Languages
// const deviceLocale = ReactNativeI18n.locale
// console.log("locale", deviceLocale)

class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  }
	
	constructor(props) {
    super(props)
		I18n.locale = props.settings.language
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
        visible={this.state.modalVisible}>
        This is the text of the help box, very long and so on
        </InfoModalBox>

        <ScrollView
          style={[GlobalStyle.scrollContainer, styles.contentContainer, this.state.modalVisible && {opacity : 0.2}]}>

          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/tuna-logo.png')}
              style={styles.welcomeImage}
            />
          </View>
          {/* Button for Termine */}
          <TouchableOpacity
            onPress={this._clickMeetings}
            style={styles.fullWidthButton}>
            <FontAwesome
              name="calendar"
              size={64}
              color="#3F3D73" />
            <Text style={styles.halfWidthButtonText}>
              {I18n.t('meetings')}
            </Text>
          </TouchableOpacity>

          {/* Button for Dokumente */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={this._clickDocuments}
              style={styles.halfWidthButton}>
              <FontAwesome
                name="file-text-o"
                size={64}
                color="#3F3D73" />
              <Text style={styles.halfWidthButtonText}>
                {I18n.t('documents')}
              </Text>
            </TouchableOpacity>

            {/* Button for Einstellungen */}
            <TouchableOpacity
              onPress={this._clickSettings}
              style={styles.halfWidthButton}>
              <FontAwesome
                name="gear"
                size={64}
                color="#3F3D73" />
              <Text style={styles.halfWidthButtonText}>
                {I18n.t('settings')}
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <InfoButton onPress={this._clickInfoButton} />

      </View>
    );
  }

  _clickMeetings = () => {
    // this is how to navigate to another screen.
    // the screen must be defined in /navigation/Router.js
    this.props.navigator.push(Router.getRoute('enterOrImport'));
  }

  _clickDocuments = () => {
    this.props.navigator.push(Router.getRoute('documents'));
  }

  _clickSettings = () => {
    this.props.navigator.push(Router.getRoute('settings'));
  }

  _clickInfoButton = () => {
    console.log("InfoButton clicked on HomeScreen");
    this.setState({modalVisible: true});
  }

  _closeModal = () => {
    this.setState({modalVisible: false});
  }
}

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 80,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 98.4,
    marginTop: 3,
  },
  fullWidthButton: {
    backgroundColor: '#DFDEE6',
    flex: 1,
    margin: 20,
    padding: 5,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  halfWidthButton: {
    backgroundColor: '#DFDEE6',
    flex: 1,
    padding: 5,
    marginHorizontal: 20,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  halfWidthButtonText: {
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3F3D73',
  }
});

const mapStateToProps = (state) => {
    return {
      settings: state.settings
    }
}

export default connect(mapStateToProps)(HomeScreen);
