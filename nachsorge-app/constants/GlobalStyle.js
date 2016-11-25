import React from 'react';
import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const GlobalStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
		backgroundColor: Colors.containerBackground
  },
	scrollContainer: {
    paddingTop: 10,
  }
});

export default GlobalStyle;
