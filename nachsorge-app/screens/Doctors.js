import React from 'react';
import {
	Alert,
	Platform,
  ScrollView,
  StyleSheet,
	Switch,
	TouchableOpacity,
	Text,
	View
} from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addDoctor, editDoctor } from '../actions'

import Colors from '../constants/Colors'
import GlobalStyle from '../constants/GlobalStyle'
import Router from '../navigation/Router'

import Button from '../components/Button'
import Header from '../components/Header'
import ListCell from '../components/ListCell'

import I18n from 'react-native-i18n'
import Languages from '../constants/Languages';

I18n.fallbacks = true
I18n.translations = Languages

class Doctors extends React.Component {
  static route = {
    navigationBar: {
      title(params) {
        return I18n.t('doctors');
       },
       backgroundColor: Colors.navigationBarBackground,
       tintColor: Colors.navigationBarTint,
       titleStyle: {"color": Colors.textDark, "fontWeight": "bold"}
    }
  }
	
	_clickAdd = () => {
		this.props.navigator.push(Router.getRoute('doctorDetail'));
	}
	
	_clickDoctor = (doctor) => {
		this.props.navigator.push(Router.getRoute('doctorDetail', { doctor }));
	}

	_renderDoctorCell = (doctor) => {
		return (
			<ListCell
				key={doctor.id}
				onPress={() => this._clickDoctor(doctor)}
				title={doctor.name}
				subtitle={doctor.tel}
			/>
		)
	}
	
  render() {
		const {
			settings,
			doctors
		} = this.props
		
		doctors.sort((a,b) => {
      return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
    })
		
    return (
      <ScrollView
        style={[GlobalStyle.mainContainer, GlobalStyle.scrollContainer]}>

        {doctors.length == 0 && <Header title={I18n.t('noDoctors')} /> }
				
				{doctors.map((doctor) => {
					return this._renderDoctorCell(doctor)
				})}
				
				<Button
					onPress={this._clickAdd}>
					{I18n.t('addDoctor')}
				</Button>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  
});

const mapStateToProps = (state) => {
    return {
      settings: state.settings,
			doctors: state.doctors
    }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    addDoctor: addDoctor,
		editDoctor: editDoctor
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Doctors);
