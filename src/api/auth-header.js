import {btoa} from 'abab';
import Config from 'react-native-config';
//const credentials = btoa('hpt.admin:hpthnadmin');
const credentials = btoa(Config.REACT_APP_CREDENTIALS);
const host = Config.REACT_APP_SM_HOST;
export function authPostHeader(length) {
  const headers = {
    'Authorization': `Basic ${credentials}`,
    'Content-Type': 'application/json',
    'Content-Length': `${length}`,
    'Host': `${host}`,
  };
  return headers;
}

export function authGetHeader() {
  const headers = {
    'Authorization': `Basic ${credentials}`,
    'Host': `${host}`,
  };
  return headers;
}
