import React from 'react';
import {
  Alert,
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';

import SelectButton from '../components/SelectButton';
import Header from '../components/Header';
import Button from '../components/Button';

import InfoModalBox from '../components/InfoModalBox';
import InfoButton from '../components/InfoButton';


import GlobalStyle from '../constants/GlobalStyle';
import Router from '../navigation/Router';
import Colors from '../constants/Colors';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateSchema } from '../actions'

import I18n from 'react-native-i18n'
import Languages from '../constants/Languages';
I18n.fallbacks = true
I18n.translations = Languages

class Tnm extends React.Component{
	static route = {
    navigationBar: {
      title(params) {
        if (typeof params.title === 'undefined') {
          return I18n.t('tnmTitle');
        }
        return params.title;
       },
      backgroundColor: Colors.navigationBarBackground,
      tintColor: Colors.navigationBarTint,
      titleStyle: {"color": Colors.textDark, "fontWeight": "bold"}
    }
  }



  state = {
    modalVisible: false,
    T: null,
    N: null,
    M: null
  }

  updateT(number) {
    this.setState({T: number});
  }

  updateN(number) {
    this.setState({N: number});
  }

  updateM(number) {
    this.setState({M: number});
  }

  render() {
    return (
      <View style={GlobalStyle.mainContainer}>

        {/* info modal box*/}
        <InfoModalBox
            onPress={this._closeModal}
            visible={this.state.modalVisible}
            >
          {I18n.t('infoTnm')}
        </InfoModalBox>

        <ScrollView
          style={[GlobalStyle.scrollContainer, styles.contentContainer, this.state.modalVisible && {opacity : 0.2}]}>

        <Header title={I18n.t('tnmHeader')} />

          <View style={styles.container}>
            <View style={{flex: 1, alignItems: 'center', flexDirection: 'row',justifyContent: 'center',marginTop:20}}>
            <SelectButton label='T1' onPress={() => { this.updateT(1) }} selected={this.state.T==1} />
            <SelectButton label='T2' onPress={() => { this.updateT(2) }} selected={this.state.T==2} />
            <SelectButton label='T3' onPress={() => { this.updateT(3) }} selected={this.state.T==3} />
            <SelectButton label='T4' onPress={() => { this.updateT(4) }} selected={this.state.T==4} />

            </View>

            <View style={{flex: 1, alignItems: 'center', flexDirection: 'row',justifyContent: 'center',marginTop:20}}>
              <SelectButton label='N0' onPress={() => { this.updateN(0) }} selected={this.state.N==0} />
              <SelectButton label='N1' onPress={() => { this.updateN(1) }} selected={this.state.N==1} />
              <SelectButton label='N2' onPress={() => { this.updateN(2) }} selected={this.state.N==2} />

            </View>

            <View style={{flex: 1, alignItems: 'center', flexDirection: 'row',justifyContent: 'center',marginTop:20}}>
              <SelectButton label='M0' onPress={() => { this.updateM(0) }} selected={this.state.M==0} />
              <SelectButton label='M1' onPress={() => { this.updateM(1) }} selected={this.state.M==1} />

            </View>
          </View>

          <Button
            onPress={this._clickEnter}>
            Weiter
          </Button>

        </ScrollView>
        <InfoButton onPress={this._clickInfoButton} />


      </View>
    );
  }

  _clickInfoButton = () => {
    this.setState({modalVisible: true});
  }

  _closeModal = () => {
    this.setState({modalVisible: false});
  }


  _clickEnter = () => {
		const {
			settings,
			schemes
		} = this.props

    if(this.state.T == null || this.state.N == null || this.state.M == null){
			console.log("not all selected")
      return;
    }
    if(this.state.M>0){
      Alert.alert(
        I18n.t('warning'),
        I18n.t('stadeWarning'),
        [
          {
            text: 'Ok', onPress: () => {
              console.log('Ok Pressed!'), this.props.navigator.popToTop()
            }
          },
        ]
      )
    } else {
			if(settings.affliction == 'rectum'){
				// use rectum schema
				this.props.updateSchema(schemes.rectum.schemes[0])
			}else if(settings.affliction == 'colon'){
				if((this.state.T==1 || this.state.T==2) && this.state.N==0){
					// use colon stadium I schema
					this.props.updateSchema(schemes.colon.schemes[1])
				}else{
					// use colon stadium II schema
					this.props.updateSchema(schemes.colon.schemes[0])
				}
			}
			this.props.navigator.push(Router.getRoute('selectOpDate'));
    }

  }

};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },

  row: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },



});

const mapStateToProps = (state) => {
    return {
      settings: state.settings,
			schemes: state.schemes
    }
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    updateSchema: updateSchema
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Tnm);
