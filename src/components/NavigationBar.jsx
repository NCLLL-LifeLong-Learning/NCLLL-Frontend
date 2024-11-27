import React from "react";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <header className="border border-b shadow-md">
      {/* More Option... */}
      <div className="flex justify-end items-center pt-5 px-7 list-none space-x-4  ">
        <li>
          <a href="/#">{t("quick_link")}</a>
        </li>
        <li>
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/more.png"
            alt=""
          />
        </li>
        <li className="flex items-center">
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/globe.png"
            alt=""
          />
          <p>{t("khmer")}</p>
        </li>
        <li className="flex items-center">
          <img
            src="https://img.icons8.com/ios-glyphs/30/000000/globe.png"
            alt=""
          />
          <p>{t("english")}</p>
        </li>
      </div>
      <div className="w-full flex items-center justify-between px-7">
        {/* Logo and Name of NCLLL */}
        <div className="flex items-center justify-start ">
          <div>
            <img
              src="https://lh4.googleusercontent.com/JQt_3LVNmoVgSFSxySY1GdEaUfWkMgzIrSIGsup7Sb95g5nIsWlqfkUBHAVI8XiwwWYHuDqpDouVkH200gxjfC0=w16383"
              alt=""
              className="w-24"
            />
          </div>
          <div className="ml-4 text-xl ">
            <p className="font-bold">
              គណៈកម្មាធិការជាតិសម្រាប់ការសិក្សាពេញមួយជីវិត
            </p>
            <p className="font-bold">
              NATIONAL COMMITTEE FOR LIFELONG LEARNING
            </p>
          </div>
        </div>
        <div className="flex items-center justify-around list-none space-x-4">
          <li>
            <a href="https://www.facebook.com/nclll.gov.kh" target="_blank">
              <img
                src="https://img.icons8.com/24/000000/facebook.png"
                alt=""
                className="w-8 h-8"
              />
            </a>
          </li>
          <li>
            <a href="/telegram" target="_blank">
              <img
                src="https://img.icons8.com/24/000000/telegram-app.png"
                alt=""
                className="w-8 h-8"
              />
            </a>
          </li>
          <li>
            <a href="/youtube">
              <img
                src="https://img.icons8.com/24/000000/youtube-play.png"
                alt=""
                className="w-8 h-8"
              />
            </a>
          </li>
          <li>
            <a href="/search">
              <img
                src="https://img.icons8.com/24/000000/search.png"
                alt=""
                className="w-8 h-8"
              />
            </a>
          </li>
        </div>
      </div>
      {/* Navigation Tabs */}
      <div className="flex justify-around items-center list-none text-lg">
        <li>
          <a href="/" className="font-bold">
            {t("home")}
          </a>
        </li>
        <li>
          <a href="/" className="font-bold">
            {t("about_nclll")}
          </a>
        </li>
        <li>
          <a href="/" className="font-bold">
            {t("program")}
          </a>
        </li>
        <li>
          <a href="/" className="font-bold">
            {t("focus_areas")}
          </a>
        </li>
        <li>
          <a href="/" className="font-bold">
            {t("resouces")}
          </a>
        </li>
      </div>
    </header>
  );
}
