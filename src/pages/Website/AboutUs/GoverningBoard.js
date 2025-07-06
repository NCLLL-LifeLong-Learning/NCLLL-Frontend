import React, { useContext, useMemo, useState } from 'react'
import { List, Select, Skeleton } from 'antd'
// import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { CACHE_TIME, GOVERMENT, STALE_TIME } from '../../../constants/CacheAPI';
import { fetchGoverments } from '../../../api/publicRequest';
import { LanguageContext } from '../../../i18n/LanguageProvider';

export default function GoverningBoard() {
  const { t } = useTranslation();
  const { lang } = useContext(LanguageContext);
  const [query, setQuery] = useState({
    generation: 0
  });
  const { data, isLoading } = useQuery({
    queryKey: [GOVERMENT, query],
    queryFn: () => fetchGoverments(query),
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });

  const { dataSource, generations, currentGeneration } = useMemo(() => {
    const res = data;
    if (res?.code === 200 && !isLoading) {
      return {
        currentGeneration: res?.data?.currentGeneration || 0,
        generations: res?.data?.generations || [],
        dataSource: [...res?.data?.list]
      };
    } else {
      return {
        currentGeneration: 0,
        generations: [],
        dataSource: Array.from({ length: 3 }, (_, index) => ({
          skeleton: true,
          members: Array.from({ length: 6 }, (_, index) => ({
            skeleton: true
          }))
        }))
      };
    }
  }, [data, isLoading])

  const goToDetail = (record) => {
    // navigate("/about-us/board/" + record._id);
  }

  return (
    <div className='flex flex-col gap-[1.875rem] w-[90vw] md:max-w-[70vw]'>
      <Select
        value={query.generation > 0 ? query.generation : currentGeneration}
        options={generations?.map((item) => {
          const startYear = 2018 + (item - 1) * 5;
          const endYear = startYear + 5;
          return {
            value: item,
            label: t("Year") + `: ${startYear}–${endYear}`
          };
        })}
        onChange={(value) => {
          setQuery(pre => ({ ...pre, generation: value }));
        }}
      />

      {
        dataSource.map(data => <div>
          {
            isLoading
              ?
              <Skeleton.Input active className='goverment-title !w-full' />
              :
              <h1 className='goverment-title font-khmer'>{t(data?.position[lang]?.title)}</h1>
          }

          {
            isLoading
              ?
              data.members?.length === 1 ? <div className='flex-col md:flex-row flex gap-[1.25rem] p-[1.25rem]' onClick={() => goToDetail(data.members[0])}>
                <div className='!w-full md:!w-[25%] max-w-[25rem]'>
                  <Skeleton.Image active className="!w-full !h-full !aspect-square " />
                </div>
                <div className='text-center md:text-start goverment-item-name flex gap-3 flex-col justify-center'>
                  <Skeleton.Input active className='!w-full' />
                  <Skeleton.Input active className='!w-full' />
                </div>
              </div>
                :
                <List
                  grid={{
                    xs: 1,
                    sm: 1,
                    md: 1,
                    lg: 1,
                    xl: 2,
                    xxl: 2,
                  }}
                  renderItem={(item) => {
                    return <List.Item>
                      <div className='flex-col md:flex-row flex gap-[1.25rem] px-[1.25rem] py-[0.625rem]' onClick={() => goToDetail(item)}>
                        <div className='!w-full md:!w-[25%] max-w-[25rem]'>
                          <Skeleton.Image active className="!w-full !h-full !aspect-square" />
                        </div>
                        <div className='text-center md:text-start goverment-item-name flex gap-1 flex-col justify-center'>
                          <Skeleton.Input active className='!w-full' />
                          <Skeleton.Input active className='!w-full' />
                        </div>
                      </div>
                    </List.Item>
                  }}
                  dataSource={data.members}
                />
              :
              data.members?.length === 1 ? <div className='flex-col md:flex-row flex gap-[1.25rem] p-[1.25rem]' onClick={() => goToDetail(data.members[0])}>
                <img className="!w-full !h-full !aspect-square md:!w-[25%] max-w-[25rem]" src={data.members[0]["imageUrl_" + lang]} alt={data.members[0]["imageUrl_" + lang]} />
                <div className='text-center md:text-start goverment-item-name flex gap-3 flex-col justify-center'>
                  <div>{data.members[0].name_kh}</div>
                  <div>{data.members[0].name_en}</div>
                </div>
              </div>
                :
                <List
                  grid={{
                    xs: 1,
                    sm: 1,
                    md: 1,
                    lg: 1,
                    xl: 2,
                    xxl: 2,
                  }}
                  renderItem={(item) => {
                    return <List.Item>
                      <div className='flex-col md:flex-row flex gap-[1.25rem] px-[1.25rem] py-[0.625rem]' onClick={() => goToDetail(item)}>
                        <img className="!w-full !h-full !aspect-square md:!w-[25%] max-w-[25rem]" src={item["imageUrl_" + lang]} alt={item["imageUrl_" + lang]} />
                        <div className='text-center md:text-start goverment-item-name flex gap-1 flex-col justify-center'>
                          <a>{item.name_kh}</a>
                          <p>{item.name_en}</p>
                        </div>
                      </div>
                    </List.Item>
                  }}
                  dataSource={data.members}
                />
          }
        </div>)
      }
    </div>
  )
}
