import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import Colors from '../constants/Colors';

export default class CustomText extends React.Component {
  render() {
    return (
			<View style={styles.customTextContainer}>
				<Text style={styles.textStyle}>
					{this.props.text}
				</Text>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	customTextContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
	textStyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});