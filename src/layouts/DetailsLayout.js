import { Breadcrumb, Tree } from 'antd';
import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router';
import { getTreeTitle } from '../utils/Utils';
import { AiOutlineHome } from "react-icons/ai";
import ArrowSvg from '../assets/svgs/ArrowSvg';
import BecomePartner from "../components/OurPartner/BecomePartner";

export default function DetailsLayout() {
    const navigate = useNavigate();
    const [menu, setMenu] = useState();
    const [contactUs, setContactUs] = useState(false);
    const [treeTitle, setTreeTitle] = useState("Documents");
    const [treeDescription, setTreeDescription] = useState("Documents");
    const [activeKeys, setActiveKeys] = useState(["Laws & Regulation"]);
    const [treeData, setTreeData] = useState([
        {
            title: getTreeTitle('All'),
            key: 'All',
            children: []
        },
        {
            title: getTreeTitle("Legal Document"),
            key: "Legal Document",
            children: [],
        },
        {
            title: getTreeTitle("Administration"),
            key: "Administration",
            children: [
                {
                    title: getTreeTitle('Laws & Regulation', true),
                    key: 'Laws & Regulation',
                },
                {
                    title: getTreeTitle('Royal Decrees', true),
                    key: 'Royal Decrees',
                },
                {
                    title: getTreeTitle("Sub-Decrees", true),
                    key: "Sub-Decrees",
                }, {
                    title: getTreeTitle("Circulations", true),
                    key: "Circulations"
                }, {
                    title: getTreeTitle("Prakas", true),
                    key: "Prakas"
                }, {
                    title: getTreeTitle("Decisions", true),
                    key: "Decisions"
                }, {
                    title: getTreeTitle("Orders", true),
                    key: "Orders"
                }
            ],
        },
        {
            title: getTreeTitle("Policy & Strategy"),
            key: "Policy & Strategy",
            children: [],
        },
        {
            title: getTreeTitle("Projects"),
            key: "Projects",
            children: [],
        },
        {
            title: getTreeTitle("News & Event"),
            key: "News & Event",
            children: [],
        },
        {
            title: getTreeTitle("Report & Publication"),
            key: "Report & Publication",
            children: [],
        },
    ]);

    const handleChildAction = (message) => {
        console.log("Message from child:", message);
        alert(`Received from child: ${message}`);
    };

    const contextValue = {
        title: treeTitle,
        setTitle: (value) => setTreeTitle(value),
        description: treeDescription,
        setTreeDescription: (value) => setTreeDescription(value),
        menu: menu,
        setTreeData: (value) => setTreeData([...value]),
        activeKeys: activeKeys,
        setActiveKeys: (value) => setActiveKeys(value),
        setShowContactForm: (value) => setContactUs(value),
        onChildAction: handleChildAction, // Function passed to child
    };

    const handleSelectedTree = (selectedKeys, { selected, node }) => {
        const key = selectedKeys[0];

        // Find all parent keys
        const parentKeys = getParentKeys(treeData, key);

        // Combine selected and parent keys
        const updatedActiveKeys = selected ? [...parentKeys, key] : [];

        const currentKey = treeData.find(i => i.key === key);
        
        setActiveKeys(updatedActiveKeys);

        console.log("currentKey = ", currentKey);
        if (currentKey) {
            navigate(currentKey.path);
        }
    }

    const getParentKeys = (nodes, key, parents = []) => {
        for (const node of nodes) {
            if (node.key === key) {
                return parents;
            }
            if (node.children) {
                const result = getParentKeys(node.children, key, [...parents, node.key]);
                if (result) {
                    return result;
                }
            }
        }
        return null;
    };

    const renderTreeNodes = (nodes, isChild) => {
        return nodes.map((node) => ({
            ...node,
            title: getTreeTitle(node.title, isChild, activeKeys.includes(node.key)),
            key: node.key,
            children: node.children ? renderTreeNodes(node.children, true) : null,
        }));
    }

    return (
        <div>
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
                                title: i,
                            })),
                        ]}
                    />
                </div>
            </div>
            <div className='grid grid-cols-12 gap-4'>
                <div className='col-span-2 ps-[10px] h-fit rounded-l pb-[20px]' style={{ backgroundColor: '#0F69B7', color: "white", borderBottomRightRadius: "10px" }}>
                    <h1 className='p-[20px] text-[30px] text-center m-0'>{treeTitle}</h1>
                    <Tree
                        rootClassName='root-menu-tree'
                        rootStyle={{ backgroundColor: '#0F69B7', color: 'white' }}
                        switcherIcon={null}
                        activeKey={"Laws & Regulation"}
                        onSelect={handleSelectedTree}
                        defaultExpandAll
                        treeData={renderTreeNodes(treeData)}
                    />
                </div>
                <div className='col-span-9 p-[40px]'>
                    <Outlet context={contextValue} />
                </div>
            </div>
            {
                contactUs && <div className="min-h-[700px] flex justify-center items-center" style={{ backgroundColor: 'var(--light-blue-color)' }}>
                    <BecomePartner />
                </div>
            }
        </div>
    )
}
