import { List, Skeleton } from 'antd';
import React, { useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { LanguageContext } from '../../../i18n/LanguageProvider';
import { fetchMinistryPartner } from '../../../api/publicRequest';
import { CACHE_TIME, MINISTRIES, STALE_TIME } from '../../../constants/CacheAPI';

export default function MemberMinistries() {
  const { t } = useTranslation();
  const { lang } = useContext(LanguageContext);

  const { data, isLoading } = useQuery({
    queryKey: [MINISTRIES],
    queryFn: fetchMinistryPartner,
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });

  const dataSource = useMemo(() => {
    let res = data;
    if (res?.code === 200 && !isLoading) {
      return [...res?.data.map(data => ({
        imageUrl: data[lang]?.imageUrl,
        name: data[lang]?.name,
      }))];
    } else {
      if (isLoading) {
        return Array.from({ length: 10 }, (_, index) => ({
          imageUrl: "",
          name: "",
          skeleton: true
        }));;
      } else {
        return [
          // imageUrl: "/assets/images/partner/partner-" + title + ".png",
          // name: listTitle[title - 1] 
        ];
      }
    }
  }, [data, isLoading, lang])

  return (
    <div className='flex flex-col gap-[1.875rem]'>
      <div>
        {t("The NEC has an important role to play in encouraging ministries and relevant institutions to provide support and lifelong learning, for which member ministries include:")}
      </div>

      <List
        grid={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
        dataSource={dataSource}
        renderItem={(record) => {
          if (isLoading) {
            return <div className='py-[1.25rem] px-[0.625rem]'>
              <div className='gap-3 flex flex-col shadow-lg border border-gray-300 p-[1.875rem] w-full rounded-lg'>
                <Skeleton.Image active={true} className="!w-full !aspect-square !h-full" />
              
                <Skeleton.Input active={true} className="!w-full" />
              </div>
            </div>
          }

          return <div className='py-[1.25rem] px-[0.625rem]'>
            <div className='gap-3 flex flex-col shadow-lg border border-gray-300 p-[1.875rem] w-full rounded-lg'>
              <img className='w-full !aspect-square h-full object-contain' src={record.imageUrl} alt={record.imageUrl} />
              <div className='partner-title text-center'>{record.name}</div>
            </div>
          </div>
        }}
      />
    </div>
  )
}
