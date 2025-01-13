import React from 'react'
import { Link } from 'react-router-dom';
import ArrowSvg from "../../assets/svgs/ArrowSvg";
export default function HeaderNavigationBar(props) {
    const { menu, setMenuHover } = props;

    return (
        <div className='hidden lg:flex gap-[5rem]'>
            {
                menu.map((item, index) => <div className='menu-container'>
                    <Link
                        onMouseEnter={() => {
                            if (item.children.length > 0) {
                                setMenuHover(index)
                            }
                        }}
                        className='flex items-center gap-2 std-menu-link' to={item?.link}>
                        {item?.title}
                        {
                            item.children.length > 0 &&
                            <ArrowSvg width='10px' height='10px' transform="rotate(180deg)" />
                        }
                    </Link>
                </div>)
            }
        </div>
    )
}
