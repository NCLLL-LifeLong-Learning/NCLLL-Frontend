import { objectToQuery } from "../utils/Utils";
import httpClient from "./httpClient";
import { DETAIL_BLOG, GOVERMENT_DETAIL, LIST_ALL_RESOURCE, LIST_BANNER, LIST_BLOG, LIST_GOVERMENT, LIST_MINISTRIES, LIST_PARTNER, LIST_RESOURCE } from "./URLs";


export const fetchBanners = async () => {
    const res = await httpClient.get(LIST_BANNER).then(res => res.data).catch(error => { throw error });
    return res;
};

export const fetchMinistryPartner = async () => {
    const res = await httpClient.get(LIST_MINISTRIES).then(res => res.data).catch(error => { throw error });
    return res;
};

export const fetchAllResource = async (query) => {
    const res = await httpClient.get(objectToQuery(LIST_ALL_RESOURCE, query)).then(res => res.data).catch(error => { throw error });
    return res;
};

export const fetchBlogsDetail = async (id) => {
    const res = await httpClient.get(objectToQuery(DETAIL_BLOG.replace(":id", id))).then(res => res.data).catch(error => { throw error });
    return res;
};

export const fetchBlogs = async (query) => {
    const res = await httpClient.get(objectToQuery(LIST_BLOG, query)).then(res => res.data).catch(error => { throw error });
    return res;
};

export const fetchOurPartner = async () => {
    const res = await httpClient.get(LIST_PARTNER).then(res => res.data).catch(error => { throw error });
    return res;
};

export const fetchResource = async (query) => {
    const res = await httpClient.get(objectToQuery(LIST_RESOURCE, query)).then(res => res.data).catch(error => { throw error });
    return res;
};

export const fetchGovermentDetail = async (id) => {
    const res = await httpClient.get(GOVERMENT_DETAIL.replace(":id", id)).then(res => res.data).catch(error => { throw error });
    return res;
};

export const fetchGoverments = async () => {
    const res = await httpClient.get(LIST_GOVERMENT).then(res => res.data).catch(error => { throw error });
    return res;
};