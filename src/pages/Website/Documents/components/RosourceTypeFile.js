import { Button } from 'antd';
import dayjs from 'dayjs';
import React from 'react'
import DownloadSvg from '../../../../assets/svgs/DownloadSvg';
import { useTranslation } from 'react-i18next';

export default function RosourceType(props) {
    const { record } = props;
    const { t } = useTranslation();

    const handleDownload = async (record) => {
        try {
            // Might need if have some Blog from aws or cloud
            // const response = await fetch(record.file);
            // const blob = await response.blob();
            // const url = window.URL.createObjectURL(blob);


            console.log("record.file = ", record.file);
            const a = document.createElement("a");
            a.href = record.file;
            a.download = record.file.split("/").pop(); // Set the desired file name
            a.click();
        } catch (error) {
            console.error("Download failed", error);
        }
    }

    return (
        <div className='grid grid-cols-3 md:flex px-[10px] md:px-[20px] gap-[10px] md:gap-[20px] w-full items-center justify-between py-[20px] ring rounded-lg'>
            <div className='col-span-3'>
                <img className='w-full h-auto md:w-auto max-h-none md:max-h-[150px] border' src={record.cover} alt={record.cover} />
            </div>
            <div className='col-span-3 flex flex-col gap-3 justify-center flex-1'>
                <div className='text-xl truncate' style={{ color: "var(--primary-color)" }}>{record.title}</div>
                <div className='flex-wrap flex items-center gap-3'>
                    <div className='flex gap-1 items-center'>
                        <div className='text-md font-bold'>{t("Source")}</div>
                        <div>:</div>
                        <span>{record.source}</span>
                    </div>
                    -
                    <div className='flex gap-1 items-center'>
                        <div>{t("Published")}</div>
                        <div>:</div>
                        <span>{dayjs(record.publishedTS).format("DD/MM/YYYY")}</span>
                    </div>
                    -
                    <div className='flex gap-1 items-center'>
                        <div>{t("Lan")}</div>
                        <div>:</div>
                        <span>{record.lang}</span>
                    </div>
                </div>
            </div>
            <div className='col-span-3 h-fit flex-center'>
                <Button type='link' icon={<DownloadSvg color='black' className="size-[25px]" />} onClick={() => handleDownload(record)} />
            </div>
        </div>
    )
}
