import React from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet
} from 'react-native';

export default class DetailRowInput extends React.Component {
	static propTypes = {
		title: React.PropTypes.string.isRequired,
		text: React.PropTypes.string.isRequired,
		onChangeText: React.PropTypes.func.isRequired,
	}
	
  render() {
    return (
			<View> 
				<Text style={styles.title}>
					{this.props.title}
				</Text>
				<TextInput
	        style={styles.text}
	        onChangeText={(text) => this.props.onChangeText(text)}
	        value={this.props.text}
					{...this.props}
	      />
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
    marginLeft: 40,
		marginRight: 20,
		paddingHorizontal: 5,
		height: 40,
		borderColor: 'gray',
		borderWidth: 1
  }
});
