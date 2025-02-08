import { List } from 'antd';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

export default function ProfessionalDevelopment() {
  const { t } = useTranslation();
  const [dataSource, setDataSource] = useState([]);

  const initSwiperImageBackground = (res) => {
    const tempTitle = [
      "",
      "Lifelong Learning for all",
      "Comprehensive and Flexible learning Program",
      "Lifelong Learning Environment",
      "Professional Development",
      "Accreditation and Recognition",
      "Collaboration and Support"
    ];

    let title = 1;
    for (let i = 1; i < 7; i++) {
      res.push({
        imageUrl: "/assets/images/feature/feature-" + title + ".png",
        title: tempTitle[title]
      })
      title++;
      if (title === 7) {
        title = 1;
      }
    }
  }

  useEffect(() => {
    const res = []

    initSwiperImageBackground(res);

    setDataSource([...res]);
  }, [])

  return (
    <div className='flex flex-col gap-[30px]'>
      <div>
        {t("The NEC has an important role to play in encouraging ministries and relevant institutions to provide support and lifelong learning, for which member ministries include:")}
      </div>
      <List
        grid={{ xxl: 3, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}
        dataSource={dataSource}
        renderItem={(data) => {
          return <div className='p-[5px] md:p-[15px]'>
            <div className='std-feature-card-wrapper'>
              <img className="std-feature-image" src={data.imageUrl} alt={data.imageUrl} />
              <div className='custom-feature-blur w-full !absolute bottom-0 min-h-[120px] !rounded-none p-4'>
                <p>
                  {t(data.title)}
                </p>
              </div>
            </div>
          </div>;
        }}
      />
    </div>
  )
}
