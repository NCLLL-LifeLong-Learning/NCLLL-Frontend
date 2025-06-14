import { Badge, Button, Modal, Table } from 'antd';
import dayjs from 'dayjs';
import React, { useContext, useState } from 'react'
import DownloadSvg from '../../../../assets/svgs/DownloadSvg';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../../../../i18n/LanguageProvider';
import { FaLayerGroup } from 'react-icons/fa';
import httpClient from '../../../../api/httpClient';
import { DOWNLOAD_RESOURCE } from '../../../../api/URLs';

export default function RosourceType(props) {
    const { record } = props;
    const { lang } = useContext(LanguageContext);
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const data = record?.originalItem ? record?.originalItem : record;

    const handleDownload = async (fileRecord) => {
        try {
            const res = await httpClient.post(DOWNLOAD_RESOURCE + `/${data?._id}/${fileRecord._id}`);
            if (res?.status !== 200) {
                throw Error("Interal Server Error");
            }

            const link = document.createElement('a');
            link.href = fileRecord?.url; // This should be a full URL (e.g., https://yourdomain.com/files/file.pdf)
            link.download = ''; // Optional: provide a name like 'myfile.pdf'
            link.target = '_blank';
            link.rel = 'noopener noreferrer';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Download failed:', error);
        }
    };

    function getFileTypeFromUrl(url) {
        const extension = url.split('.').pop().toLowerCase();
        return extension.toUpperCase(); // e.g., "pdf" → "PDF"
    }

    return (
        <div className='grid grid-cols-3 md:flex px-[10px] md:px-[20px] gap-[10px] md:gap-[20px] w-full items-center justify-between py-[20px] ring rounded-lg'>
            <div className='col-span-3'>
                <img className='!aspect-square w-full h-auto md:w-auto max-h-none md:max-h-[150px] border' src={data?.cover} alt={data?.cover} />
            </div>
            <div className='col-span-3 flex flex-col gap-3 justify-center flex-1'>
                <div className='text-xl truncate' style={{ color: "var(--primary-color)" }}>{data?.title}</div>
                <div className='flex-wrap flex items-center gap-3'>
                    <div className='flex gap-1 items-center truncate'>
                        <div className='text-md font-bold'>{t("Source")}</div>
                        <div>:</div>
                        <span>{data?.source && data?.source[lang]?.name}</span>
                    </div>
                    -
                    <div className='flex gap-1 items-center truncate'>
                        <div>{t("Published")}</div>
                        <div>:</div>
                        <span>{dayjs(data?.publishedTS)?.format("DD/MM/YYYY")}</span>
                    </div>
                    -
                    <div className='flex gap-1 items-center truncate'>
                        <div>{t("Lan")}</div>
                        <div>:</div>
                        <span>{String(data?.lang).toUpperCase()}</span>
                    </div>
                </div>
            </div>
            <div className='col-span-3 h-fit flex-center'>
                <Badge count={data?.file?.length || 0}>
                    <Button
                        type='link'
                        icon={<FaLayerGroup color='black' className="size-[25px]" />}
                        onClick={() => setOpen(true)}
                    />
                </Badge>
            </div>
            <Modal
                title={data?.title || "N/A"}
                centered
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
                width={1000}
            >
                <div>
                    <Table
                        bordered
                        scroll={{ x: 600 }}
                        columns={[
                            {
                                title: 'File Name',
                                dataIndex: 'file_name',
                                key: 'file_name',
                            },
                            {
                                title: 'File Type',
                                dataIndex: 'url',
                                key: 'url',
                                render: (text) => getFileTypeFromUrl(text) || "Unknown"
                            },
                            {
                                title: 'View / Download',
                                dataIndex: 'download_count',
                                key: 'download_count',
                                render: (text) => text || 0
                            },
                            {
                                title: "Action",
                                dataIndex: 'view',
                                key: 'view',
                                render: (item, record) => <Button type='link' icon={<DownloadSvg color='black' className="size-[25px]" />} onClick={() => handleDownload(record)} />
                            },
                        ]}
                        dataSource={data?.file || []}
                    />
                </div>
            </Modal>
        </div>
    )
}
