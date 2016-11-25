import {
  createRouter,
} from '@exponent/ex-navigation';

import HomeScreen from '../screens/HomeScreen';

// import files for adding new data
import Add1 from '../screens/Add1';
import Add2 from '../screens/Add2';

// import files for document screens
import Documents from '../screens/Documents';

// import files for settings screens
import Settings from '../screens/Settings';
import SettingsLanguage from '../screens/SettingsLanguage';

export default createRouter(() => ({
  home: () => HomeScreen,

  add1: () => Add1,
  add2: () => Add2,

  documents: () => Documents,

  settings: () => Settings,
  settingsLanguage: () => SettingsLanguage,
}));
