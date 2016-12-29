import React from 'react';
import {
	View,
	TouchableOpacity,
	Text,
	StyleSheet
} from 'react-native';
import Colors from '../constants/Colors';

export default class Button extends React.Component {
	static propTypes = {
		children: React.PropTypes.string.isRequired,
		active: React.PropTypes.bool
	}
	
	static defaultProps = {
    active: true
  }

  render() {
		const buttonActive = <TouchableOpacity
				onPress={this.props.onPress}
				style={styles.fullWidthButton}>
				<Text style={styles.fullWidthButtonText}>
					{this.props.children}
				</Text>
			</TouchableOpacity>;
		const buttonInactive = <View
				style={[styles.fullWidthButton, styles.buttonActive]}>
				<Text style={styles.fullWidthButtonText}>
					{this.props.children}
				</Text>
			</View>;
    return (
			<View>
				{this.props.active ? buttonActive : buttonInactive}
			</View>
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
	buttonActive: {
		backgroundColor: Colors.buttonLight
	},
	fullWidthButtonText: {
    fontSize: 46,
    fontWeight: 'normal',
    color: Colors.textLight,
  },
});
