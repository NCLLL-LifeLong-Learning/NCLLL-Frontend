import { Button } from 'antd';
import dayjs from 'dayjs';
import React from 'react'
import { LuEye } from 'react-icons/lu';
import { useNavigate } from 'react-router';
import { RESOURCE_TYPE } from '../../../../constants/Bridge';
import { useTranslation } from 'react-i18next';

export default function RosourceTypeDetail(props) {
    const { record } = props;
    const { t } = useTranslation();
    const navigate = useNavigate();

    const onViewDetail = () => {
        const routes = {
            [RESOURCE_TYPE.news]: "/resources/news",
            [RESOURCE_TYPE.event]: "/resources/news",
            [RESOURCE_TYPE.project]: "/resources/projects"
        }

        navigate(routes[record.type] + `/${record._id}`);
    }

    return (
        <div className='flex px-[20px] gap-[20px] w-full items-center justify-between py-[20px] ring rounded-lg'>
            <div className='border'>
                <img className='max-h-[150px]' src={record?.imageUrl} alt={record?.imageUrl} />
            </div>
            <div className='flex flex-col gap-3 justify-center flex-1'>
                <div className='text-xl' style={{ color: "var(--primary-color)" }}>{record.title}</div>
                <div className='flex items-center gap-3'>
                    <div className='flex gap-1 items-center'>
                        <div className='text-md font-bold'>{t("Source")}</div>
                        <div>:</div>
                        <span style={{ textWrap: "nowrap" }}>{record.source}</span>
                    </div>
                    -
                    <div className='flex gap-1 items-center'>
                        <div className='text-md font-bold'>{t("Tags")}</div>
                        <div>:</div>
                        <span style={{ textWrap: "nowrap" }}>{record.tags}</span>
                    </div>
                    -
                    <div className='flex gap-1 items-center'>
                        <div className='text-md font-bold'>{t("Published")}</div>
                        <div>:</div>
                        <span>{dayjs(record.publishedTS).format("DD/MM/YYYY")}</span>
                    </div>
                    -
                    <div className='flex gap-1 items-center'>
                        <div className='text-md font-bold'>{t("Lan")}</div>
                        <div>:</div>
                        <span>{record.lang}</span>
                    </div>
                </div>
            </div>
            <div className='h-fit flex-center w-[25%] max-w-[150px]'>
                <Button type='link' icon={<LuEye style={{ fontSize: "30px", color: "black" }} onClick={onViewDetail} />} />
            </div>
        </div>
    )
}
