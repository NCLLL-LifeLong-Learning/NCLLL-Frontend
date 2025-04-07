import { Button } from 'antd';
import dayjs from 'dayjs';
import React, { useContext } from 'react'
import DownloadSvg from '../../../../assets/svgs/DownloadSvg';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../../../../i18n/LanguageProvider';

export default function RosourceType(props) {
    const { record } = props;
    const { lang } = useContext(LanguageContext);
    const { t } = useTranslation();
    const data = record?.originalItem ? record?.originalItem : record;

    const handleDownload = (record) => {
        const a = document.createElement("a");
        a.href = "/assets/1743768110764-bd952f77-2589-44aa-96af-85c0d0429d44-document (1).pdf";	
        a.download = "/assets/1743768110764-bd952f77-2589-44aa-96af-85c0d0429d44-document (1).pdf";	
        // a.href = data.file;
        // a.download = data.file
        // .split("/").pop(); // Extract filename
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    
    

    return (
        <div className='grid grid-cols-3 md:flex px-[10px] md:px-[20px] gap-[10px] md:gap-[20px] w-full items-center justify-between py-[20px] ring rounded-lg'>
            <div className='col-span-3'>
                <img className='!aspect-square w-full h-auto md:w-auto max-h-none md:max-h-[150px] border' src={data?.cover} alt={data?.cover} />
            </div>
            <div className='col-span-3 flex flex-col gap-3 justify-center flex-1'>
                <div className='text-xl truncate' style={{ color: "var(--primary-color)" }}>{data?.title}</div>
                <div className='flex-wrap flex items-center gap-3'>
                    <div className='flex gap-1 items-center'>
                        <div className='text-md font-bold'>{t("Source")}</div>
                        <div>:</div>
                        <span>{data?.source && data?.source[lang]?.name}</span>
                    </div>
                    -
                    <div className='flex gap-1 items-center'>
                        <div>{t("Published")}</div>
                        <div>:</div>
                        <span>{dayjs(data?.publishedTS)?.format("DD/MM/YYYY")}</span>
                    </div>
                    -
                    <div className='flex gap-1 items-center'>
                        <div>{t("Lan")}</div>
                        <div>:</div>
                        <span>{String(data?.lang).toUpperCase()}</span>
                    </div>
                </div>
            </div>
            <div className='col-span-3 h-fit flex-center'>
                <Button type='link' icon={<DownloadSvg color='black' className="size-[25px]" />} onClick={() => handleDownload(record)} />
            </div>
        </div>
    )
}
