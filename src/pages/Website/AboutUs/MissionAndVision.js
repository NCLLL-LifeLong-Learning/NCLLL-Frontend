import React from 'react'
import TelescopeSvg from '../../../assets/svgs/TelescopeSvg';
import TargetSvg from '../../../assets/svgs/TargetSvg';
import SideWayArrowSvg from '../../../assets/svgs/SideWayArrowSvg';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { translateNumber } from '../../../utils/Utils';

export default function MissionAndVision() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navigateResource = () => {
    navigate("/resources");
  }

  const goals = [
    t("about_us.menu_1.goal_1"),
    t("about_us.menu_1.goal_2"),
    t("about_us.menu_1.goal_3"),
    t("about_us.menu_1.goal_4"),
    t("about_us.menu_1.goal_5"),
    t("about_us.menu_1.goal_6")
  ];

  const strategies = [
    { number: 1, text: t("about_us.menu_1.strategy_1") },
    { number: 2, text: t("about_us.menu_1.strategy_2") },
    { number: 3, text: t("about_us.menu_1.strategy_3") },
    { number: 4, text: t("about_us.menu_1.strategy_4") },
    { number: 5, text: t("about_us.menu_1.strategy_5") },
    { number: 6, text: t("about_us.menu_1.strategy_6") },
    { number: 7, text: t("about_us.menu_1.strategy_7") },
    { number: 8, text: t("about_us.menu_1.strategy_8") },
    { number: 9, text: t("about_us.menu_1.strategy_9") },
    { number: 10, text: t("about_us.menu_1.strategy_10") },
    { number: 11, text: t("about_us.menu_1.strategy_11") }
  ];

  const documents = [
    t("about_us.menu_1.document_1"),
    t("about_us.menu_1.document_2")
  ];

  return (
    <div className='flex flex-col gap-[1.875rem]'>
      <div className='mission-content p-[1.25rem] rounded-lg' style={{ backgroundColor: "var(--dark-blue-color)" }}>
        {t("The Royal Government of Cambodia has developed a National Policy on Lifelong Learning, which was approved in 2019, with the aim of enhancing potential human resource development to achieve sustainable development goals. At the same time, the development of a National Action Plan on Lifelong Learning is necessary and requires the concerted efforts of all institutions and stakeholders, focusing on the quality and effectiveness of human resource development. This action plan is an incorporated mechanism within a common national goal that can broaden and make participation more effective in providing opportunities and services, as well as recognizing and responding to the needs of service recipients and the labor market, especially for marginalized group.")}
      </div>
      <div className='h-fit grid grid-cols-2 gap-[3.75rem]'>
        <div className='col-span-2 md:col-span-1 h-fit'>
          <div className='p-[1.875rem] flex-col-center gap-[1.25rem]'>
            <TelescopeSvg width='40%' />
            <div className='mission-title' style={{ color: "var(--dark-green-color)" }}>{t("Vision")}</div>
          </div>
          <div className='p-[1.25rem] rounded-lg mission-content' style={{ backgroundColor: "var(--light-green-color)" }}>
            {t("The National Policy on Lifelong Learning seeks to equip all Cambodians, at every stage of life and in every location, with the knowledge, skills, attitudes, physical fitness, and personal attributes necessary to foster economic growth and promote harmonious lives within families and communities.")}
          </div>
        </div>

        <div className='col-span-2 md:col-span-1 h-fit flex flex-col'>
          <div className='p-[1.875rem] flex-col-center gap-[1.25rem]'>
            <TargetSvg width='40%' />
            <div className='mission-title' style={{ color: "var(--primary-color)" }}>{t("Purpose")}</div>
          </div>
          <div className='flex-1 p-[1.25rem] rounded-lg mission-content' style={{ backgroundColor: "var(--dark-blue-color)" }}>
            {t("The National Policy on Lifelong Learning aims to provide everyone with diverse educational opportunities and support so they can apply their skills and knowledge to enhance efficiency, quality, productivity, and income in the information technology era and smart society.")}
          </div>
        </div>
      </div>
      <div>

        {/* Goals Section */}
        <section>
          <div className='mission-title text-center' style={{ color: "var(--primary-color)" }}>{t("about_us.menu_1.goals_title")}</div>
          <p className='mission-content'>{t("about_us.menu_1.goals_intro")}</p>

          <div>
            {goals.map((goal, index) => (
              <div key={index} className="flex">
                <span className="mission-content mr-2">{translateNumber(t, index + 1)}.</span>
                <p className='mission-content'>{goal}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Strategy Section */}
        <section>
          <div className='mission-title text-center' style={{ color: "var(--primary-color)" }}>{t("about_us.menu_1.strategy_title")}</div>
          <p className='mission-content'>{t("about_us.menu_1.strategy_intro")}</p>

          <div>
            {strategies.map((strategy, index) => (
              <div key={index}>
                <p className='mission-content'><span className="!font-bold mission-content">{t("about_us.menu_1.strategy_label")} {translateNumber(t, strategy.number)}:</span> {strategy.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Documents Section */}
        <section>
          <div className='mission-title' style={{ color: "var(--primary-color)" }}>{t("about_us.menu_1.documents_title")}</div>
          <div>
            {documents.map((document, index) => (
              <div key={index}>
                <Button type='link' target='_blank' href='' className='mission-content'>- {document}</Button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
