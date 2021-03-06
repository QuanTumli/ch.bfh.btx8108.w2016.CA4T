import React from 'react';
import {
  ScrollView,
  StyleSheet,
	TouchableOpacity,
	Text,
  View
} from 'react-native';

import {
  FontAwesome,
} from '@exponent/vector-icons';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateAffliction } from '../actions'

import Colors from '../constants/Colors';
import GlobalStyle from '../constants/GlobalStyle';
import Router from '../navigation/Router';

import InfoButton from '../components/InfoButton';
import Button from '../components/Button';
import Header from '../components/Header';

import I18n from 'react-native-i18n'
import Languages from '../constants/Languages';
I18n.fallbacks = true
I18n.translations = Languages

import InfoModalBox from '../components/InfoModalBox';

class SelectAffliction extends React.Component {
  static route = {
    navigationBar: {
      title(params) {
        if (typeof params.title === 'undefined') {
          return I18n.t('selectAfflictionTitle');
        }
        return params.title;
       },

      backgroundColor: Colors.navigationBarBackground,
      tintColor: Colors.navigationBarTint,
      titleStyle: {"color": Colors.textDark, "fontWeight": "bold"}
    },

  }
  
  state = {
    modalVisible: false,
  }


  _click = (affliction) => {
    this.props.updateAffliction(affliction);
    if(this.props.settings.tnmEnabled){
      this.props.navigator.push(Router.getRoute('tnm', {affliction: this.props.settings.affliction}));
    }else{
      this.props.navigator.push(Router.getRoute('scheme'));
    }
  }
	
	_clickInfoButton = () => {
	  this.setState({modalVisible: true});
	}

	_closeModal = () => {
	  this.setState({modalVisible: false});
	}

  render() {
		const {
			schemes
		} = this.props
		var buttons = [];
		var that = this
		Object.keys(schemes).forEach(function(key, index) {
		  buttons.push(<Button
				key={key}
				onPress={() => that._click(key)}>
				{this[key].names[I18n.locale]}
			</Button>)
		}, schemes);

    return (
      <View style={GlobalStyle.mainContainer}>

      {/* info modal box*/}
      <InfoModalBox
          onPress={this._closeModal}
          visible={this.state.modalVisible}
          >
        {I18n.t('infoSelectAffliction')}
      </InfoModalBox>


        <ScrollView
        style={[GlobalStyle.scrollContainer, styles.contentContainer, this.state.modalVisible && {opacity : 0.2}]}>

          <Header title={I18n.t('selectAfflictionHeader')} />

					{buttons}

        </ScrollView>

        <InfoButton onPress={this._clickInfoButton} />

      </View>

    );
  }
}

const styles = StyleSheet.create({

});

const mapStateToProps = (state) => {
    return {
      schemes: state.schemes,
      settings: state.settings
    }
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
    updateAffliction: updateAffliction
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectAffliction);
