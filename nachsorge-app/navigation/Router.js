import {
  createRouter,
} from '@exponent/ex-navigation';

import HomeScreen from '../screens/HomeScreen';
import Add1 from '../screens/Add1';
import Settings from '../screens/Settings';
import SettingsLanguage from '../screens/SettingsLanguage';

export default createRouter(() => ({
  home: () => HomeScreen,
  add1: () => Add1,
  add2: () => Add2,
  settings: () => Settings,
  settingsLanguage: () => SettingsLanguage,
}));
