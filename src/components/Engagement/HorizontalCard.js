import { Col, Row } from 'antd';
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function HorizontalCard({ image, name, linkURL }) {
  const { t } = useTranslation();
  return (
    <div>
      {/* Card */}
      <div className='shadow-lg border rounded-xl w-full p-[1rem] flex gap-1 items-center mb-[1rem]'>
        <Row gutter={[20]}>
          <Col span={8} lg={4}>
            <img src={image} className='w-[200px] !aspect-square bg-cover bg-center object-contain' alt='Forum 2' />
          </Col>
          <Col span={16}>
            <div className='flex flex-col gap-2 justify-center h-full'>
              <h3 className='font-semibold text-[#0F69B7]'>
                {t(name)}
              </h3>
              <p className='text-gray-600 text-sm m-0 truncate'>URL: {linkURL}</p>
            </div>
          </Col>
        </Row>

        {/* <div className='w-[60px] md:w-[40px]'>
          <img src={image} className='w-[60px] !aspect-square bg-cover bg-center object-cover' alt='Forum 2' />
        </div>
        <div className='overflow-hidden ml-0 lg:ml-[10rem] flex justify-between text-start flex-col'>
          <h3 className='font-semibold text-[#0F69B7]'>
            {t(name)}
          </h3>
          <p className='text-gray-600 text-sm m-0 truncate'>URL: {linkURL}</p>
        </div> */}
      </div>
    </div>
  )
}


