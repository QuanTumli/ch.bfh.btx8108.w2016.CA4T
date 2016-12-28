import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';

export default class DetailRow extends React.Component {
	static propTypes = {
		title: React.PropTypes.string.isRequired,
		text: React.PropTypes.string.isRequired
	}
	
  render() {
    return (
			<View> 
				<Text style={styles.title}>
					{this.props.title}
				</Text>
				<Text style={styles.text}>
					{this.props.text}
				</Text>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	title: {
		marginTop: 10,
		paddingTop: 5,
		paddingBottom: 5,
    paddingLeft: 20,
		paddingRight: 20,
    fontSize: 30,
		fontWeight: 'bold'
  },
  text: {
    fontSize: 24,
    paddingLeft: 40,
		paddingRight: 20
  }
});
