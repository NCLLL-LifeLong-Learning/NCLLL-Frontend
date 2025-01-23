import React, { useEffect, useMemo, useState } from 'react'
import { Outlet, useLocation, useOutletContext } from 'react-router'
import { Divider } from 'antd';
import { isEmpty } from 'lodash';

export default function GuardLayout(props) {
    const { title, description, route } = props;
    const contextParent = useOutletContext();
    const [currentTitle, setCurrentTitle] = useState("National Lifelong Learning Forum");
    const { setTitle, setTreeDescription, setShowContactForm, setTreeData, setActiveKeys } = contextParent
    const location = useLocation();
    const treeData = useMemo(() => route, []);

    useEffect(() => {
        setTitle(title);
        setTreeDescription(description);
        setTreeData([...treeData]);
    }, [])

    useEffect(() => {
        if (location.pathname) {
            const currentPage = treeData.find(item => item.path === location.pathname);

            if (isEmpty(currentPage)) {
                return;
            }
            setShowContactForm(currentPage?.contactUs || false);
            setActiveKeys([currentPage.key]);
            setCurrentTitle(currentPage.label);
        }
    }, [location.pathname])

    const contextValue = {
        subTitle: currentTitle,
        setSubTitle: setCurrentTitle,
        ...contextParent
    }

    return (
        <div>
            <div className='detail-page-title'>
                {currentTitle}
            </div>
            <Divider />
            <div className='py-[20px]'>
                <Outlet context={contextValue} />
            </div>
        </div>
    )
}
