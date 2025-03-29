import { Divider, List, Skeleton } from 'antd';
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next';
import TiptapEditor from '../../../AppTest';
import { useParams } from 'react-router';
import { LanguageContext } from '../../../i18n/LanguageProvider';
import { useQuery } from '@tanstack/react-query';
import { CACHE_TIME, FOCUS_AREA, STALE_TIME } from '../../../constants/CacheAPI';
import { fetchFocusAreaDetail } from '../../../api/publicRequest';

export default function FocusAreaPage() {
  const { t } = useTranslation();
  const { id } = useParams();
  const { lang } = useContext(LanguageContext);

  const { data, isLoading } = useQuery({
    queryKey: [FOCUS_AREA, id],
    queryFn: () => fetchFocusAreaDetail(id),
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });

  const dataSource = useMemo(() => {
    let res = data;
    if (res?.code === 200 && !isLoading) {
      return { ...res?.data };
    } else {
      return {}
    }
  }, [data, isLoading])

  return (
    <div className='dynamic-detail-page'>

      {isLoading ?
        <Skeleton.Input active className='!h-[80vh] !w-full' />
        :
        <TiptapEditor jsonData={(dataSource && dataSource[lang]?.document?.content) || {}} />
      }
    </div>
  )
}
