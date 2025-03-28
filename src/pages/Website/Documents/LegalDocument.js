import React, { useCallback, useEffect, useState } from 'react'
import ResourceList from './components/ResourceList';
import { Button, Divider, Input, Select } from 'antd';
import { debounce } from 'lodash';
import { BASE_ASSET_URL } from '../../../constants/Url';
import { RESOURCE_TYPE } from '../../../constants/Bridge';
import { useTranslation } from 'react-i18next';

export default function LegalDocument() {
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
        type: RESOURCE_TYPE.legal,
        _id: index,
        cover: `${BASE_ASSET_URL}/resources/Cover-Resource.png`,
        title: `[${RESOURCE_TYPE.legal}] - National Policy on Lifelong Learning ${index + 1}`,
        source: "Ministry 1",
        publishedTS: "01/01/2024",
        lang: "KH",
        file: `${BASE_ASSET_URL}/resources/dummy.pdf`,
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
      <div className='flex-col gap-5 lg:flex-row flex justify-between mt-[2rem]'>
        <div className='grid grid-cols-1 w-full lg:w-[50%] lg:flex gap-5'>
          <div className='col-span-1 flex gap-3 items-center'>
            {t("Ministry")}:
            <Select
              showSearch
              allowClear
              className='w-full min-w-[150px]'
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

          <div className='col-span-1 flex gap-3 items-center'>
            {t("Year")}:
            <Select
              showSearch
              allowClear
              className='w-full min-w-[150px]'
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
        <div className='flex gap-3 w-full lg:w-[50%]'>
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
