import React, { useCallback, useEffect, useState } from 'react'
import ResourceList from './components/ResourceList';
import { Button, Divider, Input, Select } from 'antd';
import { debounce } from 'lodash';
import { BASE_ASSET_URL } from '../../../constants/Url';
import { RESOURCE_TYPE } from '../../../constants/Bridge';

export default function ReportAndPublication() {
  const pageSize = 10;
  const [loading, setLoading] = useState(true);
  // const [pageSize, setPageSize] = useState(10);
  const [dataSource, setDataSource] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchData = () => {
    try {

      const fileList = Array.from({ length: 50 }, (_, index) => ({
        type: RESOURCE_TYPE.report,
        _id: index,
        cover: `${BASE_ASSET_URL}/resources/Cover-Resource.png`,
        title: `[${RESOURCE_TYPE.report}] - National Policy on Lifelong Learning ${index + 1}`,
        source: "Ministry 1",
        publishedTS: "01/01/2024",
        lang: "KH",
        file: `${BASE_ASSET_URL}/resources/dummy.pdf`,
      }));
      setDataSource([...fileList])
    } catch (error) {
      console.log("error", error);
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
      <div className='font-bold text-4xl'>Resources</div>
      <div className='flex justify-between mt-[2rem]'>
        <div className='w-[50%] flex gap-[30px]'>
          <div className='flex gap-3 items-center'>Ministry:
            <Select
              showSearch
              allowClear
              className='min-w-[150px]'
              placeholder="All"
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
            Year:
            <Select
              showSearch
              allowClear
              className='min-w-[150px]'
              placeholder="All"
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
          <Input placeholder='Search' />
          <Button className="std-btn !px-[40px]" onClick={handleSearch}>Search</Button>
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
