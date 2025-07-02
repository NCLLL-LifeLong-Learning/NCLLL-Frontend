import { useQuery } from '@tanstack/react-query';
import { List } from 'antd';
import React, { useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next';
import { CACHE_TIME, MODULES, STALE_TIME } from '../../../constants/CacheAPI';
import { fetchModules } from '../../../api/publicRequest';
import { LanguageContext } from '../../../i18n/LanguageProvider';
import { NavLink } from 'react-router-dom';
import { MODULES_TYPE } from '../../../constants/Bridge';

export default function LifelongLearningForAll() {
  const { t } = useTranslation();
  const { lang } = useContext(LanguageContext);

  const { data, isLoading } = useQuery({
    queryKey: [MODULES, { mainCategory: MODULES_TYPE.FOCUS_AREA, subCategory: "", limit: 100 }],
    queryFn: () => fetchModules({ mainCategory: MODULES_TYPE.FOCUS_AREA, subCategory: "", limit: 100 }),
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });

  const dataSource = useMemo(() => {
    let res = data;
    if (res?.code === 200 && !isLoading) {
      return [...res?.data?.results];
    } else {
      return Array.from({ length: 10 }, (_, index) => ({
        skeleton: true,
      }))
    }
  }, [data, isLoading])

  return (
    <div className='flex flex-col gap-[1.875rem]'>
      <div>
        {t("The NEC has an important role to play in encouraging ministries and relevant institutions to provide support and lifelong learning, for which member ministries include:")}
      </div>
      <List
        grid={{ xxl: 3, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}
        dataSource={dataSource}
        renderItem={(data) => {
          return <div className='p-[0.313rem] md:p-[0.938rem]'>
            <NavLink role='button' to={"/focus-area/" + data?._id}>
              <div className='std-feature-card-wrapper'>
                <img className="std-feature-image" src={data?.cover} alt={data?.cover} />
                <div className='custom-feature-blur w-full !absolute bottom-0 min-h-[7.5rem] !rounded-none p-4'>
                  <p>
                    {t(data && data[lang]?.title)}
                  </p>
                </div>
              </div>
            </NavLink>
          </div>;
        }}
      />
    </div>
  )
}
