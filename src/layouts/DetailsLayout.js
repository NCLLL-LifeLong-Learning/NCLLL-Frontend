import { Breadcrumb, Button, FloatButton, Tree } from 'antd';
import React, { useEffect, useMemo, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router';
import { getTreeTitle } from '../utils/Utils';
import { AiOutlineHome } from "react-icons/ai";
import ArrowSvg from '../assets/svgs/ArrowSvg';
import BecomePartner from "../components/OurPartner/BecomePartner";
import ExpandSvg from '../assets/svgs/ExpandSvg';

export default function DetailsLayout() {
    const [currentRoute, setCurrentRoute] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const [treeTitle, setTreeTitle] = useState("");
    const [treeDescription, setTreeDescription] = useState("");
    const [activeKeys, setActiveKeys] = useState([]);
    const [treeData, setTreeData] = useState([]);
    const [burger, setBurger] = useState(false);

    const handleChildAction = (message) => {
        console.log("Message from child:", message);
        alert(`Received from child: ${message}`);
    };

    const contextValue = {
        title: treeTitle,
        setTitle: (value) => setTreeTitle(value),
        description: treeDescription,
        setTreeDescription: (value) => setTreeDescription(value),
        setTreeData: (value) => setTreeData([...value]),
        activeKeys: activeKeys,
        setActiveKeys: (value) => setActiveKeys(value),
        onChildAction: handleChildAction, // Function passed to child
        currentRoute: currentRoute,
        setCurrentRoute: setCurrentRoute,
    };

    const handleSelectedTree = (selectedKeys, { selected, node }) => {
        if (!selected) { return; }
        const selectedTree = node?.treeNode;

        const currentKey = selectedTree[selectedTree.length - 1];

        const activeKeys = selectedTree.map(node => node.key)

        setActiveKeys(activeKeys);

        if (currentKey) {
            setCurrentRoute({ ...currentKey });
            if (location.pathname !== currentKey.path) {
                navigate(currentKey.path);
            }
        }
    }

    const renderTreeNodes = (nodes, isChild, treeNode = []) => {
        return nodes.map((node) => ({
            ...node,
            title: node.title,
            key: node.key,
            treeNode: [...treeNode, removeChild(node)],
            children: node.children ? renderTreeNodes(node.children, true, [...treeNode, removeChild(node)]) : [],
        }));
    }

    const removeChild = (node) => {
        return { ...node, children: [] };
    }

    const getActiveNodes = (nodes, parents = []) => {
        for (let node of nodes) {
            if (node.path === location.pathname) {
                return [...parents, node];
            }

            if (node?.children?.length > 0) {
                let result = getActiveNodes(node.children, [...parents, node]);
                if (result.length > 0) {
                    return result;
                }
            }
        }
        return [];
    }

    useEffect(() => {
        if (location.pathname !== currentRoute?.path && treeData.length > 0) {
            let activeNodes = getActiveNodes(treeData, []);

            if (activeNodes.length > 0) {
                setActiveKeys(activeNodes.map(node => node.key));
                setCurrentRoute({ ...activeNodes[activeNodes.length - 1] });
            }
        }
    }, [treeData, location, location.pathname])



    const formatTreeData = useMemo(() => renderTreeNodes(treeData), [treeData])

    return (
        (<div>
            <div className='h-[260px] text-white flex justify-center items-center' style={{ background: "var(--detail-header-background)" }}>
                <div className='max-w-[800px] text-center gap-[20px] flex flex-col'>
                    <div className='std-title !text-white'>{treeTitle}</div>
                    <div className='std-content'>{treeDescription}</div>
                </div>
            </div>
            <div className='bg-white shadow-md'>
                <div className='std-container h-[50px] flex items-center'>
                    <Breadcrumb
                        className='list-center breadcrumb-custom'
                        separator={<ArrowSvg className="size-[16px]" transform="scale(-1)" />}
                        items={[
                            {
                                href: '/',
                                title: <AiOutlineHome className='size-[24px]' />,
                            },
                            {
                                href: '',
                                title: treeTitle,
                            },
                            ...activeKeys.map(i => ({
                                href: '',
                                key: i,
                                title: i,
                            })),
                        ]}
                    />
                </div>
            </div>
            <div className='relative lg:grid grid-cols-12 gap-4'>
                <FloatButton
                    className='esi-floating-buger'
                    onClick={() => setBurger(!burger)}
                    icon={<ExpandSvg color='white' />}
                    style={{ left: 10, bottom: 40, backgroundColor: "var(--primary-color)" }}
                />
                <div className={`${burger ? "active" : ""} transition-all fixed-burger xl:block col-span-2 ps-[10px] h-fit pb-[20px]`} style={{ backgroundColor: '#0F69B7', color: "white", borderBottomRightRadius: "1rem" }}>
                    <h1 className='p-[20px] text-[2rem] text-center m-0'>{treeTitle}</h1>
                    <Tree
                        rootClassName='root-menu-tree'
                        rootStyle={{ backgroundColor: '#0F69B7', color: 'white' }}
                        switcherIcon={null}
                        titleRender={(node) => getTreeTitle(node.title, node.treeNode.length > 1, activeKeys.includes(node.key), node.children.length > 1)}
                        onSelect={handleSelectedTree}
                        expandedKeys={activeKeys}
                        autoExpandParent
                        treeData={formatTreeData}
                    />
                </div>
                <div className='col-span-12 xl:col-span-10 py-[40px] p-0 xl:p-[40px] std-container flex justify-center'>
                    <Outlet context={contextValue} />
                </div>
            </div>
            {
                currentRoute.contactUs && <div className="min-h-[700px] flex justify-center items-center" style={{ backgroundColor: 'var(--light-blue-color)' }}>
                    <BecomePartner />
                </div>
            }
        </div>)
    );
}
