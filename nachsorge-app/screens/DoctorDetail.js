import React from 'react';
import {
	DatePickerIOS,
	Platform,
  ScrollView,
  StyleSheet,
	TouchableOpacity,
	Text,
  View
} from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addDoctor, editDoctor, deleteDoctor } from '../actions'

import Colors from '../constants/Colors'
import GlobalStyle from '../constants/GlobalStyle'
import Router from '../navigation/Router'

import Button from '../components/Button'
import Header from '../components/Header'
import DetailRow from '../components/DetailRow'
import DetailRowInput from '../components/DetailRowInput'

import { getReadableDateLong, getMonthNameAndYear } from '../utilities/dateHelper'

import I18n from 'react-native-i18n'
import Languages from '../constants/Languages';
I18n.fallbacks = true
I18n.translations = Languages

class DoctorDetail extends React.Component {
  static route = {
    navigationBar: {
      title(params) {
        if (typeof params.title === 'undefined') {
          return params.doctor ? params.doctor.name : 'Arztdetail';
        }
        return params.title;
       },
      backgroundColor: Colors.navigationBarBackground,
      tintColor: Colors.navigationBarTint,
      titleStyle: {"color": Colors.textDark, "fontWeight": "bold"}
    },
  }
	
	state = {
		inEditMode: this.props.route.params.doctor ? false : true,
		name: this.props.route.params.doctor ? this.props.route.params.doctor.name : '',
		tel: this.props.route.params.doctor ? this.props.route.params.doctor.tel: ''
	}

  _changeTel = (tel) => {
		this.setState({tel})
  }
	
	_changeName = (name) => {
		this.setState({name})
  }

  render() {
		var inputs = (
			<View>
				<DetailRow
					title={I18n.t('name') + ":"}
					text={this.state.name}
				/>
				<DetailRow
					title={I18n.t('tel') + ":"}
					text={this.state.tel}
				/>
			</View>
		)
		if(this.state.inEditMode){
			inputs = (
				<View>
					<DetailRowInput
						title={I18n.t('name') + ":"}
						text={this.state.name}
						onChangeText={(name) => this._changeName(name)}
					/>
					<DetailRowInput
						title={I18n.t('tel') + ":"}
						text={this.state.tel}
						keyboardType='phone-pad'
						onChangeText={(tel) => this._changeTel(tel)}
					/>
				</View>
			)
		}
		
    return (
      <View style={GlobalStyle.mainContainer}>
        <ScrollView
          style={GlobalStyle.scrollContainer}>
					{inputs}

					<Button
						onPress={this._clickSave}
						>
						{this.state.inEditMode ? I18n.t('save') : I18n.t('edit')}
					</Button>
					
					{(this.state.inEditMode && this.props.route.params.doctor) && <Button
						onPress={this._clickDelete}
						small={true}
						>
						{I18n.t('delete')}
					</Button>}
					
        </ScrollView>
      </View>
    );
  }

  _clickSave = () => {
		this.setState({ inEditMode: !this.state.inEditMode })
		if(this.props.route.params.doctor){
			this.props.editDoctor(this.props.route.params.doctor.id, this.state.name, this.state.tel)
		}else{
			this.props.addDoctor(this.state.name, this.state.tel)
			this.props.navigator.pop();
		}
  }
	
	_clickDelete = () => {
		this.setState({ inEditMode: !this.state.inEditMode })
		this.props.deleteDoctor(this.props.route.params.doctor.id)
		this.props.navigator.pop();
  }
}

const styles = StyleSheet.create({
	
});

const mapStateToProps = (state) => {
    return {
			
    }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    addDoctor: addDoctor,
		editDoctor: editDoctor,
		deleteDoctor: deleteDoctor
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DoctorDetail);
