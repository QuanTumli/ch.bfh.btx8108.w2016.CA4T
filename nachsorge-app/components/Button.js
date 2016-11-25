import React from 'react';
import {
	TouchableOpacity,
	Text,
	StyleSheet
} from 'react-native';
import Colors from '../constants/Colors';

export default class Button extends React.Component {
  render() {
    return (
			<TouchableOpacity
				onPress={this.props.onPress}
				style={styles.fullWidthButton}>
				<Text style={styles.fullWidthButtonText}>
					{this.props.children}
				</Text>
			</TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
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
