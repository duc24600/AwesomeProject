import axios from "axios";
import { authGetHeader, authPostHeader } from "./auth-header";
import Config from "react-native-config";
const BASE_ENDPOINT = 'http://10.4.18.42:13081/SM/9/rest';
//const BASE_ENDPOINT = Config.REACT_APP_SM_BASE_URL;
console.log(BASE_ENDPOINT);
const doGetById = async (obj) => {
    let url = BASE_ENDPOINT + `/${obj.collectionName}/${obj.id}`;
    return axios.get(url, { headers: authGetHeader })
        .then((respone) => {
            return respone.data;
        })
        .catch((error) => {
            return errorHandle(error);
        })
};

const doGetAll = async (obj) => {
    let url = BASE_ENDPOINT + `/${obj.collectionName}`;
    let params = {
        view: obj.view,
        start: obj.start,
        count: obj.count,
        query: obj.query,
        sort: obj.sort
    }
    return await axios.get(url, { headers: authGetHeader }, { params: params })
        .then((respone) => {
            return respone.data;
        })
        .catch((error) => {
            return errorHandle(error);
        })
};

const doAction = async (obj) => {
    let url = BASE_ENDPOINT + `/${obj.collectionName}/${obj.id}/action/${obj.action}`;
    let length = JSON.stringify(obj.reqBody).length;
    console.log("length",length)
    return await axios.post(url, { headers: authPostHeader(length) }, obj.reqBody)
        .then((respone) => {
            return respone.data;
        })
        .catch((error) => {
            return errorHandle(error);
        })
};

const doPut = async (obj) => {
    let url = BASE_ENDPOINT + `/${obj.collectionName}/${obj.id}`;
    console.log(url);
    let body = obj.reqBody;
    let length = body?JSON.stringify(body).length:0;
    console.log(length);
    return await axios.put(url, body, { headers: authPostHeader(length) })
        .then((respone) => {
            return respone.data;
        })
        .catch((error) => {
            return errorHandle(error);
        })
};

function errorHandle(error) {
    const errorData = {
        Messages: [
            "There were some errors, please check the system log."
        ]
    }
    if (error.response) {
        console.log("Response Error:", error);
    } else if (error.request) {
        console.log("Request Error:", error);
    } else {
        console.log("Error:", error);
    }
    return errorData;
}

const baseHandler = {
    doGetById,
    doGetAll,
    doPut,
    doAction
};

export default baseHandler;

