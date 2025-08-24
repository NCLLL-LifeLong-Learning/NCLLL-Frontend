import React from 'react'
import HoldingHandSvg from "../../../assets/svgs/HoldingHandSvg";
import PhoneSvg from '../../../assets/svgs/PhoneSvg';
import { useTranslation } from 'react-i18next';

export default function ContactUs() {
  const { t } = useTranslation();

  const contacts = [
    {
      email: "+885 77 488 887",
      link: "https://t.me/+077488887",
      title: "about_us.menu_6.tel",
      icons: <PhoneSvg className="size-[2.5rem] md:size-[3.75rem]" color='white' />,
    },
    {
      email: "phel.phearoun@moeys.gov.kh",
      link: "mailto:phel.phearoun@moeys.gov.kh",
      title: "about_us.menu_6.email",
      icons: <HoldingHandSvg className="size-[2.5rem] md:size-[3.75rem]" color='white' />,
    }

  ];

  return (
    <div className='flex flex-col gap-[1.875rem]'>
      <div>
        {t("about_us.menu_6.subtitle")}
      </div>

      <div className='flex flex-col gap-3'>
        {
          contacts.map(contact => <div className='shadow-md	max-w-[31.25rem] flex gap-3'>
            <div className='contact-icons rounded-l-md p-[1.25rem] md:px-[1.25rem] md:py-[1.875rem]'>{contact.icons}</div>
            <div className='rounded-r-md flex flex-col justify-center gap-[0.313rem] pe-[0.625rem]'>
              <div className='truncate contact-title'>{t(contact.title)}</div>
              <a className='truncate contact-link' href={contact.link} target='_blank' rel='noreferrer'>{contact.email}</a>
            </div>
          </div>)
        }
      </div>
    </div>
  )
}
