import React, { useContext } from 'react'
import HorizontalCard from '../../../../components/Engagement/HorizontalCard'
import { useTranslation } from 'react-i18next'
import { LanguageContext } from '../../../../i18n/LanguageProvider';

export default function Partners(props) {
  const { dataSource, total } = props;
  const { t } = useTranslation();
  const { lang } = useContext(LanguageContext);

  return (
    <div>
      <div>
        <p className='font-semibold space-x-3 text-md md:text-lg text-gray-600'>
          <span>{t("Total")} {total}</span>
          <span>{t("Showing")} {dataSource.length}</span>
          <span>| {t("Page")} 1/1</span>
        </p>
      </div>
      {/* Card */}
      <div className='grid grid-cols-1 gap-[30px]'>
        {dataSource?.map((item, index) => (
          <HorizontalCard key={index} image={item?.logo} name={item[lang]?.name} linkURL={item.url} />
        ))}
      </div>
    </div>
  )
}

