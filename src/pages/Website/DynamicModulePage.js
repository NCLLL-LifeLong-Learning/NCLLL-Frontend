import { Skeleton } from 'antd';
import React, { useContext, useMemo } from 'react'
import TextEditor from '../../components/TextEditor/TextEditor';
import { useParams } from 'react-router';
import { LanguageContext } from '../../i18n/LanguageProvider';
import { useQuery } from '@tanstack/react-query';
import { CACHE_TIME, STALE_TIME } from '../../constants/CacheAPI';
import { fetchModulesDetail } from '../../api/publicRequest';
import ModuleBlogComponent from '../ModuleBlogComponent';

export default function DynamicModulePage(props) {
  const { module, blog } = props;
  const { id } = useParams();
  const { lang } = useContext(LanguageContext);

  const { data, isLoading } = useQuery({
    queryKey: [module, id],
    queryFn: () => fetchModulesDetail(id),
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
        <TextEditor jsonData={(dataSource && dataSource[lang]?.document?.content) || {}} />
      }

      {
        blog &&
        <div className='py-[1.25rem]'>
          <ModuleBlogComponent moduleId={id} />
        </div>
      }
    </div>
  )
}
