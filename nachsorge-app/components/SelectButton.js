import React from 'react';
import {
	AppRegistry,
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Colors from '../constants/Colors';

export default class SelectButton extends React.Component {


  render() {
    return (
      <TouchableOpacity underlayColor='Colors.buttonLight' style={styles.bubblechoice} onPress={this.props.onPress}>
            <View style={[styles.overlay, this.props.selected ? {backgroundColor: Colors.buttonLight} : {}]}>
              <Text style={styles.choicetext}>{this.props.label}</Text>
            </View>
      </TouchableOpacity>
    );
  }
}
var styles = StyleSheet.create({


  bubblechoice_click: {
    height: window.height/8.335,
    borderRadius: (window.height/8.3350)/2,
    marginRight: 2,
    width: window.height/8.335,
  },
  bubblechoice: {
    height: window.height/8.335,
    borderRadius: (window.height/8.3350)/2,
    marginRight: 2,
    width: window.height/8.335,
  },

  choicetext: {
    alignItems: 'center',
    alignSelf: 'center',
    color: 'white',
    marginTop: 23,
    fontWeight: 'normal',
    fontSize: 46,
    flex: 1,
    textAlign: 'center'
  },
  overlay: {
    backgroundColor: Colors.buttonDark,
    height: 100,
    width: 80,
    alignItems:'center'
  },

});
