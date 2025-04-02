import { Skeleton } from 'antd';
import React from 'react'
import { useTranslation } from 'react-i18next';

export default function RosourceTypeDetailLoading(props) {
    const { t } = useTranslation();

    return (
        <div className='grid grid-cols-3 md:flex px-[10px] md:px-[20px] gap-[10px] md:gap-[20px] w-full items-center justify-between py-[20px] ring rounded-lg'>
            <div className='col-span-3'>
                <Skeleton.Image active className='!w-full md:!w-auto !h-[150px] !aspect-square border' />
            </div>
            <div className='col-span-3 flex flex-col gap-3 justify-center flex-1'>
                <div className='text-xl truncate' style={{ color: "var(--primary-color)" }}>
                    <Skeleton.Input active className='!w-full' />
                </div>
                <div className='flex-wrap flex items-center gap-3'>
                    <div className='flex gap-1 items-center'>
                        <div className='text-md font-bold'>{t("Source")}</div>
                        <div>:</div>
                        <span style={{ textWrap: "nowrap" }}>
                            <Skeleton.Input active />
                        </span>
                    </div>
                    -
                    <div className='flex gap-1 items-center'>
                        <div className='text-md font-bold'>{t("Tags")}</div>
                        <div>:</div>
                        <span style={{ textWrap: "nowrap" }}>
                            <Skeleton.Input active />
                        </span>
                    </div>
                    -
                    <div className='flex gap-1 items-center'>
                        <div className='text-md font-bold'>{t("Published")}</div>
                        <div>:</div>
                        <span>
                            <Skeleton.Input active />
                        </span>
                    </div>
                    -
                    <div className='flex gap-1 items-center'>
                        <div className='text-md font-bold'>{t("Lan")}</div>
                        <div>:</div>
                        <span>
                            <Skeleton.Input active />
                        </span>
                    </div>
                </div>
            </div>
            <div className='col-span-3 h-fit flex-center'>
                <Skeleton.Node active className='!max-w-[30px] !w-[30px] !h-[30px]' />
            </div>
        </div>
    )
}
