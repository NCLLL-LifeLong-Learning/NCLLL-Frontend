import React from "react";
import { useTranslation } from "react-i18next";
import ITSTEPAcademy from "../../assets/images/step_academy.png";
import DVV_International from "../../assets/images/dvv_international.png";

const OurPartner = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const partner = {
    paragraph: "Our focus areas encourage lifelong learning through flexible, inclusive and comprehensive initiatives that meet the changing need.",
    paragraphKH: "តំបន់ផ្តោតអារម្មណ៍របស់យើងលើកទឹកចិត្តដល់ការរៀនសូត្រពេញមួយជីវិត តាមរយៈគំនិតផ្តួចផ្តើមដែលអាចបត់បែនបាន រួមបញ្ចូល និងទូលំទូលាយ ដែលបំពេញតម្រូវការផ្លាស់ប្តូរ។"
  };

  return (
    <div className="grid grid-cols-2 gap-6 px-[5%]">
      <div>
        <h1 className="text-4xl font-bold text-[#0F69B7]">{t("our_partner")}</h1>
        <p className="py-4 text-wrap text-base">{currentLanguage === "en" ? partner.paragraph : partner.paragraphKH}</p>
      </div>
      <div className="flex justify-center items-center space-x-7">
        <img src={DVV_International} alt="dvv-international" className="mx-4"/>
        <img src={ITSTEPAcademy} alt="step-academy" />
      </div>
    </div>
  );
};

export default OurPartner;

