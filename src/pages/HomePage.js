import React from 'react'
import { useTranslation } from 'react-i18next';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className='w-full'>
      {t("Hello World")}
    </div>
  )
}
