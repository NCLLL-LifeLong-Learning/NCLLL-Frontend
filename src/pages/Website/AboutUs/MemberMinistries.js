import { List } from 'antd';
import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router';
import { antdResponsive } from '../../../utils/Utils';
import { useTranslation } from 'react-i18next';

export default function MemberMinistries() {
  const { t } = useTranslation();
  const [dataSource, setDataSource] = useState([]);

  const initMinistryPartner = (res) => {
    const listTitle = ["ក្រសួងអប់រំ យុវជន និង កីឡា", "ក្រសួងអប់រំ យុវជន និង កីឡា", "ក្រសួងអប់រំ យុវជន និង កីឡា", "ក្រសួងអប់រំ យុវជន និង កីឡា"];
    let title = 1;
    for (let i = 1; i < 13; i++) {
      res.push({
        imageUrl: "/assets/images/partner/partner-" + title + ".png",
        title: listTitle[title - 1]
      })
      title++;
      if (title === 5) {
        title = 1;
      }
    }
  }

  useEffect(() => {
    const res = []
    initMinistryPartner(res);
    setDataSource([...res]);
  }, [])


  return (
    <div className='flex flex-col gap-[30px]'>
      <div>
        {t("The NEC has an important role to play in encouraging ministries and relevant institutions to provide support and lifelong learning, for which member ministries include:")}
      </div>

      <List
        grid={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 2 }}
        dataSource={dataSource}
        renderItem={(record) => <div className='py-[20px] px-[10px]'>
          <div className='shadow-lg border border-gray-300 p-[30px] w-full rounded-lg'>
            <img className='w-full' src={record.imageUrl} alt={record.imageUrl} />
            <div className='partner-title text-center'>{record.title}</div>
          </div>
        </div>}
      />
    </div>
  )
}
