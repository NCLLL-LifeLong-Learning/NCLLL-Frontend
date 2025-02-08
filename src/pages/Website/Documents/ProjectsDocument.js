import React, { useCallback, useEffect, useState } from 'react'
import ResourceList from './components/ResourceList';
import { Button, Divider, Input, Select } from 'antd';
import { debounce } from 'lodash';
import { BASE_ASSET_URL } from '../../../constants/Url';
import { RESOURCE_TYPE } from '../../../constants/Bridge';
import { useTranslation } from 'react-i18next';

export default function ProjectsDocument() {
  const { t } = useTranslation();
  const pageSize = 10;
  // const [pageSize, setPageSize] = useState(10);
  const [loading, setLoading] = useState(true);
  const [dataSource, setDataSource] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = () => {
    try {
      setLoading(true);
      const fileList = Array.from({ length: 50 }, (_, index) => ({
        type: RESOURCE_TYPE.project,
        _id: index,
        imageUrl: `${BASE_ASSET_URL}/segmented/event-news.png`,
        title: `[${RESOURCE_TYPE.project}] - National Policy on Lifelong Learning ${index + 1}`,
        source: "Ministry " + index,
        tags: "Tags " + index,
        publishedTS: "01/01/2024",
        lang: "KH",
      }));
      setDataSource([...fileList])
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const handleSearch = () => {
    callBackFetchData();
  }

  const callBackFetchData = useCallback(debounce(fetchData, 300), [fetchData]);

  useEffect(() => {
    callBackFetchData();

    return callBackFetchData.cancel;
  }, [])

  return (
    <div>
      <div className='font-bold text-4xl'>{t("Resources")}</div>
      <div className='flex justify-between mt-[2rem]'>
        <div className='w-[50%] flex gap-[30px]'>
          <div className='flex gap-3 items-center'>
            {t("Ministry")}:
            <Select
              showSearch
              allowClear
              className='min-w-[150px]'
              placeholder={t("All")}
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
              options={[
                { value: '1', label: 'Ministry 1' },
                { value: '2', label: 'Ministry 2' },
                { value: '3', label: 'Ministry 3' },
              ]}
            />
          </div>

          <div className='flex gap-3 items-center'>
            {t("Year")}:
            <Select
              showSearch
              allowClear
              className='min-w-[150px]'
              placeholder={t("All")}
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
              options={[
                { value: '0', label: '2025' },
                { value: '1', label: '2024' },
                { value: '2', label: '2023' },
                { value: '3', label: '2022' },
              ]}
            />
          </div>
        </div>
        <div className='flex gap-3 w-[50%]'>
          <Input placeholder={t('Search')} />
          <Button className="std-btn !px-[40px]" onClick={handleSearch}>{t("Search")}</Button>
        </div>
      </div>

      <Divider />

      <div className='mt-[3rem]'>
        <ResourceList
          loading={loading}
          pageSize={pageSize}
          dataSource={dataSource}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  )
}
