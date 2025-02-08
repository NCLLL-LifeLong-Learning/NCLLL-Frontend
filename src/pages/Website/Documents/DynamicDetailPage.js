import React from 'react'
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { BASE_ASSET_URL } from '../../../constants/Url';

export default function DynamicDetailPage(props) {
    const { t } = useTranslation();
    const { type } = props;
    const { id } = useParams();

    console.log("id = ", id);

    return (
        <div>
            <div>
                <p className='font-normal text-wrap text-xl leading-snug'>
                    {t("The 1st National Forum on Lifelong Learning Cambodia, held on March 28, 2024, at the Sun & Moon Riverside Hotel in Phnom Penh, was a significant event aimed at establishing a shared vision for developing the country's lifelong learning ecosystem. The forum was conducted in a hybrid model, allowing participants to join both online and onsite. This inclusive approach ensured that a wide range of stakeholders could participate and contribute to the discussions.")}
                </p>
                <div className='w-full my-[1rem]'>
                    <img src={BASE_ASSET_URL + '/program/forum_group.png'} className='w-full bg-cover bg-center object-cover' alt='First National Forum on Lifelong Learning Cambodia' />
                </div>
                <p className='font-normal text-wrap text-xl leading-snug'>
                    {t("The forum brought together key figures from various sectors, including H.E. Dr. Hang Chuon Naron, Minister of Education, Youth and Sport of Cambodia, who was a key speaker. The event emphasized the importance of multi-stakeholder dialogue and cooperation to ensure that digital-enabled lifelong learning reaches all Cambodians. This approach is crucial for supporting sustainable economic growth and preparing Cambodians with the necessary technical, digital, and human skills for success.")}
                </p>
                <p className='font-normal text-wrap text-xl leading-snug'>
                    {t("The forum brought together key figures from various sectors, including H.E. Dr. Hang Chuon Naron, Minister of Education, Youth and Sport of Cambodia, who was a key speaker. The event emphasized the importance of multi-stakeholder dialogue and cooperation to ensure that digital-enabled lifelong learning reaches all Cambodians. This approach is crucial for supporting sustainable economic growth and preparing Cambodians with the necessary technical, digital, and human skills for success.")}
                </p>
                <p className='font-normal text-wrap text-xl leading-snug'>
                    {t("The forum brought together key figures from various sectors, including H.E. Dr. Hang Chuon Naron, Minister of Education, Youth and Sport of Cambodia, who was a key speaker. The event emphasized the importance of multi-stakeholder dialogue and cooperation to ensure that digital-enabled lifelong learning reaches all Cambodians. This approach is crucial for supporting sustainable economic growth and preparing Cambodians with the necessary technical, digital, and human skills for success.")}
                </p>
                <p className='font-normal text-wrap text-xl leading-snug'>
                    {t("The forum brought together key figures from various sectors, including H.E. Dr. Hang Chuon Naron, Minister of Education, Youth and Sport of Cambodia, who was a key speaker. The event emphasized the importance of multi-stakeholder dialogue and cooperation to ensure that digital-enabled lifelong learning reaches all Cambodians. This approach is crucial for supporting sustainable economic growth and preparing Cambodians with the necessary technical, digital, and human skills for success.")}
                </p>
                <p className='font-normal text-wrap text-xl leading-snug'>
                    {t("The forum brought together key figures from various sectors, including H.E. Dr. Hang Chuon Naron, Minister of Education, Youth and Sport of Cambodia, who was a key speaker. The event emphasized the importance of multi-stakeholder dialogue and cooperation to ensure that digital-enabled lifelong learning reaches all Cambodians. This approach is crucial for supporting sustainable economic growth and preparing Cambodians with the necessary technical, digital, and human skills for success.")}
                </p>
                <p className='font-normal text-wrap text-xl leading-snug'>
                    {t("The forum brought together key figures from various sectors, including H.E. Dr. Hang Chuon Naron, Minister of Education, Youth and Sport of Cambodia, who was a key speaker. The event emphasized the importance of multi-stakeholder dialogue and cooperation to ensure that digital-enabled lifelong learning reaches all Cambodians. This approach is crucial for supporting sustainable economic growth and preparing Cambodians with the necessary technical, digital, and human skills for success.")}
                </p>
            </div>
        </div>
    )
}
