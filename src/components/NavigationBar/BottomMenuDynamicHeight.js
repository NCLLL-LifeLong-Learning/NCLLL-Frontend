import React, { useContext, useEffect, useRef, useState } from 'react'
import BottomMenu from './BottomMenu'
import { Button } from 'antd';
import { LanguageContext } from '../../i18n/LanguageProvider';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

export default function BottomMenuDynamicHeight(props) {
    const { setMenuHover, menuHover, index, item } = props;
    const { t } = useTranslation();
    const { lang } = useContext(LanguageContext);

    const navigate = useNavigate();
    const subMenuRef = useRef(null);
    const [height, setHeight] = useState(260);

    useEffect(() => {
        const element = subMenuRef.current;
        if (!element) return;

        // Initial height set
        setHeight(element.offsetHeight);
    }, [menuHover]);

    const toPage = (link) => {
        navigate(link);
    }

    return (
        <BottomMenu
            onMouseLeave={() => {
                setMenuHover(-1)
            }}
            menuHover={menuHover}
            value={index}
            height={height + 100}
        >
            <div className='flex flex-wrap gap-[1.25rem] justify-between items-center h-full' ref={subMenuRef}>
                {
                    item.children.map((child, index) => (
                        <Button key={index} className='w-[calc(100vw/3)] xl:w-[calc(100vw/4)] h-[3.375rem] gap-2 std-menu-link' onClick={() => toPage(child?.link)}>
                            <p className='truncate line-clamp-1 m-0 uppercase'>
                                {t(child?.title)}
                            </p>
                        </Button>
                    ))
                }
            </div>
        </BottomMenu>
    )
}
