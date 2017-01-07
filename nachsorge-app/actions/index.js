import {
  Asset,
  Font,
  Notifications,
} from 'exponent';

import Exponent from 'exponent';

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
export const UPDATE_OPDATE = 'UPDATE_OPDATE'
export const UPDATE_SCHEMA = 'UPDATE_SCHEMA'
export const UPDATE_SCHEMA_LOADED = 'UPDATE_SCHEMA_LOADED'
export const UPDATE_MIDATA_ENABLED = 'UPDATE_MIDATA_ENABLED'

export const UPDATE_TNM_ENABLED = 'UPDATE_TNM_ENABLED'

export const ADD_MEETING = 'ADD_MEETING'
export const UPDATE_MEETING_APPOINTED_DATE = 'UPDATE_MEETING_APPOINTED_DATE'

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


export const addMeeting = (meeting) => {
  return { type: ADD_MEETING, meeting }
}

export const updateAppointedDate = (meetingId, appointedDate) => {
  return { type: UPDATE_MEETING_APPOINTED_DATE, payload: { id: meetingId, date: appointedDate} }
}

export const loadSchemas = (schemas) => {
  return { type: LOAD_SCHEMAS, schemas }
}

export const calculateMeetingsFromScheme = (scheme, opDate) => {
	//Exponent.Notifications.scheduleLocalNotificationAsync({title:'Test' , data: {}, ios: {sound: true}, android: {vibrate: true,},}, {time: (new Date()).getTime()+3000});
	return (dispatch) => {
	  const checks = scheme.checks;
		checks.map((check, i) => {
			var i = check.start;
			while(i <= check.end){
				i += check.repeatEach;
				var newDate = new Date(opDate);
				newDate.setMonth(newDate.getMonth() + i);
				var meeting = {
					id: i,
					checkId: check.id,
					titles: check.names,
					dateCalculated: newDate.toString(),
					dateAppointed: null,
          completed: false
				};
				dispatch( { type: ADD_MEETING, meeting });
			}
		})
	}

}

export const resetStore = () => {
  return { type: RESET }
}
