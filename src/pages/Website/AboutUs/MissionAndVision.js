import React, { useState } from 'react'
import { useOutletContext } from 'react-router';
import TelescopeSvg from '../../../assets/svgs/TelescopeSvg';
import TargetSvg from '../../../assets/svgs/TargetSvg';
import SideWayArrowSvg from '../../../assets/svgs/SideWayArrowSvg';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

export default function MissionAndVision() {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col gap-[30px]'>
      <div className='mission-content px-[40px] py-[20px] rounded-lg' style={{ backgroundColor: "var(--dark-blue-color)" }}>
        {t("The Secretariat General of the National Committee for Lifelong Learning, established under the Cambodian Royal Government, operates within a framework set by several key legal documents. The Secretariat General is responsible for implementing lifelong learning initiatives, adhering to directives from the Minister of Education, Youth and Sport, and aligning with the broader educational governance framework in Cambodia.")}
      </div>
      <div className='h-fit grid grid-cols-2 gap-[60px]'>
        <div className='col-span-2 md:col-span-1 h-fit'>
          <div className='p-[30px] flex-col-center gap-[20px]'>
            <TargetSvg width='40%' />
            <div className='mission-title' style={{ color: "var(--dark-green-color)" }}>{t("Mission")}</div>
          </div>
          <div className='p-[20px] rounded-lg mission-content' style={{ backgroundColor: "var(--light-green-color)" }}>
            {t("NCLL is a road map to developing human resource. To achieve this policy, it is required for collaborative cooperation and support from ministries, institutions and relevant stakeholders of all levels. Furthermore, it is required for mechanism and legal standards to formulate supporting team or organization in order to coordinate work, develop national strategic plan, broadly disseminate lifelong learning, and mobilize sources from all sides, aimed at promoting lifelong learning.")}
          </div>
        </div>

        <div className='col-span-2 md:col-span-1 h-fit flex flex-col'>
          <div className='p-[30px] flex-col-center gap-[20px]'>
            <TelescopeSvg width='40%' />
            <div className='mission-title' style={{ color: "var(--primary-color)" }}>{t("Vision")}</div>
          </div>
          <div className='flex-1 p-[20px] rounded-lg mission-content' style={{ backgroundColor: "var(--dark-blue-color)" }}>
            {t("NCLL aims to develop every Cambodian citizen to gain knowledge, skill, attitude, and value to contribute to economic growth and promote individual and social harmony through providing lifelong learning opportunity in all contexts at any time, in any place, and by any means.")}
          </div>
        </div>
      </div>
      <div>
        <div className='mission-title' style={{ color: "var(--primary-color)" }}>{t("Objective")}</div>
        <div className='mission-content py-[20px]'>
          {t("To achieve the vision and goals, the following objectives have been established:")}
          <ol className='px-[40px]'>
            <li>{t("Lifelong Learning Services: Provide lifelong learning opportunities to all Cambodian people.")}</li>
            <li>{t("Flexible Learning Programs: Develop comprehensive and adaptable lifelong learning programs to meet the demand for education.")}</li>
            <li>{t("Learning Infrastructure: Establish and enhance learning centers, physical infrastructure, and venues for education.")}</li>
            <li>{t("Capacity Building: Enhance the skills of lifelong learning program coordinators with a focus on program design, material development, teaching methods, orientation programs, and technical and professional practicums.")}</li>
            <li>{t("Recognition and Accreditation: Validate and accredit the knowledge, skills, and competencies gained from lifelong learning programs according to the Cambodian National Qualification Framework (CNQF), ensuring transparency, fairness, and consistency.")}</li>
            <li>{t("Collaboration and Implementation: Encourage ministries, institutions, the private sector, and development partners to implement lifelong learning programs to continuously update and advance employee skills as outlined in the CNQF.")}</li>
          </ol>
          <div className='flex-col-center py-[30px]'>
            <Button className='std-btn w-[30%] flex gap-[10px]'>{t("More on Objective")} <SideWayArrowSvg width='10px' height='10px' /></Button>
          </div>
        </div>
      </div>
    </div>
  )
}
