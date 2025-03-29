import { Breadcrumb, FloatButton, Tree } from 'antd';
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { Outlet, useLocation, useNavigate, useOutletContext } from 'react-router';
import { getTreeTitle } from '../utils/Utils';
import { AiOutlineHome } from "react-icons/ai";
import ArrowSvg from '../assets/svgs/ArrowSvg';
import BecomePartner from "../components/OurPartner/BecomePartner";
import ExpandSvg from '../assets/svgs/ExpandSvg';
import { useTranslation } from 'react-i18next';
import { IoMdClose } from 'react-icons/io';
import { LanguageContext } from '../i18n/LanguageProvider';

export default function DetailsLayout() {
    const { t } = useTranslation();
    const { lang } = useContext(LanguageContext);
    const context = useOutletContext();
    const [currentRoute, setCurrentRoute] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const [treeTitle, setTreeTitle] = useState("");
    const [treeDescription, setTreeDescription] = useState("");
    const [activeNodes, setActiveNodes] = useState([]);
    const [activeKeys, setActiveKeys] = useState([]);
    const [treeData, setTreeData] = useState([]);
    const [burger, setBurger] = useState(false);

    const handleChildAction = (message) => {
        console.log("Message from child:", message);
        alert(`Received from child: ${message}`);
    };

    const contextValue = {
        ...context,
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
            setActiveNodes([...selectedTree]);
            setCurrentRoute({ ...currentKey });
            if (location.pathname !== currentKey.path) {
                navigate(currentKey.path);
            }
        }
    }

    const renderTreeNodes = (nodes, treeNode = []) => {
        return nodes.map((node) => ({
            ...node,
            title: t(node.title),
            key: node.key,
            treeNode: [...treeNode, removeChild(node)],
            children: node.children ? renderTreeNodes(node.children, [...treeNode, removeChild(node)]) : [],
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
                setActiveNodes([...activeNodes]);
                setActiveKeys(activeNodes.map(node => node.key));
                setCurrentRoute({ ...activeNodes[activeNodes.length - 1] });
                return;
            }
            setActiveNodes([]);
            setActiveKeys([]);
            setCurrentRoute({ noHeader: true });
        }
    }, [treeData, location, location.pathname])


    const formatTreeData = useMemo(() => renderTreeNodes(treeData), [treeData, t])

    return (
        (<div>
            <div className='h-[260px] text-white flex justify-center items-center' style={{ background: "var(--detail-header-background)" }}>
                <div className='max-w-[800px] text-center gap-[20px] flex flex-col'>
                    <div className='std-title !text-white'
                        style={lang === "en" ? { fontVariant: "all-petite-caps" } : {}}
                    >{t(treeTitle)}</div>
                    <div className='std-content'>{t(treeDescription)}</div>
                </div>
            </div>
            <div className='bg-white shadow-md'>
                <div className='std-container py-[20px] flex items-center'>
                    <Breadcrumb
                        className='list-center breadcrumb-custom'
                        separator={<ArrowSvg className="size-[16px]" transform="scale(-1)" />}
                        items={[
                            {
                                onClick: () => navigate("/"),
                                title: <AiOutlineHome className='size-[24px]' />,
                            },
                            {
                                onClick: () => navigate(treeData[0]?.path),
                                title: <span
                                    style={lang === "en" ? { fontVariant: "all-petite-caps" } : {}}
                                >{t(treeTitle)}</span>,
                            },
                            ...activeNodes.map(i => ({
                                onClick: () => navigate(i?.path),
                                key: i.key,
                                title: <span
                                    style={lang === "en" ? { fontVariant: "all-petite-caps" } : {}}
                                >{t(i.title)}</span>,
                            })),
                        ]}
                    />
                </div>
            </div>
            <div className='relative grid grid-cols-12 gap-4'>
                <FloatButton
                    rootClassName='xl:hidden esi-floating-buger'
                    onClick={() => setBurger(!burger)}
                    icon={burger ? <IoMdClose className="text-white text-[20px]" /> : <ExpandSvg color='white' />}
                    style={{ left: 10, bottom: 40, backgroundColor: "var(--primary-color)" }}
                />
                <div className={`${burger ? "active" : ""} transition-all fixed-burger xl:block col-span-2 ps-[10px] h-fit pb-[20px]`} style={{ backgroundColor: '#0F69B7', color: "white", borderBottomRightRadius: "1rem" }}>
                    <h1 className='py-[20px] px-[10px] text-[1.5rem] md:text-[2rem] text-center m-0'
                        style={lang === "en" ? { fontVariant: "all-petite-caps" } : {}}
                    >{t(treeTitle)}</h1>
                    <Tree
                        rootClassName='root-menu-tree'
                        rootStyle={{ backgroundColor: '#0F69B7', color: 'white' }}
                        switcherIcon={null}
                        titleRender={(node) => getTreeTitle(node.title, node.treeNode.length > 1, activeKeys.includes(node.key), node.children.length > 1, lang)}
                        onSelect={handleSelectedTree}
                        expandedKeys={activeKeys}
                        autoExpandParent
                        treeData={formatTreeData}
                    />
                </div>
                <div className='col-span-12 xl:col-span-10 px-[10px] py-[40px] p-0 xl:p-[40px] std-container flex justify-center'>
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
