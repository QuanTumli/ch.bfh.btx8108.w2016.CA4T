import React from 'react';
import {
	TouchableOpacity,
	StyleSheet
} from 'react-native';
import { FontAwesome } from '@exponent/vector-icons';
import Colors from '../constants/Colors';

export default class InfoButton extends React.Component {
	static propTypes = {
		onPress: React.PropTypes.func
	}
	
  render() {
    return (
			<TouchableOpacity
				onPress={this.props.onPress}
				style={styles.infoButton}>
				<FontAwesome
					name="info"
					size={40}
					color="white" />
			</TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  infoButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    width: 60,
    height: 60,
    backgroundColor: Colors.buttonDark,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
