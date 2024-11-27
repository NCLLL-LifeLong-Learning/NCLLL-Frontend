import React from 'react'
import { useTranslation } from 'react-i18next';
import NavigationBar from '../components/NavigationBar';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className='w-full'>
      <NavigationBar />
    </div>
  )
}
