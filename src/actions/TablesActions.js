import * as types from '../constants/ActionsTypes'
import { CLIENT_ID, SCOPES, TABLE_ID, driveLink } from '../constants/Config'
import { browserHistory } from 'react-router'


function setListTables(list) {
	return {
		type: types.SET_LIST_TABLES,
		payload: list
	}
}
function getListTables() {
	return (dispatch) => {
		var tables = JSON.parse(localStorage.getItem('timeTrackerTables')) || {};

		if (tables.list && tables.list.length) {
			dispatch(setListTables(tables.list));
		} else {
			var list = [];
			dispatch(setListTables(list));
		}
	}
}

function setLastTable(id) {
	return {
		type: types.SET_LAST_TABLE,
		payload: id
	}
}
function getLastTable() {
	return (dispatch) => {
		var tables = JSON.parse(localStorage.getItem('timeTrackerTables')) || {};

		if (tables.last && tables.last.id) {
			var request = gapi.client.drive.files.get({
				'fileId': tables.last.id
			});
			request.execute(function(resp) {
				if (resp.id) {
					dispatch(setLastTable(resp.id));

					return;
				}
			});
		}

		dispatch(setLastTable(''));
		return;
	}
}

function setLocalStorage(id) {
	return (dispatch) => {
		var tables = JSON.parse(localStorage.getItem('timeTrackerTables'));

		if (tables) {
			tables.last = {
				id : id,
				date : new Date() 
			};
			dispatch(setLastTable(tables.last.id));

			tables.list = tables.list || [];
			tables.list.push(tables.last);
			dispatch(setListTables(tables.list));
		} else {
			tables = {};

			tables.last = {
				id : id,
				date : new Date() 
			};

			tables.list = [];
			tables.list.push(tables.last);
		}

		localStorage.setItem('timeTrackerTables', JSON.stringify({
			last: tables.last,
			list: tables.list
		}));
	}
}

export function checkLocalStorage() {
	return (dispatch) => {
		dispatch(getListTables());
		dispatch(getLastTable());
	}
}

function createTableRequest() {
	return {
		type: types.CREATE_TABLE.REQUEST
	}
}

export function createTable() {
	return (dispatch) => {
		dispatch(createTableRequest());

		var body = {
			'mimeType': 'application/vnd.google-apps.spreadsheet'
		};
		var request = gapi.client.drive.files.create({
			'resource': body
		});
		request.execute(function(resp) {
			dispatch(setLocalStorage(resp.id));

			dispatch({
				type: types.CREATE_TABLE.SUCCESS
			});

			const path = `/list/`;
			browserHistory.push(path);
		});
	}
}

export function setCurrentTable(id) {
	return (dispatch) => {
		dispatch({
			type: types.SET_LAST_TABLE,
			payload: id
		});

		const path = `/list/`;
		browserHistory.push(path);
	}
}