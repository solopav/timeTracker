import * as types from '../utils/Actions'
import { CLIENT_ID, SCOPES, TABLE_ID } from '../utils/constants'
import { browserHistory } from 'react-router'


export function saveTask(action, tableId, obj) {
    return (dispatch) => {
      dispatch({
        type: types.SAVE_TASK_REQUEST
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
            type: types.SAVE_TASK_OK
          });

          const path = `/list/`;
          browserHistory.push(path);
        } else {
          dispatch({
            type: types.SAVE_TASK_ERROR
          });
        }
      });
    }
}
