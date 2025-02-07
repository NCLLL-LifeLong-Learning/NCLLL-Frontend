import { Button } from 'antd';
import dayjs from 'dayjs';
import React from 'react'
import DownloadSvg from '../../../../assets/svgs/DownloadSvg';
import { LuEye } from 'react-icons/lu';
import { useLocation, useNavigate } from 'react-router';
import { RESOURCE_TYPE } from '../../../../constants/Bridge';

export default function RosourceType(props) {
    const { record } = props;
    const location = useLocation();
    const navigate = useNavigate();

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

    const onViewDetail = () => {
        const routes = {
            [RESOURCE_TYPE.news]: "/resources/news",
            [RESOURCE_TYPE.event]: "/resources/news",
            [RESOURCE_TYPE.project]: "/resources/projects"
        }

        navigate(routes[record.type] + `/${record._id}`);
    }

    const typeFile = [RESOURCE_TYPE.legal, RESOURCE_TYPE.policy, RESOURCE_TYPE.report, RESOURCE_TYPE.admin];
    const typeDetail = [RESOURCE_TYPE.news, RESOURCE_TYPE.event, RESOURCE_TYPE.project];

    return (
        <div className='flex px-[20px] gap-[20px] w-full items-center justify-between py-[20px] ring rounded-lg'>
            <div className='border'>
                <img className='max-h-[150px]' src={record.cover} alt={record.cover} />
            </div>
            <div className='flex flex-col gap-3 justify-center flex-1'>
                <div className='text-xl' style={{ color: "var(--primary-color)" }}>{record.title}</div>
                <div className='flex items-center gap-3'>
                    <div className='flex gap-2 items-center'>
                        <div className='text-md font-bold'>Source</div>
                        <div>:</div>
                        <span>{record.source}</span>
                    </div>
                    -
                    <div className='flex gap-2 items-center'>
                        <div>Published</div>
                        <div>:</div>
                        <span>{dayjs(record.publishedTS).format("DD/MM/YYYY")}</span>
                    </div>
                    -
                    <div className='flex gap-2 items-center'>
                        <div>Lan</div>
                        <div>:</div>
                        <span>{record.lang}</span>
                    </div>
                </div>
            </div>
            <div className='h-fit flex-center w-[25%] max-w-[150px]'>
                {typeDetail.includes(record.type) && <Button type='link' icon={<LuEye style={{ fontSize: "30px", color: "black" }} onClick={onViewDetail} />} />}
                {typeFile.includes(record.type) && <Button type='link' icon={<DownloadSvg color='black' className="size-[25px]" />} onClick={() => handleDownload(record)} />}
            </div>
        </div>
    )
}
