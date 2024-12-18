import { Dropdown } from 'antd';
import _ from 'lodash';
import React from 'react'
import { Link } from 'react-router-dom';
import ArrowSvg from "../../assets/svgs/ArrowSvg";
export default function Footer(props) {
    const { menu } = props;

    return (
        <div className='flex gap-[5rem]'>
            {
                menu.map(item => {
                    if (_.isEmpty(item?.children)) {
                        return <Link className='std-menu-link' to={item?.link}>
                            {item?.title}
                        </Link>
                    }

                    return <Dropdown menu={{
                        items: item.children.map(child => ({
                            label: child?.title,
                            key: child?.title,
                            icon: child?.icon && child.icon,
                            danger: child?.danger ?? false,
                            disabled: child?.disabled ?? false,
                        }))
                    }}>
                        <Link className='std-menu-link flex items-center gap-2' to={item.link}>
                            {item.title}
                            <ArrowSvg width='10px' height='10px' transform="rotate(180deg)" />
                        </Link>
                    </Dropdown>
                })
            }
            {/* {
                menu.map(i => (<Link to={i.link}>
                    {i.title}
                </Link>))
            } */}
        </div>
    )
}
