import React, { useMemo } from 'react'
import { BASE_ASSET_URL } from '../../../constants/Url'
import { ConfigProvider, Table } from 'antd'
import { useOutletContext } from 'react-router'
import { useTranslation } from 'react-i18next'

export default function GoverningBoard() {
  const { t } = useTranslation();
  const { currentLanguage } = useOutletContext();

  const dataSource = {
    en: {
      memberId: 1,
      imageUrl: BASE_ASSET_URL + "/NCLLL-ChairMan.png",
      birthDate: "2000/11/14",
      email: "example@gmail.com",
      nationality: "Cambodian",
      name: "H. E. Dr . AUN PORNMONIROTH Deputy Prime Minister",
      placeOfBirth: {
        houseNumber: "23",
        street: "Street 278",
        district: "Boeung Keng Kang 1",
        city: "Phnom Penh",
        country: "Cambodia",
      },
      currentAddress: {
        houseNumber: "56",
        street: "Street 105",
        district: "Toul Tom Poung",
        city: "Phnom Penh",
        country: "Cambodia"
      },
      careerStatus: [
        {
          value: "Deputy Prime Minister of the Royal Government of Cambodia",
          detail: "Minister of Economy and Finance"
        }, {
          value: "Chairman",
          detail: "Supreme National Economic Council (SNEC)"
        }, {
          value: "Deputy Prime Minister of the Royal Government of Cambodia",
          detail: "Minister of Economy and Finance"
        }, {
          value: "Chairman",
          detail: "Supreme National Economic Council (SNEC)"
        }
      ],
      experience: [
        {
          value: "Deputy Prime Minister of the Royal Government of Cambodia",
          detail: "Minister of Economy and Finance"
        }, {
          value: "Chairman",
          detail: "Supreme National Economic Council (SNEC)"
        }, {
          value: "Deputy Prime Minister of the Royal Government of Cambodia",
          detail: "Minister of Economy and Finance"
        }, {
          value: "Chairman",
          detail: "Supreme National Economic Council (SNEC)"
        }
      ]
    },
    kh: {
      memberId: 1,
      imageUrl: BASE_ASSET_URL + "/NCLLL-ChairMan.png",
      birthDate: "2000/11/14",
      email: "example@gmail.com",
      nationality: "ខ្មែរ",
      name: "ឯកឧត្តមអគ្គបណ្ឌិត​សភា​ចារ្យ អូន ព័ន្ធមុនីរ័ត្ន ឧបនាយករដ្ឋមន្ត្រី",
      placeOfBirth: {
        houseNumber: "២៣",
        street: "ផ្លូវ ២៧៨",
        district: "បឹងកេងកង ១",
        city: "ភ្នំពេញ",
        country: "កម្ពុជា",
      },
      currentAddress: {
        houseNumber: "៥៦",
        street: "ផ្លូវ ១០៥",
        district: "ទួលទំពូង",
        city: "ភ្នំពេញ",
        country: "កម្ពុជា"
      },
      careerStatus: [
        {
          value: "ឧបនាយករដ្ឋមន្ត្រី នៃរាជរដ្ឋាភិបាលកម្ពុជា។",
          detail: "រដ្ឋមន្ត្រីក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ"
        }, {
          value: "ប្រធាន",
          detail: "ឧត្តមក្រុមប្រឹក្សាសេដ្ឋកិច្ចជាតិ (SNEC)"
        }, {
          value: "ឧបនាយករដ្ឋមន្ត្រី នៃរាជរដ្ឋាភិបាលកម្ពុជា។",
          detail: "រដ្ឋមន្ត្រីក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ"
        }, {
          value: "ប្រធាន",
          detail: "ឧត្តមក្រុមប្រឹក្សាសេដ្ឋកិច្ចជាតិ (SNEC)"
        }
      ],
      experience: [
        {
          value: "ឧបនាយករដ្ឋមន្ត្រី នៃរាជរដ្ឋាភិបាលកម្ពុជា។",
          detail: "រដ្ឋមន្ត្រីក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ"
        }, {
          value: "ប្រធាន",
          detail: "ឧត្តមក្រុមប្រឹក្សាសេដ្ឋកិច្ចជាតិ (SNEC)"
        }, {
          value: "ឧបនាយករដ្ឋមន្ត្រី នៃរាជរដ្ឋាភិបាលកម្ពុជា។",
          detail: "រដ្ឋមន្ត្រីក្រសួងសេដ្ឋកិច្ច និងហិរញ្ញវត្ថុ"
        }, {
          value: "ប្រធាន",
          detail: "ឧត្តមក្រុមប្រឹក្សាសេដ្ឋកិច្ចជាតិ (SNEC)"
        }
      ]
    }
  };

  const tables = [
    {
      dataIndex: "careerStatus",
      title: "ការងារបច្ចុប្បន្ន",
    }
  ];

  const data = useMemo(() => {
    return { ...dataSource[currentLanguage] }
  }, [currentLanguage, t]);

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
        // key_kh: "អាសយដ្ឋានបច្ចុប្បន្ន",
        value: "Address",
        dataIndex: "currentAddress",
      },
      {
        value: "E-mail",
        dataIndex: "email",
      },
    ];

    return showInfo.map(info => {
      const value = data[info.dataIndex];
      let text = data[info.dataIndex];
      if (["placeOfBirth", "currentAddress"].includes(info.dataIndex)) {
        text = `${value?.houseNumber}, ${value?.street}, ${value?.district}, ${value?.city}, ${value?.country}`;
      }

      return {
        value: info.value,
        dataIndex: info.dataIndex,
        detail: text,
      }
    })
  }, [data]);

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
          <div className='col-span-5 md:col-span-2 text-center flex gap-[20px] flex-col items-center'>
            <img className='w-[50%]' src={data.imageUrl} alt={data.imageUrl} />
            <h1 className='mb-0'>{data?.name}</h1>
          </div>

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
                  render:(value) => t(value) 
                }, {
                  dataIndex: "detail",
                  width: "60%",
                }
              ]}
              dataSource={basicInfo}
            />
          </div>
          <div className='col-span-5'>
            {
              tables.map(table => data[table.dataIndex].length > 0 &&
                <Table
                  bordered
                  rowKey="key"
                  showHeader={false}
                  pagination={false}
                  title={() => <div className='font-khmer text-center'>{t("Current job")}</div>}
                  columns={[
                    {
                      dataIndex: "value",
                      width: "40%",
                    }, {
                      dataIndex: "detail",
                      width: "60%"
                    }
                  ]}
                  dataSource={data[table.dataIndex]}
                />)
            }

          </div>
        </div>
      </div>
    </ConfigProvider>
  )
}
