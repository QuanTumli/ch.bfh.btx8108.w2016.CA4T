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
            onPress={this._handlePressKolon}
            style={styles.fullWidthButton}>

            <Text style={styles.fullWidthButtonText}>
              Kolon
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={this._handlePressRektum}
            style={styles.fullWidthButton}>

            <Text style={styles.fullWidthButtonText}>
              Rektum
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

  fullWidthButtonText: {
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
