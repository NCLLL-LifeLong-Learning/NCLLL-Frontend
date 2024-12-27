import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ITSTEPAcademy from "../../assets/images/step_academy.png";
import DVV_International from "../../assets/images/dvv_international.png";
import { Button } from "antd";
import AutoScroll from "../AutoScroll/AutoScroll";

const OurPartner = () => {
  const { t, i18n } = useTranslation();
  const [dataSource, setDataSource] = useState([]);
  const currentLanguage = i18n.language;

  const partner = {
    paragraph: "Our focus areas encourage lifelong learning through flexible, inclusive and comprehensive initiatives that meet the changing need.",
  };


  const fetchData = async () => {
    const res = [];
    const tempName = ["dvv_international.png", "step_academy.png"];

    for (let i = 0; i < 20; i++) {
      res.push({
        _id: i,
        imageUrl: "/assets/images/partner/" + tempName[i % 2],
      });
    }

    setDataSource([...res]);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="grid grid-cols-4 gap-[20%] px-[5%] min-h-[400px]">
      <div className="col-span-2 flex flex-col justify-center gap-[25px]">
        <h1 className="std-title m-0">{t("our_partner")}</h1>
        <div>
          <p className="std-content m-0">{partner.paragraph}</p>
        </div>
        <Button className="std-btn">Become a partner</Button>
      </div>
      <div className="col-span-2 space-y-[30px] overflow-hidden max-w-[100%]">
        <AutoScroll dataSource={dataSource} />
        <AutoScroll dataSource={dataSource} scroll={"right"} className="flex-row-reverse" />
        <AutoScroll dataSource={dataSource} />
      </div>
    </div>
  );
};

export default OurPartner;

