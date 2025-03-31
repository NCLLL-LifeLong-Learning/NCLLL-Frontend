import React, { useContext, useEffect, useMemo } from 'react'
import { Outlet, useOutletContext, useParams } from 'react-router'
import { Divider } from 'antd';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { CACHE_TIME, FOCUS_AREA, STALE_TIME } from '../constants/CacheAPI';
import { fetchFocusArea, fetchFocusAreaDetail } from '../api/publicRequest';
import { LanguageContext } from '../i18n/LanguageProvider';

export default function GuardLayout(props) {
    const { t } = useTranslation();
    const { lang } = useContext(LanguageContext);
    const { title, description, route } = props;
    const contextParent = useOutletContext();
    const { currentRoute, setTitle, setTreeDescription, setTreeData } = contextParent

    const { data, isLoading } = useQuery({
        queryKey: [FOCUS_AREA, { limit: 100 }],
        queryFn: () => fetchFocusArea({ limit: 100 }),
        staleTime: STALE_TIME,
        cacheTime: CACHE_TIME,
        enabled: title === "Focus Areas"
    });

    const treeData = useMemo(() => {
        let res = data;
        if (res?.code === 200 && !isLoading) {
            if (title === "Focus Areas") {
                return [{
                    title: 'Lifelong Learning for all',
                    label: 'All',
                    key: 'All',
                    path: "/focus-area/all",
                    children: []
                },
                ...res?.data?.results?.map(item => ({
                    title: item && item[lang]?.title,
                    label: item && item[lang]?.title,
                    key: item && item?._id,
                    path: "/focus-area/" + (item && item?._id),
                    children: []
                }))];
            }
        }
        return route
    }, [route, lang, data, isLoading]);

    useEffect(() => {
        setTitle(title);
        setTreeDescription(description);
        setTreeData([...treeData]);
    }, [treeData, title, description])

    const contextValue = {
        ...contextParent
    }

    return (
        <div className='w-full'>
            {!currentRoute?.noHeader && <>
                <div className='detail-page-title'>{t(currentRoute.title)}</div>
                <Divider />
            </>}

            <div className={!currentRoute?.noHeader ? "py-0" : "py-[20px]"}>
                <Outlet context={contextValue} />
            </div>
        </div>
    )
}
