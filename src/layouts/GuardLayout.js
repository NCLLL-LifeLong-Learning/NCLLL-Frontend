import React, { useContext, useEffect, useMemo } from 'react'
import { Outlet, useLocation, useOutletContext } from 'react-router'
import { Divider } from 'antd';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { CACHE_TIME, MODULES, STALE_TIME } from '../constants/CacheAPI';
import { fetchModules } from '../api/publicRequest';
import { LanguageContext } from '../i18n/LanguageProvider';
import _ from 'lodash';
import ResourcePage from '../pages/Website/Documents/ResourcePage';

export default function GuardLayout(props) {
    const { t } = useTranslation();
    const { lang } = useContext(LanguageContext);
    const { title, description, route } = props;
    const contextParent = useOutletContext();
    const location = useLocation();
    const { currentRoute, setTitle, setTreeDescription, setTreeData } = contextParent

    const { data, isLoading } = useQuery({
        queryKey: [MODULES, { mainCategory: "", subCategory: "", limit: 100 }],
        queryFn: () => fetchModules({ mainCategory: "", subCategory: "", limit: 100 }),
        staleTime: STALE_TIME,
        cacheTime: CACHE_TIME,
    });

    const treeData = useMemo(() => {
        const res = data;

        if (res?.code === 200 && !isLoading) {
            const modules = {
                "program.title": {
                    key: "Program",
                    path: "/program/",
                    endRoute: [
                        {
                            title: 'Engagement',
                            label: 'Engagement',
                            key: '/program/engagement',
                            path: "/program/engagement",
                            children: []
                        }
                    ]
                },
                "our_work.title": {
                    key: "Focus Area",
                    path: "/focus-area/",
                    startRoute: [
                        {
                            title: 'Lifelong Learning for all',
                            label: 'All',
                            key: 'All',
                            path: "/focus-area/all",
                            children: []
                        }
                    ]
                }
            };
            let groupList = _.groupBy(res?.data?.results, (data) => data.mainCategory)

            let key = modules[title]?.key;
            if (groupList[key]?.length > 0) {
                return [
                    modules[title].startRoute,
                    groupList[key].map(item => ({
                        title: item[lang]?.title,
                        label: item[lang]?.title,
                        key: item?._id,
                        path: modules[title]?.path + item?._id,
                        children: []
                    })),
                    modules[title].endRoute,
                ].filter(Boolean).flat();
            }
        }

        return route
    }, [route, lang, data, isLoading, location])

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
                <div className='detail-page-title'>{t(currentRoute?.preferTitle || currentRoute?.title)}</div>
                <Divider className='h-[20px] p-0 m-0' />
            </>}

            <div className={!currentRoute?.noHeader ? "py-0" : "py-[1.25rem]"}>
                <Outlet context={contextValue} />
            </div>
        </div>
    )
}
