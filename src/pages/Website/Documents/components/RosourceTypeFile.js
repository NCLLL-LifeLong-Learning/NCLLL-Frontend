import { Badge, Button, Modal, Table } from 'antd';
import dayjs from 'dayjs';
import React, { useContext, useState } from 'react'
import DownloadSvg from '../../../../assets/svgs/DownloadSvg';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../../../../i18n/LanguageProvider';
import { FaLayerGroup } from 'react-icons/fa';
import httpClient from '../../../../api/httpClient';

export default function RosourceType(props) {
    const { record } = props;
    const { lang } = useContext(LanguageContext);
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const data = record?.originalItem ? record?.originalItem : record;

    const handleDownload = async (record) => {
        try {
            const { data } = await httpClient.get(`${record._id}`);

            if (!data?.file) {
                console.error('No file URL returned from API.');
                return;
            }

            const link = document.createElement('a');
            link.href = data.file; // This should be a full URL (e.g., https://yourdomain.com/files/file.pdf)
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
                <Badge count={record?.file?.length || 1}>
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
                        columns={[
                            {
                                title: 'Filename',
                                dataIndex: 'filename',
                                key: 'filename',
                            },
                            {
                                title: 'Page',
                                dataIndex: 'page',
                                key: 'page',
                            },
                            {
                                title: 'File Type',
                                dataIndex: 'fileType',
                                key: 'fileType',
                            },
                            {
                                title: 'View',
                                dataIndex: 'view',
                                key: 'view',
                            },
                            {
                                title: "Action",
                                dataIndex: 'view',
                                key: 'view',
                                render: (item, record) => <Button type='link' icon={<DownloadSvg color='black' className="size-[25px]" />} onClick={() => handleDownload(record)} />
                            },
                        ]}
                        dataSource={record?.file}
                    />
                </div>
                {/* <Descriptions>
                    <Descriptions.Item label="File name">
                        {record?.filename || "N/A"}
                    </Descriptions.Item>
                    <Button type='link' icon={<DownloadSvg color='black' className="size-[25px]" />} onClick={() => handleDownload(record)} />
                </Descriptions> */}

            </Modal>
        </div>
    )
}
