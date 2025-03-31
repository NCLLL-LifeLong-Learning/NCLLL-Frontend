import React, { useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import TiptapEditor from '../../../AppTest';
import { useQuery } from '@tanstack/react-query';
import { BLOGS, CACHE_TIME, STALE_TIME } from '../../../constants/CacheAPI';
import { fetchBlogsDetail } from '../../../api/publicRequest';
import { LanguageContext } from '../../../i18n/LanguageProvider';
import { Divider, Skeleton } from 'antd';

export default function DynamicDetailPage(props) {
    const { t } = useTranslation();
    const { id } = useParams();
    const { lang } = useContext(LanguageContext);

    const { data, isLoading } = useQuery({
        queryKey: [BLOGS, id],
        queryFn: () => fetchBlogsDetail(id),
        staleTime: STALE_TIME,
        cacheTime: CACHE_TIME,
    });

    const dataSource = useMemo(() => {
        let res = data;
        if (res?.code === 200 && !isLoading) {
            return { ...res?.data };
        } else {
            return {
                total: res?.total || 10,
                dataSource: Array.from({ length: 10 }, (_, index) => ({
                    skeleton: true,
                }))
            }
        }
    }, [data, isLoading])

    return (
        <div className='dynamic-detail-page'>
            {isLoading ?
                <Skeleton.Input active className='!h-[40px] !w-full' />
                :
                <div className='detail-page-title'>{t(dataSource && dataSource[lang]?.title)}</div>
            }

            <Divider />

            {isLoading ?
                <Skeleton.Input active className='!h-[80vh] !w-full' />
                :
                <TiptapEditor jsonData={(dataSource && dataSource[lang]?.document?.content) || {}} />
            }
        </div>
    )
}
