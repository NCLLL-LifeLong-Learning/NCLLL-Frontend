import React, { useContext, useEffect, useMemo, useState } from 'react'
import ResourceList from './components/ResourceList'
import { Button, DatePicker, Divider, Input, Select } from 'antd';
import { useTranslation } from 'react-i18next';
import { useQuery } from '@tanstack/react-query';
import { CACHE_TIME, MINISTRIES, RESOURCES, STALE_TIME } from '../../../constants/CacheAPI';
import { fetchAllResource, fetchMinistryPartner, fetchResource } from '../../../api/publicRequest';
import { LanguageContext } from '../../../i18n/LanguageProvider';
import { useLocation, useParams } from 'react-router';
import dayjs from 'dayjs';

export default function AllResourcePage() {
  const { t } = useTranslation();
  const { lang } = useContext(LanguageContext);
  const { type } = useParams();
  const location = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const [filter, setFilter] = useState({
    limit: 10,
    page: 1,
    lang: lang,
    type: type,
    year: undefined,
    source: undefined,
    keyword: ""
  });

  const { data: resourceData, isLoading: isResourceLoading, refetch } = useQuery({
    queryKey: [RESOURCES, filter],
    queryFn: () => fetchAllResource(filter),
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });

  const { dataSource, total } = useMemo(() => {
    let res = resourceData;
    if (res?.code === 200 && !isResourceLoading) {
      return {
        total: res?.data?.meta?.total_count || 0,
        dataSource: [...res?.data?.results?.map(data => ({
          ...data,
          contentType: data?.contentType,
          originalItem: data?.originalItem,
          _id: data?._id,
        }))]
      };
    } else {
      return {
        total: res?.total || 10,
        dataSource: Array.from({ length: 10 }, (_, index) => ({
          skeleton: true,
        }))
      }
    }

  }, [resourceData, isResourceLoading])

  const handleSearch = () => {
    setFilter({ ...filter, keyword: searchValue })
  }

  const { data: ministryData, isLoading: isMinistryLoading } = useQuery({
    queryKey: [MINISTRIES],
    queryFn: fetchMinistryPartner,
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });

  const ministriesOptions = useMemo(() => {
    let res = ministryData;
    if (res?.code === 200 && !isMinistryLoading) {
      return [...res?.data.map(data => ({
        label: data[lang]?.name,
        value: data?._id,
      }))];
    } else {
      return [
        // imageUrl: "/assets/images/partner/partner-" + title + ".png",
        // name: listTitle[title - 1]
      ];
    }
  }, [ministryData, isMinistryLoading, lang])


  useEffect(() => {
    setFilter({ ...filter, type: type || "", lang: lang || "", page: 1, keyword: location?.state?.search });
  }, [type, lang, location])

  useEffect(() => {
    setSearchValue(location?.state?.search);
  }, [location])

  const datePickerChange = (date, dateString) => {
    setFilter({ ...filter, year: dateString || undefined });
  };

  return (
    <div>
      <div className='font-bold text-4xl'>{t("Resources")}</div>
      <div className='flex-col gap-5 lg:flex-row flex justify-between mt-[2rem]'>
        <div className='grid grid-cols-1 w-full lg:w-[50%] lg:flex gap-5'>
          <div className='col-span-1 flex gap-3 items-center'>
            {t("Ministry")}:
            <Select
              showSearch
              allowClear
              className='w-full min-w-[9.375rem]'
              placeholder={t("All")}
              value={filter?.source}
              onChange={(value) => setFilter({ ...filter, source: value })}
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
              options={ministriesOptions}
            />
          </div>

          <div className='col-span-1 flex gap-3 items-center'>
            {t("Year")}:
            <DatePicker
              className='w-full min-w-[9.375rem]'
              onChange={datePickerChange}
              picker="year"
              value={filter?.year ? dayjs(filter?.year) : undefined}
              placeholder={t("Select year")}
            />
          </div>
        </div>
        <div className='flex gap-3 w-full lg:w-[50%]'>
          <Input placeholder={t('Search')} onChange={(event) => setSearchValue(event.target.value)} value={searchValue} />
          <Button className="std-btn !px-[2.5rem]" onClick={handleSearch}>{t("Search")}</Button>
        </div>
      </div>

      <Divider />

      <div className='mt-[3rem]'>
        <ResourceList
          loading={isResourceLoading}
          pageSize={filter.limit}
          dataSource={dataSource}
          total={total}
          refetch={refetch}
          currentPage={filter.page}
          setCurrentPage={(value) => setFilter({ ...filter, page: value })}
        />
      </div>
    </div>
  )
}
