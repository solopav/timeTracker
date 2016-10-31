import * as types from '../constants/ActionsTypes'
import { CLIENT_ID, SCOPES, TABLE_ID } from '../constants/Config'
import { browserHistory } from 'react-router'


export function saveTask(action, tableId, obj) {
	return (dispatch) => {
		dispatch({
		type: types.SAVE_TASK.REQUEST
		});

		var range = `A${obj.id}:D`;

		gapi.client.sheets.spreadsheets.values[action]({
			spreadsheetId: tableId,
			valueInputOption: 'USER_ENTERED',
			range: range,
			values: [[obj.id, obj.start, obj.end, obj.what]]
		}).then((result) => {
			if (result && result.status == 200) {
				dispatch({
					type: types.SAVE_TASK.SUCCESS
				});

				const path = `/list/`;
				browserHistory.push(path);
			} else {
				dispatch({
					type: types.SAVE_TASK.ERROR
				});
			}
		});
	}
}
