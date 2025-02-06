import { getTreeTitle } from "../utils/Utils";

export const program = {
    title: "Program",
    description: "Our focus areas enhance lifelong learning through flexible, inclusive, and comprehensive initiatives that meet the changing needs of individuals and communities",
    route: [
        {
            title: getTreeTitle('National Lifelong Learning Forum'),
            label: 'National Lifelong Learning Forum',
            key: 'National Lifelong Learning Forum',
            path: "/program/forum",
            children: []
        },
        {
            title: getTreeTitle("Lifelong Learning Center"),
            label: 'Lifelong Learning Center',
            key: "Lifelong Learning Center",
            path: "/program/center",
            children: [],
        },
        {
            title: getTreeTitle("Lifelong Learning Club"),
            label: "Lifelong Learning Club",
            key: "Lifelong Learning Club",
            path: "/program/club",
            children: [],
        },
        {
            title: getTreeTitle("Lifelong Learning City"),
            label: "Lifelong Learning City",
            key: "Lifelong Learning City",
            path: "/program/city",
            children: [],
        },
        {
            title: getTreeTitle("Engagement"),
            label: "Engagement",
            key: "Engagement",
            path: "/program/engagement",
            children: [],
        }
    ]
}

export const aboutUs = {
    title: "About us",
    description: "Our focus areas enhance lifelong learning through flexible, inclusive, and comprehensive initiatives that meet the changing needs of individuals and communities",
    route: [
        {
            title: getTreeTitle('Mission & Vision'),
            label: 'Mission & Vision',
            key: 'Mission & Vision',
            path: "/about-us/mission",
            children: []
        },
        {
            title: getTreeTitle("Key Functions"),
            label: 'Key Functions',
            key: "Key Functions",
            path: "/about-us/key",
            children: [],
        },
        {
            title: getTreeTitle("NCLLL Member Ministries"),
            label: 'NCLLL Member Ministries',
            key: "NCLLL Member Ministries",
            path: "/about-us/member",
            children: [],
        },
        {
            title: getTreeTitle("Governing Board"),
            label: 'Governing Board',
            key: "Governing Board",
            path: "/about-us/board",
            children: [],
        },
        {
            title: getTreeTitle("SGLLL"),
            label: 'Secretariat General of NLLL',
            key: "Secretariat General of NLLL",
            path: "/about-us/sglll",
            children: [],
        },
        {
            title: getTreeTitle("Contact us"),
            label: 'Get in touch',
            key: "Contact us",
            path: "/about-us/contact",
            contactUs: true,
            children: []
        }
    ]
}

export const focusArea = {
    title: "Focus Areas",
    description: "Our focus areas enhance lifelong learning through flexible, inclusive, and comprehensive initiatives that meet the changing needs of individuals and communities",
    route: [
        {
            title: getTreeTitle('Lifelong Learning for all'),
            label: 'Lifelong Learning for all',
            key: 'Lifelong Learning for all',
            path: "/focus-area/all",
            children: []
        },
        {
            title: getTreeTitle("Comprehensive and Flexible Learning Program"),
            label: 'Comprehensive and Flexible Learning Program',
            key: "Comprehensive and Flexible Learning Program",
            path: "/focus-area/comprehensive-flexible",
            children: [],
        },
        {
            title: getTreeTitle("Lifelong Learning Environment"),
            label: 'Lifelong Learning Environment',
            key: "Lifelong Learning Environment",
            path: "/focus-area/environment",
            children: [],
        },
        {
            title: getTreeTitle("Professional Development"),
            label: 'Professional Development',
            key: "Professional Development",
            path: "/focus-area/professional",
            children: [],
        },
        {
            title: getTreeTitle("Accreditation & Recognition"),
            label: 'Accreditation & Recognition',
            key: "Accreditation & Recognition",
            path: "/focus-area/accreditation-recognition",
            children: [],
        },
        {
            title: getTreeTitle("Collaboration & Support"),
            label: 'Collaboration & Support',
            key: "Collaboration & Support",
            path: "/focus-area/collaboration-support",
            children: []
        }
    ]
}