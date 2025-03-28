import React, { useState } from 'react'
import { useOutletContext } from 'react-router';
import HoldingHandSvg from "../../../assets/svgs/HoldingHandSvg";
import HoldingHeartSvg from "../../../assets/svgs/HoldingHeartSvg.js";
import PhoneSvg from '../../../assets/svgs/PhoneSvg';
import { useTranslation } from 'react-i18next';

export default function ContactUs() {
  const { t } = useTranslation();
  const contextParent = useOutletContext();
  const { setActiveKeys } = contextParent

  const contacts = [
    {
      email: "info@moeys.gov.kh",
      title: "Information",
      icons: <PhoneSvg className="size-[40px] md:size-[60px]" color='white' />,
    },
    {
      email: "voluntary@moeys.gov.kh",
      title: "Voluntary",
      icons: <HoldingHeartSvg className="size-[40px] md:size-[60px]" color='white' />,
    },
    {
      email: "phel.phearoun@moeys.gov.kh",
      title: "Partners and Sponsors",
      icons: <HoldingHandSvg className="size-[40px] md:size-[60px]" color='white' />,
    }

  ];

  return (
    <div className='flex flex-col gap-[30px]'>
      <div>
        {t("If you would like to get in touch with NLLL, please complete the form, or contact us directly to the following emails.")}
      </div>

      <div className='flex flex-col gap-3'>
        {
          contacts.map(contact => <div className='shadow-md	max-w-[500px] flex gap-3'>
            <div className='contact-icons rounded-l-md p-[20px] md:px-[20px] md:py-[30px]'>{contact.icons}</div>
            <div className='rounded-r-md flex flex-col justify-center gap-[5px] pe-[10px]'>
              <div className='truncate contact-title'>{t(contact.title)}</div>
              <a className='truncate contact-link' href={'mailto:' + contact.email}>{contact.email}</a>
            </div>
          </div>)
        }
      </div>
    </div>
  )
}
