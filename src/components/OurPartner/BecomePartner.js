import React from "react";
import { useTranslation } from "react-i18next";
import PartnerMember from "../../assets/images/partner_members.png";
import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";

const BecomePartner = () => {
  const { t } = useTranslation();

  const becomePartner = {
    paragraph: "Seeking for Collaboration.",
  };

  return (
    <div className="max-w-[60vw] w-full">
      <h1 className="mb-2 text-4xl font-bold text-[#0F69B7]">{t("become_our_partner")}</h1>
      <p className="pb-4 text-wrap text-base">{becomePartner.paragraph}</p>
      <form action="" className="flex flex-col justify-center items-center">
        <Input
          type="text"
          placeholder={t("email")}
          className="w-full px-3 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
        />
        <Input
          type="text"
          placeholder={t("possible_area_of_collaboration")}
          className="w-full my-5 px-3 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
        />
        <TextArea
          type="text"
          rows={7}
          placeholder={t("describ_scope_of_work")}
          className="w-full mb-5 px-3 py-4 border border-gray-300 rounded-xl focus:outline-none focus:border-blue-500"
        />
        <button type="submit" className="bg-[#0F69B7] w-full text-white px-4 py-4 rounded-xl">
          {t("submit")}
        </button>
      </form>
    </div>
  );
};

export default BecomePartner;

