import { objectToQuery } from "../utils/Utils";
import httpClient from "./httpClient";
import { DETAIL_BLOG, FOCUS_AREA_DETAIL, GET_MODULES, GET_MODULES_DETAIL, GOVERMENT_DETAIL, LIST_ALL_RESOURCE, LIST_BANNER, LIST_BLOG, LIST_FOCUS_AREA, LIST_GOVERMENT, LIST_MINISTRIES, LIST_MODULE_BANNER, LIST_PARTNER, LIST_RESOURCE } from "./URLs";


export const fetchBanners = async () => {
    const res = await httpClient.get(LIST_MODULE_BANNER + "?category[]=banner").then(res => res.data).catch(error => { throw error });
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

// modules
export const fetchModules = async ({ mainCategory, subCategory, limit }) => {
    const res = await httpClient.get(GET_MODULES + `?mainCategory=${mainCategory}&subCategory=${subCategory}&limit=${limit}`).then(res => res.data).catch(error => { throw error });
    return res;
};

export const fetchModulesDetail = async (id) => {
    const res = await httpClient.get(GET_MODULES_DETAIL.replace(":id", id)).then(res => res.data).catch(error => { throw error });
    return res;
};

export const fetchFocusArea = async (query) => {
    const res = await httpClient.get(objectToQuery(LIST_FOCUS_AREA, query)).then(res => res.data).catch(error => { throw error });
    return res;
};

export const fetchFocusAreaDetail = async (id) => {
    const res = await httpClient.get(FOCUS_AREA_DETAIL.replace(":id", id)).then(res => res.data).catch(error => { throw error });
    return res;
};

export const fetchOurPartner = async (query) => {
    const res = await httpClient.get(objectToQuery(LIST_PARTNER, query)).then(res => res.data).catch(error => { throw error });
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