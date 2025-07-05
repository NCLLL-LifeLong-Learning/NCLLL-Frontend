import { Button } from 'antd';
import dayjs from 'dayjs';
import React, { useContext } from 'react'
import { LuEye } from 'react-icons/lu';
import { useNavigate } from 'react-router';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../../../../i18n/LanguageProvider';

export default function RosourceTypeDetail(props) {
    const { record, refetch } = props;
    const { lang } = useContext(LanguageContext);
    const data = record?.originalItem ? record?.originalItem : record;
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onViewDetail = () => {
        navigate("/resources/detail/" + data?.category + `/${record._id}`);
    }

    const getTags = () => {
        if (data?.tags?.length > 0) {
            return (data?.tags[0] && data?.tags[0][lang]?.name) || "N/A"
        }

        return "N/A";
    }

    return (
        <div className='grid grid-cols-3 md:flex px-[0.625rem] md:px-[1.25rem] gap-[0.625rem] md:gap-[1.25rem] w-full items-center justify-between py-[1.25rem] ring rounded-lg'>
            <div className='col-span-3'>
                <img className='!aspect-square w-full h-auto md:w-auto max-h-none md:max-h-[9.375rem] border' src={data?.cover} alt={data?.cover} />
            </div>
            <div className='col-span-3 flex flex-col gap-3 justify-center flex-1'>
                <div className='text-xl truncate' style={{ color: "var(--primary-color)" }} role='button' onClick={onViewDetail}>{data[lang]?.title || "N/A"}</div>
                <div className='flex-wrap flex items-center gap-3'>
                    <div className='flex gap-1 items-center truncate'>
                        <div className='text-md font-bold'>{t("Source")}</div>
                        <div>:</div>
                        <span style={{ textWrap: "nowrap" }}>{(data.source && data?.source[lang]?.name) || "N/A"}</span>
                    </div>
                    -
                    <div className='flex gap-1 items-center truncate'>
                        <div className='text-md font-bold'>{t("Tags")}</div>
                        <div>:</div>
                        <span style={{ textWrap: "nowrap" }}>{getTags()}</span>
                    </div>
                    -
                    <div className='flex gap-1 items-center truncate'>
                        <div className='text-md font-bold'>{t("Published")}</div>
                        <div>:</div>
                        <span>{dayjs(data.publishedTS).format("DD/MM/YYYY")}</span>
                    </div>
                    -
                    <div className='flex gap-1 items-center truncate'>
                        <div className='text-md font-bold'>{t("Lan")}</div>
                        <div>:</div>
                        <span>{String(lang).toUpperCase()}</span>
                    </div>
                </div>
            </div>
            <div className='col-span-3 h-fit flex-center'>
                <Button type='link' icon={<LuEye style={{ fontSize: "1.875rem", color: "black" }} onClick={onViewDetail} />} />
            </div>
        </div>
    )
}
