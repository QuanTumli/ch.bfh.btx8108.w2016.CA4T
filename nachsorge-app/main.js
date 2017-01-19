import Exponent from 'exponent';
import React from 'react';
import {
  AppRegistry,
  AsyncStorage,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';
import { FontAwesome } from '@exponent/vector-icons';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { 
  persistStore,
  autoRehydrate
} from 'redux-persist'
import createEncryptor from 'redux-persist-transform-encrypt'

import Router from './navigation/Router';
import cacheAssetsAsync from './utilities/cacheAssetsAsync';

import reducer from './reducers';

const store = createStore(reducer,
	{},
  compose(
    autoRehydrate(),
    applyMiddleware(thunk)
  ))
const encryptor = createEncryptor({
  secretKey: 'my-super-secret-key'
})

// save store (all the data) with encryption locally
// encryption does not work atm: https://github.com/maxdeviant/redux-persist-transform-encrypt/issues/10
persistStore(store, {
  transforms: [
    encryptor
  ],
  storage: AsyncStorage
})

class AppContainer extends React.Component {
  state = {
    appIsReady: false,
  }

  componentWillMount() {
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync() {
    try {
      await cacheAssetsAsync({
        images: [
          require('./assets/images/tuna-logo.png'),
        ],
        fonts: [
          {'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf')},
        ],
      });
    } catch(e) {
      console.warn(`There was an error caching assets (see: main.js), perhaps due to a network timeout, so we skipped caching. Reload the app to try again.`);
    } finally {
      this.setState({appIsReady: true});
    }
  }

  render() {
    if (this.state.appIsReady) {
      let { notification } = this.props.exp;
      let initialRoute = Router.getRoute('home', {notification});

      return (
				<Provider store={store}>
	        <View style={styles.container}>
	          <NavigationProvider router={Router}>
	            <StackNavigation
	              id="root"
	              initialRoute={initialRoute}
	            />
	          </NavigationProvider>

	          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
	          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />}
	        </View>
				</Provider>
      );
    } else {
      return <Exponent.Components.AppLoading />;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

Exponent.registerRootComponent(AppContainer);
