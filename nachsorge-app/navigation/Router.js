import {
  createRouter,
} from '@exponent/ex-navigation';

import HomeScreen from '../screens/HomeScreen';

import MeetingList from '../screens/MeetingList';
import MeetingDetail from '../screens/MeetingDetail';

// import files for adding new data
import EnterOrImport from '../screens/EnterOrImport';
import SelectAffliction from '../screens/SelectAffliction';
import Scheme from '../screens/Scheme';
import SelectOpDate from '../screens/SelectOpDate';
import CheckData from '../screens/CheckData';

// import files for document screens
import Documents from '../screens/Documents';

// import files for settings screens
import Settings from '../screens/Settings';
import SettingsLanguage from '../screens/SettingsLanguage';

export default createRouter(() => ({
  home: () => HomeScreen,

  meetingList: () => MeetingList,
  meetingDetail: () => MeetingDetail,

  enterOrImport: () => EnterOrImport,
  selectAffliction: () => SelectAffliction,
  scheme: () => Scheme,
  selectOpDate: () => SelectOpDate,
  checkData: () => CheckData,

  documents: () => Documents,

  settings: () => Settings,
  settingsLanguage: () => SettingsLanguage,
}));
