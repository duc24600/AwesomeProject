import {btoa} from 'abab';

const credentials = btoa('hpt.admin:hpthnadmin');

export function authPostHeader(length) {
  const headers = {
    'Authorization': `Basic ${credentials}`,
    'Content-Type': 'application/json',
    'Content-Length': `${length}`,
    'Host': '10.4.18.42:13081',
  };
  return headers;
}

export function authGetHeader() {
  const headers = {
    'Authorization': `Basic ${credentials}`,
    'Host': '10.4.18.42:13081',
  };
  return headers;
}
