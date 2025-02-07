import React, { useEffect, useMemo, useState } from 'react'
import { Outlet, useLocation, useOutletContext } from 'react-router'
import { Divider } from 'antd';
import { isEmpty } from 'lodash';

export default function GuardLayout(props) {
    const { title, description, route } = props;
    const contextParent = useOutletContext();
    const { currentRoute, setTitle, setTreeDescription, setTreeData } = contextParent
    const treeData = useMemo(() => route, [route]);

    useEffect(() => {
        setTitle(title);
        setTreeDescription(description);
        setTreeData([...treeData]);
    }, [treeData, title, description])

    const contextValue = {
        ...contextParent
    }

    return (
        <div>
            {!currentRoute?.noHeader && <>
                <div className='detail-page-title'>{currentRoute.title}</div>
                <Divider />
            </>}

            <div className={!currentRoute?.noHeader ? "py-0" : "py-[20px]"}>
                <Outlet context={contextValue} />
            </div>
        </div>
    )
}
