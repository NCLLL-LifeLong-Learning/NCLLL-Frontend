import React, { useContext, useMemo } from 'react'
import { List, Skeleton } from 'antd'
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { CACHE_TIME, GOVERMENT, STALE_TIME } from '../../../constants/CacheAPI';
import { fetchGoverments } from '../../../api/publicRequest';
import { LanguageContext } from '../../../i18n/LanguageProvider';

export default function GoverningBoard() {
  const { t } = useTranslation();
  const { lang } = useContext(LanguageContext);
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: [GOVERMENT],
    queryFn: fetchGoverments,
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });

  const dataSource = useMemo(() => {
    const res = data;
    if (res?.code === 200 && !isLoading) {
      return [...res?.data];
    } else {
      return Array.from({ length: 3 }, (_, index) => ({
        skeleton: true,
        members: Array.from({ length: 6 }, (_, index) => ({
          skeleton: true
        }))
      }));
    }
  }, [data, isLoading])

  const goToDetail = (record) => {
    navigate("/about-us/board/" + record._id);
  }

  return (
    <div className='flex flex-col gap-[30px] w-[90vw] md:max-w-[70vw]'>
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
              data.members?.length === 1 ? <div className='flex-col md:flex-row flex gap-[20px] p-[20px]' onClick={() => goToDetail(data.members[0])}>
                <div className='!w-full md:!w-[25%] max-w-[400px]'>
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
                      <div className='flex-col md:flex-row flex gap-[20px] px-[20px] py-[10px]' onClick={() => goToDetail(item)}>
                        <div className='!w-full md:!w-[25%] max-w-[400px]'>
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
              data.members?.length === 1 ? <div className='flex-col md:flex-row flex gap-[20px] p-[20px]' onClick={() => goToDetail(data.members[0])}>
                <img className="!w-full !h-full !aspect-square md:!w-[25%] max-w-[400px]" src={data.members[0]["imageUrl_" + lang]} alt={data.members[0]["imageUrl_" + lang]} />
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
                      <div className='flex-col md:flex-row flex gap-[20px] px-[20px] py-[10px]' onClick={() => goToDetail(item)}>
                        <img className="!w-full !h-full !aspect-square md:!w-[25%] max-w-[400px]" src={item["imageUrl_" + lang]} alt={item["imageUrl_" + lang]} />
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
