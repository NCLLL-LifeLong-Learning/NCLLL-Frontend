import React from 'react'
import { BASE_ASSET_URL } from '../../../constants/Url'
import { List } from 'antd'
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';

export default function GoverningBoard() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const dataSource = [
    {
      title: "Minister",
      member: [
        {
          memberId: 1,
          name: "H. E. Dr . AUN PORNMONIROTH Deputy Prime Minister",
          name_kh: "ឯកឧត្តមអគ្គបណ្ឌិត​សភា​ចារ្យ អូន ព័ន្ធមុនីរ័ត្ន ឧបនាយករដ្ឋមន្ត្រី",
          imageUrl: BASE_ASSET_URL + "/NCLLL-ChairMan.png",
        }
      ],
    },
    {
      title: "Secretary of State",
      member: [
        {
          memberId: 1,
          name: "H. E. Dr . AUN PORNMONIROTH Deputy Prime Minister",
          name_kh: "ឯកឧត្តមអគ្គបណ្ឌិត​សភា​ចារ្យ អូន ព័ន្ធមុនីរ័ត្ន ឧបនាយករដ្ឋមន្ត្រី",
          imageUrl: BASE_ASSET_URL + "/NCLLL-ChairMan.png",
        },
        {
          memberId: 2,
          name: "H. E. Dr . AUN PORNMONIROTH Deputy Prime Minister",
          name_kh: "ឯកឧត្តមអគ្គបណ្ឌិត​សភា​ចារ្យ អូន ព័ន្ធមុនីរ័ត្ន ឧបនាយករដ្ឋមន្ត្រី",
          imageUrl: BASE_ASSET_URL + "/NCLLL-ChairMan.png",
        },
        {
          memberId: 3,
          name: "H. E. Dr . AUN PORNMONIROTH Deputy Prime Minister",
          name_kh: "ឯកឧត្តមអគ្គបណ្ឌិត​សភា​ចារ្យ អូន ព័ន្ធមុនីរ័ត្ន ឧបនាយករដ្ឋមន្ត្រី",
          imageUrl: BASE_ASSET_URL + "/NCLLL-ChairMan.png",
        },
        {
          memberId: 4,
          name: "H. E. Dr . AUN PORNMONIROTH Deputy Prime Minister",
          name_kh: "ឯកឧត្តមអគ្គបណ្ឌិត​សភា​ចារ្យ អូន ព័ន្ធមុនីរ័ត្ន ឧបនាយករដ្ឋមន្ត្រី",
          imageUrl: BASE_ASSET_URL + "/NCLLL-ChairMan.png",
        },
        {
          memberId: 5,
          name: "H. E. Dr . AUN PORNMONIROTH Deputy Prime Minister",
          name_kh: "ឯកឧត្តមអគ្គបណ្ឌិត​សភា​ចារ្យ អូន ព័ន្ធមុនីរ័ត្ន ឧបនាយករដ្ឋមន្ត្រី",
          imageUrl: BASE_ASSET_URL + "/NCLLL-ChairMan.png",
        },
        {
          memberId: 6,
          name: "H. E. Dr . AUN PORNMONIROTH Deputy Prime Minister",
          name_kh: "ឯកឧត្តមអគ្គបណ្ឌិត​សភា​ចារ្យ អូន ព័ន្ធមុនីរ័ត្ន ឧបនាយករដ្ឋមន្ត្រី",
          imageUrl: BASE_ASSET_URL + "/NCLLL-ChairMan.png",
        },
      ]
    },
    {
      title: "CEO",
      member: [
        {
          memberId: 7,
          name: "H. E. Dr . AUN PORNMONIROTH Deputy Prime Minister",
          name_kh: "ឯកឧត្តមអគ្គបណ្ឌិត​សភា​ចារ្យ អូន ព័ន្ធមុនីរ័ត្ន ឧបនាយករដ្ឋមន្ត្រី",
          imageUrl: BASE_ASSET_URL + "/NCLLL-ChairMan.png",
        },
        {
          memberId: 8,
          name: "H. E. Dr . AUN PORNMONIROTH Deputy Prime Minister",
          name_kh: "ឯកឧត្តមអគ្គបណ្ឌិត​សភា​ចារ្យ អូន ព័ន្ធមុនីរ័ត្ន ឧបនាយករដ្ឋមន្ត្រី",
          imageUrl: BASE_ASSET_URL + "/NCLLL-ChairMan.png",
        },
        {
          memberId: 9,
          name: "H. E. Dr . AUN PORNMONIROTH Deputy Prime Minister",
          name_kh: "ឯកឧត្តមអគ្គបណ្ឌិត​សភា​ចារ្យ អូន ព័ន្ធមុនីរ័ត្ន ឧបនាយករដ្ឋមន្ត្រី",
          imageUrl: BASE_ASSET_URL + "/NCLLL-ChairMan.png",
        },
        {
          memberId: 10,
          name: "H. E. Dr . AUN PORNMONIROTH Deputy Prime Minister",
          name_kh: "ឯកឧត្តមអគ្គបណ្ឌិត​សភា​ចារ្យ អូន ព័ន្ធមុនីរ័ត្ន ឧបនាយករដ្ឋមន្ត្រី",
          imageUrl: BASE_ASSET_URL + "/NCLLL-ChairMan.png",
        },
        {
          memberId: 11,
          name: "H. E. Dr . AUN PORNMONIROTH Deputy Prime Minister",
          name_kh: "ឯកឧត្តមអគ្គបណ្ឌិត​សភា​ចារ្យ អូន ព័ន្ធមុនីរ័ត្ន ឧបនាយករដ្ឋមន្ត្រី",
          imageUrl: BASE_ASSET_URL + "/NCLLL-ChairMan.png",
        },
        {
          memberId: 12,
          name: "H. E. Dr . AUN PORNMONIROTH Deputy Prime Minister",
          name_kh: "ឯកឧត្តមអគ្គបណ្ឌិត​សភា​ចារ្យ អូន ព័ន្ធមុនីរ័ត្ន ឧបនាយករដ្ឋមន្ត្រី",
          imageUrl: BASE_ASSET_URL + "/NCLLL-ChairMan.png",
        },
      ]
    }
  ]

  const goToDetail = (record) => {
    navigate("/about-us/board/" + record.memberId);
  }

  return (
    <div className='flex flex-col gap-[30px] max-w-[70vw]'>
      {
        dataSource.map(data => <div>
          <h1 className='goverment-title font-khmer'>{t(data.title)}</h1>

          {
            data.member.length === 1 ? <div className='flex gap-[20px] p-[20px]' onClick={() => goToDetail(data.member[0])}>
              <img className="max-w-[400px]" src={data.member[0].imageUrl} alt={data.member[0].imageUrl} />
              <div className='goverment-item-name flex gap-3 flex-col justify-center'>
                <div>{data.member[0].name_kh}</div>
                <div>{data.member[0].name}</div>
              </div>
            </div> :
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
                    <div className='flex gap-[20px] px-[20px] py-[10px]' onClick={() => goToDetail(item)}>
                      <img className="w-[25%] max-w-[400px]" src={item.imageUrl} alt={item.imageUrl} />
                      <div className='goverment-item-name flex gap-1 flex-col justify-center'>
                        <a>{item.name_kh}</a>
                        <p>{item.name}</p>
                      </div>
                    </div>
                  </List.Item>
                }}
                dataSource={data.member}
              />
          }
        </div>)
      }
    </div>
  )
}
