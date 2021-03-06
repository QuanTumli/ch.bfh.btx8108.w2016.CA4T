import {
  createRouter,
} from '@exponent/ex-navigation';

import HomeScreen from '../screens/HomeScreen';

import Midata from '../screens/Midata';

import MeetingList from '../screens/MeetingList';
import MeetingDetail from '../screens/MeetingDetail';
import MeetingDetailChooseDoctor from '../screens/MeetingDetailChooseDoctor';

// import files for adding new data
import EnterOrImport from '../screens/EnterOrImport';
import SelectAffliction from '../screens/SelectAffliction';
import Scheme from '../screens/Scheme';
import SelectOpDate from '../screens/SelectOpDate';
import SelectKoloskopie from '../screens/SelectKoloskopie';
import CheckData from '../screens/CheckData';
import DatenschutzHaftung from '../screens/DatenschutzHaftung';
import Tnm from '../screens/Tnm';

// import files for document screen
import Documents from '../screens/Documents';

// import files for doctors screen
import Doctors from '../screens/Doctors';
import DoctorDetail from '../screens/DoctorDetail';

// import files for settings screens
import Settings from '../screens/Settings';
import SettingsLanguage from '../screens/SettingsLanguage';
import SettingsExport from '../screens/SettingsExport';
import SettingsImport from '../screens/SettingsImport';

export default createRouter(() => ({
  home: () => HomeScreen,

  midata: () => Midata,

  meetingList: () => MeetingList,
  meetingDetail: () => MeetingDetail,
  meetingDetailChooseDoctor: () => MeetingDetailChooseDoctor,

  enterOrImport: () => EnterOrImport,
  selectAffliction: () => SelectAffliction,
  scheme: () => Scheme,
  selectOpDate: () => SelectOpDate,
  selectKoloskopie: () => SelectKoloskopie,
  checkData: () => CheckData,
  datenschutzHaftung: () => DatenschutzHaftung,
  tnm: () => Tnm,

  documents: () => Documents,
  
  doctors: () => Doctors,
	doctorDetail: () => DoctorDetail,

  settings: () => Settings,
  settingsLanguage: () => SettingsLanguage,
  settingsExport: () => SettingsExport,
  settingsImport: () => SettingsImport
}));
