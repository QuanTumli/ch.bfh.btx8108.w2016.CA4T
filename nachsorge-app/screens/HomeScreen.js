import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  FontAwesome,
} from '@exponent/vector-icons';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: false,
    },
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <View style={styles.welcomeContainer}>
            <Image
              source={require('../assets/images/exponent-wordmark.png')}
              style={styles.welcomeImage}
            />
          </View>

          <TouchableOpacity
            onPress={this._handlePressTermine}
            style={styles.fullWidthButton}>
            <FontAwesome
              name="calendar"
              size={64}
              color="#3F3D73" />
            <Text style={styles.halfWidthButtonText}>
              Termine
            </Text>
          </TouchableOpacity>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={this._handlePressDokumente}
              style={styles.halfWidthButton}>
              <FontAwesome
                name="file-text-o"
                size={64}
                color="#3F3D73" />
              <Text style={styles.halfWidthButtonText}>
                Dokumente
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this._handlePressEinstellungen}
              style={styles.halfWidthButton}>
              <FontAwesome
                name="gear"
                size={64}
                color="#3F3D73" />
              <Text style={styles.halfWidthButtonText}>
                Einstellungen
              </Text>
            </TouchableOpacity>
          </View>
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

  _handlePressTermine = () => {
    console.log("Termine pressed");
  }

  _handlePressDokumente = () => {
    console.log("Dokumente pressed");
  }

  _handlePressEinstellungen = () => {
    console.log("Einstellungen pressed");
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
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
    height: 34.5,
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
  },
  infoButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 60,
    height: 60,
    backgroundColor: '#3F3D73',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
