import * as types from '../constants/ActionsTypes'
import { CLIENT_ID, SCOPES, TABLE_ID } from '../constants/Config'
import { browserHistory } from 'react-router'

export function getTasks(id) {
	return (dispatch) => {
		if (gapi.client.sheets) {
			dispatch({
				type: types.GET_TASKS.REQUEST
			});

			gapi.client.sheets.spreadsheets.values.get({
					"spreadsheetId": id,
					"range": 'A1:D'
			}).then((response) => {
				console.log(response);
				if (response && response.status == 200) {
					dispatch({
						type: types.GET_TASKS.SUCCESS,
						payload: response.result.values || []
					});
				} else {
					dispatch({
						type: types.GET_TASKS.ERROR
					});
				}
			});
		}
	}
}


export function setCurrent(arr) {
	return {
		type: types.SET_CURRENT,
		payload: arr
	}
}
