import axios from "axios";
import authHeader from "./auth-header";

const BASE_ENDPOINT = 'http://10.4.18.42:13081/SM/9/rest';

const doGetById = async (obj) => {
    let url = BASE_ENDPOINT + `/${obj.collectionName}/${obj.id}`;
    return axios.get(url, { headers: authHeader }).then((respone) => {
        return respone.data;
    });
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
    return await axios.get(url, { headers: authHeader }, { params: params }).then((respone) => {
        return respone.data;
    });
};

const doAction = async (obj) => {
    let url = BASE_ENDPOINT + `/${obj.collectionName}/${obj.id}/action/${obj.action}`;
    return await axios.post(url, { headers: authHeader }, obj.reqBody)
        .then((respone) => {
            return respone.data;
        })
        .catch((error) => {
            console.log(error);
        })
};

const baseHandler = {
    doGetById,
    doGetAll,
    doAction
};

export default baseHandler;

