import Exponent, {
  Constants,
  Permissions,
	Notifications
} from 'exponent';

import { scheduleLocalNotification } from '../utilities/notification'
import { getMonthNameAndYear } from '../utilities/dateHelper'

import I18n from 'react-native-i18n'
import Languages from '../constants/Languages'

I18n.fallbacks = true
I18n.translations = Languages

/*
 * action types
 */

export const MIDATA_LOGIN = 'MIDATA_LOGIN'
export const MIDATA_LOGOUT = 'MIDATA_LOGOUT'
export const MIDATA_LOGIN_SUCCESS = 'MIDATA_LOGIN_SUCCESS'

export const MIDATA_SEND_TEMP = 'MIDATA_SEND_TEMP'
export const MIDATA_SEND_TEMP_SUCCESS = 'MIDATA_SEND_TEMP_SUCCESS'

export const MIDATA_GET_TEMP = 'MIDATA_GET_TEMP'
export const MIDATA_GET_TEMP_SUCCESS = 'MIDATA_GET_TEMP_SUCCESS'

export const RESET_SCHEME_SETTINGS = 'RESET_SCHEME_SETTINGS'
export const UPDATE_LANGUAGE = 'UPDATE_LANGUAGE'
export const UPDATE_AFFLICTION = 'UPDATE_AFFLICTION'
export const UPDATE_KOLOSKOPIE = 'UPDATE_KOLOSKOPIE'
export const UPDATE_OPDATE = 'UPDATE_OPDATE'
export const UPDATE_SCHEMA = 'UPDATE_SCHEMA'
export const UPDATE_SCHEMA_LOADED = 'UPDATE_SCHEMA_LOADED'
export const UPDATE_MIDATA_ENABLED = 'UPDATE_MIDATA_ENABLED'
export const UPDATE_TNM_ENABLED = 'UPDATE_TNM_ENABLED'
export const UPDATE_FASTER_NOTIFICATION_ENABLED = 'UPDATE_FASTER_NOTIFICATION_ENABLED'

export const ADD_MEETING = 'ADD_MEETING'
export const UPDATE_MEETING_APPOINTED_DATE = 'UPDATE_MEETING_APPOINTED_DATE'
export const UPDATE_MEETING_COMPLETED = 'UPDATE_MEETING_COMPLETED'

export const LOAD_SCHEMAS = 'LOAD_SCHEMAS'

export const RESET = 'RESET'




/*
 * action creators
 */
 const appname = 'Tuna'
 const secret = '5UjykfCjK6tVrW6K'
 const username = 'tuna@midata.coop'
 const password = 'Tuna123456'
 const baseurl = 'https://test.midata.coop:9000'

 export const midataLogin = () => {
	 return (dispatch) => {
		dispatch({ type: MIDATA_LOGIN })
		return fetch(baseurl + "/v1/auth", {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: "POST",
			body: JSON.stringify({appname: appname, secret: secret, username: username, password: password})
		})
		.then((response) => {
			return(response.json())
		})
		.then(function(json) {
			dispatch({
		       type: MIDATA_LOGIN_SUCCESS,
		       authToken: json.authToken
		  });
		});
	}
}

export const midataLogout = () => {
   return { type: MIDATA_LOGOUT }
 }

 export const midataPutTemperature = (temp, authToken) => {
	 const body = JSON.stringify({
		 authToken: authToken, name: "Temperature", description: "Body Temperature",
		 format: "fhir/Observation", code: "http://loinc.org 8310-5",
		 data: {
			 resourceType: "Observation", code: {
				 coding: [
					 {system: "http://loinc.org", code: "8310-5", display: "Body temperature"}
				 ]
			 }, effectiveDateTime: new Date(), valueQuantity: {
				 value: temp, unit: "degrees C", system: "http://snomed.info/sct", code: "258710007"
			 }
		 }
	 });
	 return (dispatch) => {
	 	 dispatch({ type: MIDATA_SEND_TEMP })
	 	 return fetch(baseurl + "/v1/records/create", {
	 		 headers: {
	 			 'Accept': 'application/json',
	 			 'Content-Type': 'application/json'
	 		 },
	 		 method: "POST",
	 		 body: body
	 	 })
		 .then((response) => {
			 dispatch(midataGetLast3Temperatures(authToken));
				dispatch({
						 type: MIDATA_SEND_TEMP_SUCCESS
				});
		 })
	}
}

export const midataGetLast3Temperatures = (authToken) => {
	const body = JSON.stringify({
		authToken: authToken, fields : ["name", "data"],
		properties : {
			format : "fhir/Observation",
			code : "http://loinc.org 8310-5",
			limit: 3
		}
	});
	return (dispatch) => {
		dispatch({ type: MIDATA_GET_TEMP })
		return fetch(baseurl + "/v1/records/search", {
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			method: "POST",
			body: body
		})
		.then((response) => {
			return(response.json())
		})
		.then(function(json) {
			const data = [];
			json.map((entry) => {
				data.push({date: entry.data.effectiveDateTime, value: entry.data.valueQuantity.value})
			})
			dispatch({
		       type: MIDATA_GET_TEMP_SUCCESS,
		       data: data
		  });
		});
 }
}

export const resetSchemeSettings = () => {
   return { type: RESET_SCHEME_SETTINGS }
 }

export const updateLanguage = (language) => {
  return { type: UPDATE_LANGUAGE, language }
}

export const updateAffliction = (affliction) => {
  return { type: UPDATE_AFFLICTION, affliction }
}

export const updateKoloskopie = (isKoloskopie) => {
  return { type: UPDATE_KOLOSKOPIE, isKoloskopie }
}

export const updateOpDate = (opDate) => {
  return { type: UPDATE_OPDATE, opDate }
}

export const updateSchema= (schema) => {
  return { type: UPDATE_SCHEMA, schema }
}

export const updateSchemaIsLoaded= (isLoaded) => {
  return { type: UPDATE_SCHEMA_LOADED, isLoaded }
}

export const updateMidataEnabled= (midataEnabled) => {
  return { type: UPDATE_MIDATA_ENABLED, midataEnabled }
}

export const updateTnmEnabled= (tnmEnabled) => {
  return { type: UPDATE_TNM_ENABLED, tnmEnabled }
}

export const updateFasterNotificationEnabled= (fasterNotificationEnabled) => {
  return { type: UPDATE_FASTER_NOTIFICATION_ENABLED, fasterNotificationEnabled }
}

export const addMeeting = (meeting) => {
  return { type: ADD_MEETING, meeting }
}

export const updateAppointedDate = (meetingId, appointedDate) => {
  return { type: UPDATE_MEETING_APPOINTED_DATE, payload: { id: meetingId, date: appointedDate} }
}

export const updateMeetingCompleted = (meetingId) => {
  return { type: UPDATE_MEETING_COMPLETED, meetingId }
}


export const loadSchemas = (schemas) => {
  return { type: LOAD_SCHEMAS, schemas }
}

export const calculateMeetingsFromScheme = (settings) => {
	const {
		opDate,
		koloskopie,
		schema,
		fasterNotificationEnabled
	} = settings
	
	return (dispatch) => {
		var d = new Date(opDate);
		var dateNow = new Date();
		var actualOpDate = new Date(d.getFullYear(), d.getMonth(), d.getDate(), 12, 0, 0, 0);
		if(fasterNotificationEnabled){
			actualOpDate = new Date(d.getFullYear(), d.getMonth(), d.getDate(), dateNow.getHours(), dateNow.getMinutes(), 0, 0);
		}
		var newDate = actualOpDate
		// if 'vollständige Koloskopie' was not made, remind in 3 months
		if(!koloskopie){
			newDate.setMonth(newDate.getMonth() + 3);
			var meeting = {
				id: "vollstandige-koloskopie",
				titles: {de: 'Vollständige Koloskopie', fr: 'Vollständige Koloskopie', en: 'Vollständige Koloskopie'},
				dateCalculated: newDate.toString(),
				dateAppointed: null,
				completed: false
			};
			var time = newDate.getTime();
			if(fasterNotificationEnabled){
				newDate.setMonth(newDate.getMonth() - 3); // reset to actual date, TESTING
				time = newDate.getTime() + 1 * 60 * 1000; // present notification in the next minute
			}
			var title = meeting.titles[I18n.locale];
			var body = meeting.titles[I18n.locale] + "ist fällig am " + getMonthNameAndYear(new Date(meeting.dateCalculated), I18n.locale);
			var data = {type: 'notification-calculated', id: meeting.id, 
				titles: meeting.titles, dateCalculated: meeting.dateCalculated}
			_internScheduleNotification(title, body, data, time);
			dispatch( { type: ADD_MEETING, meeting });
		}
	  const checks = schema.checks;
		checks.map((check, index) => {
			var i = check.start;
			while(i <= check.end){
				newDate = actualOpDate
				newDate.setMonth(newDate.getMonth() + i);
				var meeting = {
					id: "" + index + i,
					checkId: check.id,
					titles: check.names,
					dateCalculated: newDate.toString(),
					dateAppointed: null,
          completed: false
				};
				var time = newDate.getTime();
				if(fasterNotificationEnabled){
					newDate.setMonth(newDate.getMonth() - i); // reset to actual date, TESTING
					time = newDate.getTime() + 1 * 60 * 1000 + i * 1000; // present notification in the next minute + i seconds
				}
				var title = meeting.titles[I18n.locale];
				var body = meeting.titles[I18n.locale] + " ist fällig im " + getMonthNameAndYear(new Date(meeting.dateCalculated), I18n.locale);
				var data = {type: 'notification-calculated', id: meeting.id, 
					titles: meeting.titles, dateCalculated: meeting.dateCalculated}
				_internScheduleNotification(title, body, data, time);
				dispatch( { type: ADD_MEETING, meeting });
				i += check.repeatEach;
			}
		})
	}
}

async function _internScheduleNotification(title, body, data, time) {
	let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);
	if (Constants.isDevice && result.status !== 'granted') {
		console.log('You should enable notifications for this app otherwise you will not know when your timers expire!');
		return;
	}
	const _notificationId = await scheduleLocalNotification(title, body, data, time);
	//console.log(title + " - notificationId: " + _notificationId);
}


export const resetStore = () => {
	Notifications.cancelAllScheduledNotificationsAsync();
  return { type: RESET }
}
