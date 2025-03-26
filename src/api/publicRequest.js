import { objectToQuery } from "../utils/Utils";
import httpClient from "./httpClient";
import { LIST_BANNER, LIST_MINISTRIES, LIST_RESOURCE } from "./URLs";


export const fetchBanners = async () => {
    const res = await httpClient.get(LIST_BANNER).then(res => res.data).catch(error => { throw error });
    return res;
};

export const fetchMinistryPartner = async () => {
    const res = await httpClient.get(LIST_MINISTRIES).then(res => res.data).catch(error => { throw error });
    return res;
};

export const fetchResource = async (query) => {
    const res = await httpClient.get(objectToQuery(LIST_RESOURCE, query)).then(res => res.data).catch(error => { throw error });
    return res;
};