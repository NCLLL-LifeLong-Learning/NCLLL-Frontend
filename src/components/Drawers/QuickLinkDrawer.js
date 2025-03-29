import { Button, Drawer, Input, Tabs } from 'antd'
import React, { forwardRef, useContext, useImperativeHandle, useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import { useNavigate } from 'react-router';
import { aboutUs, focusArea, program, resources } from '../../constants/Route';
import CambodiaSvg from '../../assets/svgs/CambodiaSvg';
import AmericanSvg from '../../assets/svgs/AmericanSvg';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../../i18n/LanguageProvider';

function QuickLinkDrawer(props, ref) {
    const { t } = useTranslation();
    const { lang } = useContext(LanguageContext);
    const { onChangeLang } = props
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const menu = [
        aboutUs,
        program,
        focusArea,
        resources,
    ];

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
                    <div className='flex-col text-center md:text-start md:flex-row w-full lg:w-auto flex items-center justify-between lg:justify-start gap-3'>
                        <img onClick={() => navigate("/")} className='cursor-pointer max-w-none object-cover size-[50px] lg:size-[90px] rounded-full' src='/logo.jpg' alt='logo' />
                        <div onClick={() => navigate("/")} className='cursor-pointer flex flex-col gap-2 justify-center'>
                            <div className='text-[12px] font-[500] font-khmer'>គណៈកម្មាធិការជាតិសម្រាប់ការសិក្សាពេញមួយជីវិត</div>
                            <div className='text-[12.5px] font-[700] font-english-700'>NATIONAL COMMITTEE FOR LIFELONG LEARNING</div>
                        </div>
                    </div>
                    <div className='flex-col lg:flex-row w-full lg:w-auto flex justify-center md:justify-start items-center md:items-start gap-3'>
                        <div className='flex gap-3'>
                            <Button type='link' onClick={() => onChangeLang("kh")} icon={<CambodiaSvg width='20px' height='20px' />} />
                            <Button type='link' onClick={() => onChangeLang("en")} icon={<AmericanSvg width='20px' height='20px' />} />
                        </div>

                        <div className='flex lg:hidden gap-3'>
                            <Input.Search />
                        </div>

                        <Button className='absolute lg:relative top-0 right-0' onClick={onClose} shape='circle' icon={<IoMdClose className="text-[20px]" />} />
                    </div>
                </div>


                <div className='py-[40px]'>
                    <Tabs
                        tabBarExtraContent={<div className='hidden lg:flex gap-3'>
                            <Input.Search />
                        </div>}
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
                                                    >{t(route.title)}</div>
                                                    <div className='ms-[20px] flex flex-col gap-2'>
                                                        {route.children.map(child => (<div className='cursor-pointer text-xl' onClick={() => onNavTo(child.path)}
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