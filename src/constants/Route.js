export const program = {
    title: "Program",
    description: "Our focus areas enhance lifelong learning through flexible, inclusive, and comprehensive initiatives that meet the changing needs of individuals and communities",
    route: [
        {
            title: "Engagement",
            label: "Engagement",
            key: "Engagement",
            noHeader: true,
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
            title: 'Mission & Vision',
            label: 'Mission & Vision',
            key: 'Mission & Vision',
            path: "/about-us/mission",
            children: []
        },
        {
            title: "Key Functions",
            label: 'Key Functions',
            key: "Key Functions",
            path: "/about-us/key",
            children: [],
        },
        {
            title: "NCLLL Member Ministries",
            label: 'NCLLL Member Ministries',
            key: "NCLLL Member Ministries",
            path: "/about-us/member",
            children: [],
        },
        {
            title: "Governing Board",
            label: 'Governing Board',
            key: "Governing Board",
            path: "/about-us/board",
            children: [],
        },
        {
            title: "Secretariat General",
            label: 'Secretariat General of NLLL',
            key: "Secretariat General of NLLL",
            path: "/about-us/sglll",
            children: [],
        },
        {
            title: "Contact Us",
            label: 'Get in touch',
            key: "Contact us",
            path: "/about-us/contact",
            contactUs: true,
            children: []
        }
    ]
}

export const resources = {
    title: "Resources",
    description: "Our focus areas enhance lifelong learning through flexible, inclusive, and comprehensive initiatives that meet the changing needs of individuals and communities",
    route: [
        {
            title: 'All',
            label: 'All',
            key: 'All',
            noHeader: true,
            path: "/resources",
            children: []
        },
        // {
        //     title: "Legal Document",
        //     label: 'Legal Document',
        //     key: "Legal Document",
        //     noHeader: true,
        //     path: "/resources/laws",
        //     children: [],
        // },
        {
            noHeader: true,
            title: "Administration",
            label: 'Administration',
            key: "Administration",
            path: "/resources/admin",
            children: [
                {
                    noHeader: true,
                    title: 'Laws & Regulation',
                    key: 'Laws & Regulation',
                    path: "/resources/admin/laws_and_regulation",
                },
                {
                    noHeader: true,
                    title: 'Royal Decrees',
                    key: 'Royal Decrees',
                    path: "/resources/admin/royal_decrees",
                },
                {
                    noHeader: true,
                    title: "Sub-Decrees",
                    path: "/resources/admin/sub_decrees",
                    key: "Sub-Decrees",
                }, {
                    noHeader: true,
                    title: "Circulations",
                    path: "/resources/admin/circulations",
                    key: "Circulations"
                }, {
                    noHeader: true,
                    title: "Prakas",
                    path: "/resources/admin/prakas",
                    key: "Prakas"
                }, {
                    noHeader: true,
                    title: "Decisions",
                    path: "/resources/admin/decisions",
                    key: "Decisions"
                }, {
                    title: "Orders",
                    noHeader: true,
                    path: "/resources/admin/orders",
                    key: "Orders"
                }
            ],
        },
        {
            title: "Policy & Strategy",
            label: 'Policy & Strategy',
            key: "Policy & Strategy",
            path: "/resources/policy",
            children: [],
            noHeader: true,
        },
        {
            title: "Report & Publication",
            label: 'Report & Publication',
            key: "Report & Publication",
            noHeader: true,
            path: "/resources/report",
            children: []
        },
        {
            title: "Projects",
            label: 'Projects',
            key: "Projects",
            noHeader: true,
            path: "/resources/project",
            children: [],
        },
        {
            title: "News & Event",
            label: 'News & Event',
            noHeader: true,
            key: "News & Event",
            path: "/resources/news",
            children: []
        }
    ]
}

export const focusArea = {
    title: "Focus Areas",
    description: "Our focus areas enhance lifelong learning through flexible, inclusive, and comprehensive initiatives that meet the changing needs of individuals and communities",
    route: [
        {
            title: 'Lifelong Learning for all',
            label: 'All',
            key: 'All',
            path: "/focus-area/all",
            children: []
        },
    ]
}