import React from 'react';
import {
	TouchableOpacity,
	Text,
	StyleSheet
} from 'react-native';

export default class ListCell extends React.Component {
	static propTypes = {
		onPress: React.PropTypes.func.isRequired,
		title: React.PropTypes.string.isRequired,
		subtitle: React.PropTypes.string.isRequired
	}

  render() {
    return (
			<TouchableOpacity
					onPress={this.props.onPress}
					style={styles.button}>
				<Text style={styles.bold}>{this.props.title}</Text>
				<Text style={styles.text}>{this.props.subtitle}</Text>
			</TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
	button: {
	  margin: 7,
	  padding: 5,
	  backgroundColor: '#eaeaea',
	  borderRadius: 3
	},
	bold: {
	  fontWeight: 'bold',
	  fontSize: 30
	},
	text: {
		fontSize: 30
	}
});
