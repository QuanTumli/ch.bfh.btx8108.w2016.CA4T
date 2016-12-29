import React from 'react';
import {
	Modal,
	TouchableWithoutFeedback,
	View,
	Text,
	StyleSheet
} from 'react-native';
import I18n from 'react-native-i18n';
import Colors from '../constants/Colors';
import Languages from '../constants/Languages';

I18n.fallbacks = true
I18n.translations = Languages

export default class InfoModalBox extends React.Component {
	static propTypes = {
		onPress: React.PropTypes.func,
		visible: React.PropTypes.bool,
		children: React.PropTypes.string.isRequired,
	}
	
	static defaultProps = {
    visible: false
  }
	
  render() {
    return (
			<Modal
				animationType={"fade"}
				transparent={true}
				visible={this.props.visible}>
				<TouchableWithoutFeedback
					onPress={this.props.onPress}>
					<View style={styles.infoModalContainer}>
					 <View style={styles.infoModalBox}>
					 	<Text style={styles.infoModalTitle}>tuna - {I18n.t('help')}</Text>
						<Text style={styles.infoModalText}>{this.props.children}</Text>
					 </View>
					</View>
			 </TouchableWithoutFeedback>
			</Modal>
    );
  }
}

const styles = StyleSheet.create({
	infoModalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  infoModalBox: {
    margin: 10,
    padding: 10,
    flex: 1,
    backgroundColor: Colors.modalBackground
  },
  infoModalText: {
    fontSize: 20,
		paddingBottom: 10,
    color: Colors.textDark
  },
	infoModalTitle: {
		alignSelf: 'center',
		paddingBottom: 20,
    fontSize: 25,
		fontWeight: 'bold',
    color: Colors.modalTitle
  }
});
