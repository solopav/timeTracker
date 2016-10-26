import * as types from '../utils/Actions'
import { CLIENT_ID, SCOPES, TABLE_ID } from '../utils/constants'
import { browserHistory } from 'react-router'
import {  driveLink } from '../utils/constants'


export function checkLocalStorage() {
    var tableId = localStorage.getItem('timeTrackerTableId');

    return (dispatch) => {
        if (tableId) {
            var request = gapi.client.drive.files.get({
                'fileId': tableId
            });
            request.execute(function(resp) {
                if (resp.id) {
                    dispatch({
                        type: types.SET_CURRENT_TABLE,
                        payload: resp.id
                    });

                    localStorage.setItem('timeTrackerTableId',resp.id);

                    return;
                }
            });
        }

        dispatch({
            type: types.CHECK_LOCALSTORAGE_END
        })
    }
}

export function setCurrentTable(id) {
    return (dispatch) => {
        dispatch({
            type: types.SET_CURRENT_TABLE,
            payload: id
        });

        const path = `/list/`;
        browserHistory.push(path);
    }
}

export function createTable() {
    return (dispatch) => {
        var body = {
            'title': 'ТЕСТОВЫЙФАЙЛ',
            'mimeType': 'application/vnd.google-apps.spreadsheet'
        };
        var request = gapi.client.drive.files.create({
            'resource': body
        });
        request.execute(function(resp) {
            dispatch({
                type: types.SET_CURRENT_TABLE,
                payload: resp.id
            });

            localStorage.setItem('timeTrackerTableId',resp.id);

            const path = `/list/`;
            browserHistory.push(path);
        });
    }
}
