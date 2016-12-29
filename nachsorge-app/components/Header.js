import React from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
import Colors from '../constants/Colors';

export default class Header extends React.Component {
	static propTypes = {
		title: React.PropTypes.string.isRequired
	}
	
  render() {
    return (
			<View style={styles.headingContainer}>
				<Text style={styles.heading}>
					{this.props.title}
				</Text>
			</View>
    );
  }
}

const styles = StyleSheet.create({
	headingContainer: {
    paddingLeft: 20,
    paddingRight: 20
  },
	heading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.buttonDark
  }
});
