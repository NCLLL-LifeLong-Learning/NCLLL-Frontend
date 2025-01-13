import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router';
import { getTreeTitle } from '../../../utils/Utils';

export default function OurProgramPage() {
    const { title, setTitle, description, setTreeDescription, onChildAction, setTreeData, setActiveKeys } = useOutletContext();

    useEffect(() => {
        setTitle("Programs");
        setTreeDescription("Our focus areas enhance lifelong learning through flexible, inclusive, and comprehensive initiatives that meet the changing needs of individuals and communities");
        setActiveKeys(["National Lifelong Learning Forum"]);
        setTreeData([
            {
                title: getTreeTitle('National Lifelong Learning Forum'),
                key: 'National Lifelong Learning Forum',
                children: []
            },
            {
                title: getTreeTitle("Lifelong Learning Center"),
                key: "Lifelong Learning Center",
                children: [],
            },
            {
                title: getTreeTitle("Lifelong Learning Club"),
                key: "Lifelong Learning Club",
                children: [],
            },
            {
                title: getTreeTitle("Lifelong Learning City"),
                key: "Lifelong Learning City",
                children: [],
            },
            {
                title: getTreeTitle("Engagement "),
                key: "Engagement ",
                children: [],
            }
        ]);
    }, [])

    return (
        <div>OurProgramPage</div>
    )
}
