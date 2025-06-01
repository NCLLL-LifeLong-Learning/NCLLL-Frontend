import { Button, Drawer, Input, Tabs } from 'antd'
import React, { forwardRef, useContext, useImperativeHandle, useMemo, useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router';
import { aboutUs, resources } from '../../constants/Route';
import CambodiaSvg from '../../assets/svgs/CambodiaSvg';
import AmericanSvg from '../../assets/svgs/AmericanSvg';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../../i18n/LanguageProvider';
import { useQuery } from '@tanstack/react-query';
import { CACHE_TIME, MODULES, STALE_TIME } from '../../constants/CacheAPI';
import { fetchModules } from '../../api/publicRequest';
import _ from 'lodash';

function QuickLinkDrawer(props, ref) {
    const { t } = useTranslation();
    const { lang } = useContext(LanguageContext);
    const { onChangeLang } = props
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");

    const { data, isLoading } = useQuery({
        queryKey: [MODULES, { mainCategory: "", subCategory: "", limit: 100 }],
        queryFn: () => fetchModules({ mainCategory: "", subCategory: "", limit: 100 }),
        staleTime: STALE_TIME,
        cacheTime: CACHE_TIME,
    });

    const menu = useMemo(() => {
        const res = data;

        const tempMenu = []

        tempMenu.push(aboutUs);

        if (res?.code === 200 && !isLoading) {
            const modules = [
                {
                    key: "Program",
                    title: "Program",
                    description: "Our focus areas enhance lifelong learning through flexible, inclusive, and comprehensive initiatives that meet the changing needs of individuals and communities",
                    path: "/program/",
                    endRoute: [
                        {
                            title: "Engagement",
                            label: "Engagement",
                            key: "Engagement",
                            noHeader: true,
                            path: "/program/engagement",
                            children: [],
                        }
                    ]
                },
                {
                    key: "Focus Area",
                    title: "Focus Areas",
                    description: "Our focus areas enhance lifelong learning through flexible, inclusive, and comprehensive initiatives that meet the changing needs of individuals and communities",
                    path: "/focus-area/",
                    startRoute: [
                        {
                            title: 'Lifelong Learning for all',
                            label: 'All',
                            key: 'All',
                            path: "/focus-area/all",
                            children: []
                        },
                    ]
                }
            ];
            let groupList = _.groupBy(res?.data?.results, (data) => data.mainCategory)

            modules.forEach(item => {
                if (groupList[item.key]?.length > 0) {
                    tempMenu.push({
                        title: item.title,
                        description: item.description,
                        route: [
                            item?.startRoute,
                            groupList[item.key]?.map(subItem => ({
                                title: subItem[lang]?.title,
                                label: subItem[lang]?.title,
                                key: subItem?._id,
                                path: item.path + subItem?._id,
                                children: [],
                            })),
                            item?.endRoute
                        ].filter(Boolean).flat()
                    })
                } else if (item?.endRoute || item?.startRoute) {
                    tempMenu.push({
                        title: item.title,
                        description: item.description,
                        route: [
                            item?.startRoute,
                            item?.endRoute
                        ].filter(Boolean).flat()
                    })
                }
            })

        }

        tempMenu.push(resources);

        return tempMenu;
    }, [data, isLoading, lang])

    const handleSearch = () => {
        navigate("/resources", { state: { search: search } });
        onClose();
    }

    const onShow = () => {
        setOpen(true);
    }

    const onClose = () => {
        setOpen(false);
    }

    const onNavTo = (path) => {
        navigate(path);
        onClose();
    }

    useImperativeHandle(ref, () => {
        return { show: onShow, close: onClose }
    })

    return (
        <Drawer
            rootClassName='drawer-fullscreen quick-link-drawer'
            placement={"top"}
            closeIcon={false}
            onClose={onClose}
            open={open}
            size='large'
        >
            <div className='p-[10px] lg:p-[20px]'>

                <div className='relative gap-3 flex-col lg:flex-row flex items-start justify-between'>
                    <div className='flex-col text-center md:text-start md:flex-row w-full lg:w-auto flex items-center justify-start gap-3'>
                        <img onClick={() => navigate("/")} className='cursor-pointer max-w-none object-cover size-[50px] lg:size-[90px] rounded-full' src='/logo.jpg' alt='logo' />
                        <div onClick={() => navigate("/")} className='cursor-pointer flex flex-col gap-2 justify-center'>
                            <div className='text-[12px] lg:text-[16px] font-[500] font-khmer'>គណៈកម្មាធិការជាតិសម្រាប់ការសិក្សាពេញមួយជីវិត</div>
                            <div className='text-[12.5px] lg:text-[16.5px] font-[700] font-english-700'>NATIONAL COMMITTEE FOR LIFELONG LEARNING</div>
                        </div>
                    </div>
                    <div className='flex-col lg:flex-row w-full lg:w-auto flex justify-center md:justify-start items-center md:items-start gap-3'>
                        <div className='flex gap-3'>
                            <Button type='link' onClick={() => onChangeLang("kh")} icon={<CambodiaSvg width='20px' height='20px' />} />
                            <Button type='link' onClick={() => onChangeLang("en")} icon={<AmericanSvg width='20px' height='20px' />} />
                        </div>
                        <Button className='absolute lg:relative top-0 right-0' onClick={onClose} shape='circle' icon={<IoMdClose className="text-[20px]" />} />
                    </div>
                </div>


                <div className='py-[40px]'>
                    <Tabs
                        defaultActiveKey="1"
                        tabPosition="top"
                        style={{ height: 220 }}
                        items={
                            menu.map((item, index) => ({
                                label: <div
                                    className='text-xl  font-bold text-white'
                                    style={lang === "en" ? { fontVariant: "all-petite-caps" } : {}}
                                >{t(item.title)}</div>,
                                key: index,
                                children: <div className='px-[30px] py-[20px] md:py-[30px] md:px-[60px] text-white'>
                                    <div className='grid grid-cols-12 gap-2'>
                                        {
                                            item.route.map(route => (
                                                <div className='col-span-12 sm:col-span-6 md:col-span-3 flex flex-col gap-2'>
                                                    <div className='cursor-pointer text-xl' onClick={() => onNavTo(route.path)}
                                                        style={lang === "en" ? { fontVariant: "all-petite-caps" } : {}}
                                                    >{t(route?.title)}</div>
                                                    <div className='ms-[20px] flex flex-col gap-2'>
                                                        {route?.children.map(child => (<div className='cursor-pointer text-xl' onClick={() => onNavTo(child.path)}
                                                            style={lang === "en" ? { fontVariant: "all-petite-caps" } : {}}
                                                        >
                                                            {t(child.title)}
                                                        </div>))}
                                                    </div>
                                                </div>))
                                        }
                                    </div>
                                </div>,
                            }))
                        }
                    />
                </div>
            </div>
        </Drawer>
    )
}

export default forwardRef(QuickLinkDrawer);