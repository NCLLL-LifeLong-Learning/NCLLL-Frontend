import React from "react";
import { Button } from "antd";
import AutoScroll from "../AutoScroll/AutoScroll";
import { useTranslation } from "react-i18next";

const OurPartner = ({ dataSource, description, title, onClick }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col-reverse sm:grid grid-cols-4 gap-[30px] sm:gap-[10%] px-[5%] min-h-[150px] sm:min-h-[400px]">
      <div className="w-full col-span-2 flex flex-col justify-center gap-[25px]">
        <h1 className="std-title m-0">{t(title)}</h1>
        <div>
          <p className="std-content m-0">{t(description)}</p>
        </div>
        <Button className="std-btn" onClick={onClick}>{t("Become a partner")}</Button>
      </div>
      <div className="w-full col-span-2 space-y-0 sm:space-y-[30px] overflow-hidden max-w-[100%]">
        <AutoScroll dataSource={dataSource} className="!hidden sm:!flex" />
        <AutoScroll dataSource={dataSource} scroll={"right"} className="!hidden sm:!flex" />
        <AutoScroll dataSource={dataSource} />
      </div>
    </div>
  );
};

export default OurPartner;

