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
                    key: "Focus Area",
                    title: "our_work.title",
                    description: "our_work.description",
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
                },
                {
                    key: "Program",
                    title: "program.title",
                    description: "program.description",
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
            <div className='p-[0.625rem] lg:p-[1.25rem]'>

                <div className='relative gap-3 flex-col lg:flex-row flex items-start justify-between'>
                    <div className='flex-col text-center md:text-start md:flex-row w-full lg:w-auto flex items-center justify-start gap-3'>
                        <img onClick={() => navigate("/")} className='cursor-pointer max-w-none object-cover size-[3.125rem] lg:size-[5.625rem] rounded-full' src='/logo.jpg' alt='logo' />
                        <div onClick={() => navigate("/")} className='cursor-pointer flex flex-col gap-2 justify-center'>
                            <div className='text-[0.65rem] leading-none text-md-[0.75rem] lg:text-[1rem] font-[400] font-khmer'>គណៈកម្មាធិការជាតិសម្រាប់ការសិក្សាពេញមួយជីវិត</div>
                            <div className='text-[0.680rem] leading-none text-md-[0.781rem] lg:text-[1.031rem] font-[400] font-english-700'>NATIONAL COMMITTEE FOR LIFELONG LEARNING</div>
                        </div>
                    </div>
                    <div className='flex-col lg:flex-row w-full lg:w-auto flex justify-center md:justify-start items-center md:items-start gap-3'>
                        <div className='flex gap-3'>
                            <Button type='link' onClick={() => onChangeLang("kh")} icon={<CambodiaSvg width='1.25rem' height='1.25rem' />} />
                            <Button type='link' onClick={() => onChangeLang("en")} icon={<AmericanSvg width='1.25rem' height='1.25rem' />} />
                        </div>

                        <div className='flex lg:hidden gap-3'>
                            <Input.Search value={search} onChange={(value) => setSearch(value.target.value)} onPressEnter={handleSearch} onSearch={handleSearch} />
                        </div>

                        <Button className='absolute lg:relative top-0 right-0' onClick={onClose} shape='circle' icon={<IoMdClose className="text-[1.25rem]" />} />
                    </div>
                </div>


                <div className='py-[1.5rem] md:py-[2.5rem]'>
                    <Tabs
                        tabBarExtraContent={<div className='hidden lg:flex gap-3'>
                            <Input.Search value={search} onChange={(value) => setSearch(value.target.value)} onPressEnter={handleSearch} onSearch={handleSearch} />
                        </div>}
                        defaultActiveKey="1"
                        tabPosition="top"
                        style={{ height: 220 }}
                        items={
                            menu.map((item, index) => ({
                                label: <div className='text-md md:text-xl font-bold text-white uppercase'>{t(item.title)}</div>,
                                key: index,
                                children: <div className='px-[0.875rem] py-[0.55rem] md:py-[1.875rem] md:px-[3.75rem] text-white'>
                                    <div className='grid grid-cols-12 gap-4'>
                                        {
                                            item.route.map((route, index) => (
                                                <div className='col-span-12 sm:col-span-6 md:col-span-6 flex flex-col gap-2' key={`${route?.title}=${route?.path}-${index}`}>
                                                    <div className='cursor-pointer text-md md:text-xl uppercase' onClick={() => onNavTo(route.path)}>
                                                        <p className="line-clamp-1 m-0">
                                                            {t(route?.title)}
                                                        </p>
                                                    </div>
                                                    <div className='ms-[1.25rem] flex flex-col gap-2'>
                                                        {route?.children.map((child, index) => (<div
                                                            key={`${child?.title}-${child?.path}-${index}`}
                                                            className='cursor-pointer text-md md:text-xl'
                                                            onClick={() => onNavTo(child.path)}
                                                        >
                                                            <p className="line-clamp-1 m-0 uppercase">
                                                                {t(child.title)}
                                                            </p>
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