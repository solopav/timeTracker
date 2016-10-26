import * as types from '../utils/Actions'
import { CLIENT_ID, SCOPES, TABLE_ID } from '../utils/constants'
import { browserHistory } from 'react-router'
import axios from 'axios';

export function signIn(immediate) {
    return (dispatch) => {
        if (!gapi.auth) return;

        dispatch({
            type: types.SIGN_IN_SEND_QUERY
        });

        gapi.auth.authorize({
            client_id: CLIENT_ID,
            scope: SCOPES,
            immediate
        }, handleAuthResult);

        function handleAuthResult(authResult) {
            if (authResult && !authResult.error) {
                loadAPIs();
            } else {
                dispatch({
                    type: types.SIGN_IN_ERROR
                });
            }
        }

        function loadAPIs() {
            var discoveryUrl = 'https://sheets.googleapis.com/$discovery/rest?version=v4';
            gapi.client.load(discoveryUrl);

            gapi.client.load('drive', 'v3', function(data) {
                dispatch({
                    type: types.SIGN_IN_OK
                });

                const path = `/tables/`;
                browserHistory.push(path);
            });
        }
    }
}

export function signOut() {
    return (dispatch) => {
      var token = gapi.auth.getToken();
      if (token) {
        var accessToken = gapi.auth.getToken().access_token;
        if (accessToken) {
          var url = `https://accounts.google.com/o/oauth2/revoke?token=${accessToken}`;
          axios.get(url, {
            jsonp: 'callback',
            dataType: 'jsonp'
          });
        }
      }
      gapi.auth.setToken(null);
      gapi.auth.signOut();

      dispatch({
        type: types.SIGN_OUT
      });
      const path = `/`;
      browserHistory.push(path);
    }
}
