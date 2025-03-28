import React from 'react'
import { useTranslation } from 'react-i18next';
import { BASE_ASSET_URL } from '../../../constants/Url';

export default function LifelongLearningCenter() {
  const { t } = useTranslation();
  return (
    <div>
      <p className='text-xl font-semibold text-[#0F69B7]'>{t("Cambodia's Skill Gap: Challenges and Opportunities in Lifelong Learning")}</p>
      <div className='flex-col md:flex-row flex justify-between items-center gap-[1rem] my-[1.5rem]'>
        <img className='p-3' src={BASE_ASSET_URL + '/program/square_art.png'} alt='Square Art' />
        <div className='bg-[#0F69B7] bg-opacity-[30%] rounded-lg border shadow-md'>
          <p className='p-3 font-normal text-wrap text-lg leading-snug'>
            {t("Cambodia's strong economic growth, averaging 7.7% GDP increase over the past two decades, is threatened by a mismatch between education outputs and labor market needs, with 60% of employers struggling to find skilled workers. With 62.% of Cambodia lacking basic digital skills, enhancing digital literacy and lifelong learning is crucial for workforce participation and income growth, as additional education can increase earnings by 5-15%. The ILC emphasizes the importance of lifelong learning and the need for national lifelong learning for skill relevance, career development, and equity. To address these challenges, the National Commission of Lifelong Learning is hosting a forum to improve skills, promote social mobility, and foster collaboration among government, employers, workers, and training institutions.")}
          </p>
        </div>
      </div>
      <div>
        <p className='text-xl font-semibold text-[#0F69B7]'>
          {t("The 1st National Forum on Lifelong Learning Cambodia")}
        </p>
        <div>
          <p className='font-normal text-wrap text-xl leading-snug'>
            {t("The 1st National Forum on Lifelong Learning Cambodia, held on March 28, 2024, at the Sun & Moon Riverside Hotel in Phnom Penh, was a significant event aimed at establishing a shared vision for developing the country's lifelong learning ecosystem. The forum was conducted in a hybrid model, allowing participants to join both online and onsite. This inclusive approach ensured that a wide range of stakeholders could participate and contribute to the discussions.")}
          </p>
          <div className='w-full my-[1rem]'>
            <img src={BASE_ASSET_URL + '/program/forum_group.png'} className='w-full bg-cover bg-center object-cover' alt='First National Forum on Lifelong Learning Cambodia' />
          </div>
          <p className='font-normal text-wrap text-xl leading-snug'>
            {t("The forum brought together key figures from various sectors, including H.E. Dr. Hang Chuon Naron, Minister of Education, Youth and Sport of Cambodia, who was a key speaker. The event emphasized the importance of multi-stakeholder dialogue and cooperation to ensure that digital-enabled lifelong learning reaches all Cambodians. This approach is crucial for supporting sustainable economic growth and preparing Cambodians with the necessary technical, digital, and human skills for success.")}
          </p>
        </div>

        <div className='p-[2rem] shadow-md rounded-xl mt-[2rem]'>
          <div className='w-[40%] md:w-[10%] pb-[1rem]'>
            <img src={BASE_ASSET_URL + '/program/key_topic.png'} className='w-full bg-cover bg-center object-cover' alt='Key Topic to Discuss' />
          </div>
          <p className='text-xl font-semibold text-[#0F69B7]'>{t("Key Topic to Discuss:")}</p>
          <ul className='list-disc list-inside'>
            <li className='font-normal text-wrap text-xl leading-snug'>
              {t("Role of Lifelong Learning in supporting economic growth")}
            </li>
            <li className='font-normal text-wrap text-xl leading-snug'>
              {t("Expanding access to digital learning platforms and resources")}
            </li>
            <li className='font-normal text-wrap text-xl leading-snug'>
              {t("Partnerships between stakeholders")}
            </li>
            <li className='font-normal text-wrap text-xl leading-snug'>
              {t("Skills anticipation and development")}
            </li>
            <li className='font-normal text-wrap text-xl leading-snug'>
              {t("Validation of non-formal and informal learning")}
            </li>
            <li className='font-normal text-wrap text-xl leading-snug'>
              {t("Guidance and support service")}
            </li>
            <li className='font-normal text-wrap text-xl leading-snug'>
              {t("Building sustainable economic: The Role of Lifelong Learning in TVET")}
            </li>
            <li className='font-normal text-wrap text-xl leading-snug'>
              {t("Leveraging TVET for continuous skill development as an approach to promote lifelong learning")}
            </li>
          </ul>
        </div>

        <div className='grid grid-cols-3 gap-[1rem] mt-[3rem] mb-[4rem]'>
          <div className='col-span-3 lg:col-span-1 flex flex-col justify-center items-center'>
            <p>{t("Co-organized by")}</p>
            <div className='w-full flex justify-center items-center'>
              <img src={BASE_ASSET_URL + '/partner/moey_logo.png'} className='w-[50%] bg-cover bg-center object-cover' alt='Forum 1' />
            </div>
          </div>
          <div className='col-span-3 lg:col-span-1 flex flex-col justify-center items-center'>
            <p>{t("Co-organized by")}</p>
            <div className='w-full flex justify-center items-center'>
              <img src={BASE_ASSET_URL + '/partner/dvv_international.png'} className='w-[50%] bg-cover bg-center object-cover' alt='Forum 3' />
              <img src={BASE_ASSET_URL + '/partner/step_academy.png'} className='w-[50%] bg-cover bg-center object-cover' alt='Forum 2' />
            </div>
          </div>
          <div className='col-span-3 lg:col-span-1 flex flex-col justify-center items-center'>
            <p>{t("Co-organized by")}</p>
            <div className='w-full flex justify-center items-center'>
              <img src={BASE_ASSET_URL + '/partner/dvv_international.png'} className='w-[50%] bg-cover bg-center object-cover' alt='Forum 3' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
