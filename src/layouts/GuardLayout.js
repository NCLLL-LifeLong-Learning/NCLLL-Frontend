import React, { useEffect, useMemo } from 'react'
import { Outlet, useOutletContext } from 'react-router'
import { Divider } from 'antd';
import { useTranslation } from 'react-i18next';

export default function GuardLayout(props) {
    const { t } = useTranslation();
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
        <div className='w-full'>
            {!currentRoute?.noHeader && <>
                <div className='detail-page-title'>{t(currentRoute.title)}</div>
                <Divider />
            </>}

            <div className={!currentRoute?.noHeader ? "py-0" : "py-[20px]"}>
                <Outlet context={contextValue} />
            </div>
        </div>
    )
}
