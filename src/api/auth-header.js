import {btoa} from 'abab';

export default function authHeader(length) {
  const credentials = btoa('hpt.admin:hpthnadmin');
  const headers = {
    'Authorization': `Basic ${credentials}`,
    'Content-Type': 'application/json',
    'Content-Length': `${length}`,
    'Host': '10.4.18.42:13081',
  };
  return headers;
}
