import React from "react";
import { useTranslation } from "react-i18next";

const OurPartner = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  console.log(currentLanguage, 'language');

  const partner = {
    paragraph: "Our focus areas encourage lifelong learning through flexible, inclusive and comprehensive initiatives that meet the changing need.",
    paragraphKH: "តំបន់ផ្តោតអារម្មណ៍របស់យើងលើកទឹកចិត្តដល់ការរៀនសូត្រពេញមួយជីវិត តាមរយៈគំនិតផ្តួចផ្តើមដែលអាចបត់បែនបាន រួមបញ្ចូល និងទូលំទូលាយ ដែលបំពេញតម្រូវការផ្លាស់ប្តូរ។"
  };

  return (
    <div className="flex flex-col justify-around items-center text-[#0F69B7]">
      <div>
        <h1 className="text-3xl font-bold">{t("our_partner")}</h1>
        <p className="py-4">{currentLanguage === "en" ? partner.paragraph : partner.paragraphKH}</p>
      </div>
    </div>
  );
};

export default OurPartner;

