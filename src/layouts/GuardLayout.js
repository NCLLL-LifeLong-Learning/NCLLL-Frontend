import React, { useEffect, useMemo, useState } from 'react'
import { Outlet, useLocation, useOutletContext } from 'react-router'
import { Divider } from 'antd';
import { isEmpty } from 'lodash';

export default function GuardLayout(props) {
    const { title, description, route } = props;
    const contextParent = useOutletContext();
    const [currentTitle, setCurrentTitle] = useState("National Lifelong Learning Forum");
    const { setCurrentRoute, currentRoute, setTitle, setTreeDescription, setTreeData, setActiveKeys } = contextParent
    const location = useLocation();
    const treeData = useMemo(() => route, [route]);

    useEffect(() => {
        setTitle(title);
        setTreeDescription(description);
        setTreeData([...treeData]);
    }, [treeData, title, description])

    useEffect(() => {
        if (location.pathname) {
            const currentPage = treeData.find(item => item.path === location.pathname);

            if (isEmpty(currentPage)) {
                return;
            }

            setActiveKeys([currentPage.key]);
            setCurrentTitle(currentPage.label);
            setCurrentRoute({ ...currentPage });
        }
    }, [location, location.pathname])

    const contextValue = {
        subTitle: currentTitle,
        setSubTitle: setCurrentTitle,
        ...contextParent
    }

    return (
        <div>
            {!currentRoute?.noHeader && <>
                <div className='detail-page-title'>{currentTitle}</div>
                <Divider />
            </>}

            <div className={!currentRoute?.noHeader ? "py-0" : "py-[20px]"}>
                <Outlet context={contextValue} />
            </div>
        </div>
    )
}
