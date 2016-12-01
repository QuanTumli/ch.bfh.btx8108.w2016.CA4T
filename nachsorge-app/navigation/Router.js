import {
  createRouter,
} from '@exponent/ex-navigation';

import HomeScreen from '../screens/HomeScreen';

// import files for adding new data
import EnterOrImport from '../screens/EnterOrImport';
import SelectAffliction from '../screens/SelectAffliction';
import Scheme from '../screens/Scheme';


// import files for document screens
import Documents from '../screens/Documents';

// import files for settings screens
import Settings from '../screens/Settings';
import SettingsLanguage from '../screens/SettingsLanguage';

export default createRouter(() => ({
  home: () => HomeScreen,

  enterOrImport: () => EnterOrImport,
  selectAffliction: () => SelectAffliction,
  scheme: () => Scheme,

  documents: () => Documents,

  settings: () => Settings,
  settingsLanguage: () => SettingsLanguage,
}));
