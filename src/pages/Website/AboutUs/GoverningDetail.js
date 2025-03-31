import React, { useContext, useMemo } from 'react'
import { Button, ConfigProvider, Result, Skeleton, Table } from 'antd'
import { useNavigate, useParams } from 'react-router'
import { useTranslation } from 'react-i18next'
import { useQuery } from '@tanstack/react-query'
import { fetchGovermentDetail } from '../../../api/publicRequest'
import { CACHE_TIME, GOVERMENT, STALE_TIME } from '../../../constants/CacheAPI'
import { LanguageContext } from '../../../i18n/LanguageProvider'

export default function GoverningBoard() {
  const { t } = useTranslation();
  const { lang } = useContext(LanguageContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: resData, isLoading } = useQuery({
    queryKey: [GOVERMENT, id],
    queryFn: () => fetchGovermentDetail(id),
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });

  // fetchGovermentDetail

  const dataSource = useMemo(() => {
    let res = resData;
    if (res?.code === 200 && !isLoading) {
      return { ...res?.data };
    } else {
      return null;
      // return {
      //   en: {
      //     memberId: 1,
      //     imageUrl: BASE_ASSET_URL + "/NCLLL-ChairMan.png",
      //     birthDate: "2000/11/14",
      //     email: "example@gmail.com",
      //     nationality: "Cambodian",
      //     name: "H. E. Dr . AUN PORNMONIROTH Deputy Prime Minister",
      //     placeOfBirth: {
      //       houseNumber: "23",
      //       street: "Street 278",
      //       district: "Boeung Keng Kang 1",
      //       city: "Phnom Penh",
      //       country: "Cambodia",
      //     },
      //     currentAddress: {
      //       houseNumber: "56",
      //       street: "Street 105",
      //       district: "Toul Tom Poung",
      //       city: "Phnom Penh",
      //       country: "Cambodia"
      //     },
      //     careerStatus: [
      //       {
      //         value: "Deputy Prime Minister of the Royal Government of Cambodia",
      //         detail: "Minister of Economy and Finance"
      //       }, {
      //         value: "Chairman",
      //         detail: "Supreme National Economic Council (SNEC)"
      //       }, {
      //         value: "Deputy Prime Minister of the Royal Government of Cambodia",
      //         detail: "Minister of Economy and Finance"
      //       }, {
      //         value: "Chairman",
      //         detail: "Supreme National Economic Council (SNEC)"
      //       }
      //     ],
      //     experience: [
      //       {
      //         value: "Deputy Prime Minister of the Royal Government of Cambodia",
      //         detail: "Minister of Economy and Finance"
      //       }, {
      //         value: "Chairman",
      //         detail: "Supreme National Economic Council (SNEC)"
      //       }, {
      //         value: "Deputy Prime Minister of the Royal Government of Cambodia",
      //         detail: "Minister of Economy and Finance"
      //       }, {
      //         value: "Chairman",
      //         detail: "Supreme National Economic Council (SNEC)"
      //       }
      //     ]
      //   },
      //   kh: {
      //     memberId: 1,
      //     imageUrl: BASE_ASSET_URL + "/NCLLL-ChairMan.png",
      //     birthDate: "2000/11/14",
      //     email: "example@gmail.com",
      //     nationality: "ខ្មែរ",
      //     name: "ឯកឧត្តមអគ្គបណ្ឌិត​សភា​ចារ្យ អូន ព័ន្ធមុនីរ័ត្ន ឧបនាយករដ្ឋមន្ត្រី",
      //     placeOfBirth: {
      //       houseNumber: "២៣",
      //       street: "ផ្លូវ ២៧៨",
      //       district: "បឹងកេងកង ១",
      //       city: "ភ្នំពេញ",
      //       country: "កម្ពុជា",
      //     },
      //     currentAddress: {
      //       houseNumber: "៥៦",
      //       street: "ផ្លូវ ១០៥",
      //       district: "ទួលទំពូង",
      //       city: "ភ្នំពេញ",
      //       country: "កម្ពុជា"
      //     },
      //     careerStatus: [
      //       {
      //         value: "ឧបនាយករដ្ឋមន្ត្រី នៃរាជរដ្ឋាភិបាលកម្ពុជា។",
      //         detail: "រដ្ឋមន្ត្រីក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ"
      //       }, {
      //         value: "ប្រធាន",
      //         detail: "ឧត្តមក្រុមប្រឹក្សាសេដ្ឋកិច្ចជាតិ (SNEC)"
      //       }, {
      //         value: "ឧបនាយករដ្ឋមន្ត្រី នៃរាជរដ្ឋាភិបាលកម្ពុជា។",
      //         detail: "រដ្ឋមន្ត្រីក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ"
      //       }, {
      //         value: "ប្រធាន",
      //         detail: "ឧត្តមក្រុមប្រឹក្សាសេដ្ឋកិច្ចជាតិ (SNEC)"
      //       }
      //     ],
      //     experience: [
      //       {
      //         value: "ឧបនាយករដ្ឋមន្ត្រី នៃរាជរដ្ឋាភិបាលកម្ពុជា។",
      //         detail: "រដ្ឋមន្ត្រីក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ"
      //       }, {
      //         value: "ប្រធាន",
      //         detail: "ឧត្តមក្រុមប្រឹក្សាសេដ្ឋកិច្ចជាតិ (SNEC)"
      //       }, {
      //         value: "ឧបនាយករដ្ឋមន្ត្រី នៃរាជរដ្ឋាភិបាលកម្ពុជា។",
      //         detail: "រដ្ឋមន្ត្រីក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ"
      //       }, {
      //         value: "ប្រធាន",
      //         detail: "ឧត្តមក្រុមប្រឹក្សាសេដ្ឋកិច្ចជាតិ (SNEC)"
      //       }
      //     ]
      //   }
      // }
    }
  }, [resData, isLoading]);

  const tables = [
    {
      dataIndex: "careerStatus",
      title_en: "Career Status",
      title_kh: "ការងារបច្ចុប្បន្ន",
    },
    {
      dataIndex: "experience",
      title_en: "Experience",
      title_kh: "បទពិសោធន៍",
    }
  ];

  const data = useMemo(() => {
    return dataSource ? { ...dataSource[lang] } : {}
  }, [lang, dataSource]);

  const basicInfo = useMemo(() => {
    const showInfo = [
      {
        // ឈ្មោះ
        value: "Name",
        dataIndex: "name"
      },
      {
        // key_kh: "ថ្ងៃខែឆ្នាំកំណើត",
        value: "Date of Birth",
        dataIndex: "birthDate",
      },
      {
        // key: "ទីកន្លែងកំណើត",
        value: "Place of Birth",
        dataIndex: "placeOfBirth",
      },
      {
        // value: "សញ្ជាតិ",
        value: "Nationality",
        dataIndex: "nationality",
      },
      {
        value: "E-mail",
        dataIndex: "email",
      },
    ];

    return showInfo.map(info => {
      const value = data[info?.dataIndex];
      let text = data[info?.dataIndex];
      if (["placeOfBirth", "currentAddress"].includes(info?.dataIndex)) {
        text = `${value?.houseNumber}, ${value?.street}, ${value?.district}, ${value?.city}, ${value?.country}`;
      }

      return {
        value: info.value,
        dataIndex: info.dataIndex,
        detail: text,
      }
    })
  }, [data]);

  if (dataSource === null && !isLoading) {
    return <Result
      status="404"
      title="404"
      subTitle="Sorry, we doesn't have any member with this ID."
      extra={<Button className='esi-std-button' onClick={() => navigate("/about-us/board/")}>Go To Our List</Button>}
    />
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Table: {
            borderColor: "black"
          }
        }
      }}
    >
      <div className='flex flex-col gap-[30px] max-w-[70vw]'>
        <div className='detail-page-title text-center'>{t("Governing Detail")}</div>

        <div className='grid grid-cols-5 gap-5'>
          {
            isLoading ?
              <div className='col-span-5 md:col-span-2 flex flex-col items-center'>
                <div className='w-[50%] flex gap-[20px] flex-col items-center'>
                  <Skeleton.Image active className='!w-full !h-full !aspect-square' />
                  <Skeleton.Input active className='!mb-0 !w-full' />
                </div>
              </div>
              :
              <div className='col-span-5 md:col-span-2 text-center flex flex-col items-center'>
                <div className='w-[50%] flex gap-[20px] flex-col items-center'>
                  <img className='!w-full !h-full !aspect-square' src={data?.imageUrl} alt={data?.imageUrl} />
                  <h1 className='mb-0'>{data?.name}</h1>
                </div>
              </div>
          }

          <div className='col-span-5 md:col-span-3'>
            <Table
              bordered
              className='antd-'
              rowKey="key"
              showHeader={false}
              pagination={false}
              title={() => <div className='font-khmer text-center'>{t("Profile")}</div>}
              columns={[
                {
                  dataIndex: "value",
                  width: "40%",
                  render: (value) => t(value)
                }, {
                  dataIndex: "detail",
                  width: "60%",
                  render: (text) => {
                    if (isLoading) {
                      return <Skeleton.Input active className='!mb-0 !w-full' />
                    }
                    return text;
                  }
                }
              ]}
              dataSource={basicInfo}
            />
          </div>
          <div className='col-span-5 flex flex-col gap-4'>
            {
              tables.map(table => data[table?.dataIndex]?.length > 0 &&
                <Table
                  bordered
                  rowKey="key"
                  showHeader={false}
                  pagination={false}
                  title={() => <div className='font-khmer text-center'>{table["title_" + lang]}</div>}
                  columns={[
                    {
                      dataIndex: "value",
                      width: "40%",
                      render: (text) => {
                        if (isLoading) {
                          return <Skeleton.Input active className='!mb-0 !w-full' />
                        }
                        return text;
                      }
                    }, {
                      dataIndex: "detail",
                      width: "60%",
                      render: (text) => {
                        if (isLoading) {
                          return <Skeleton.Input active className='!mb-0 !w-full' />
                        }
                        return text;
                      }
                    }
                  ]}
                  dataSource={data[table?.dataIndex]}
                />)
            }

          </div>
        </div>
      </div>
    </ConfigProvider>
  )
}
