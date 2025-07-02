import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import ArrowSvg from "../../assets/svgs/ArrowSvg";
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../../i18n/LanguageProvider';
export default function HeaderNavigationBar(props) {
    const { t } = useTranslation();
    const { lang } = useContext(LanguageContext);
    const { menu, setMenuHover } = props;

    return (
        <div className='hidden lg:flex gap-[2rem] xl:gap-[5rem]'>
            {
                menu.map((item, index) => <div
                    key={index}
                    className='menu-container'
                >
                    <Link
                        onMouseEnter={() => {
                            if (item.children.length > 0) {
                                setMenuHover(index)
                            }
                        }}
                        className={'flex items-center gap-2 std-menu-link'}
                        style={lang === "en" ? { fontVariant: "all-petite-caps" } : {}}
                        to={item?.link}
                    >
                        {t(item?.title)}
                        {
                            item.children.length > 0 &&
                            <ArrowSvg width='0.625rem' height='0.625rem' transform="rotate(180deg)" />
                        }
                    </Link>
                </div>)
            }
        </div>
    )
}
