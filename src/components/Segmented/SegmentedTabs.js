import { Button, List, Segmented } from 'antd'
import React, { useContext, useEffect, useMemo, useState } from 'react'
import TagsSvg from '../../assets/svgs/TagsSvg';
import ArrowSvg from '../../assets/svgs/ArrowSvg';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../../i18n/LanguageProvider';
import { useNavigate } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { fetchBlogs } from '../../api/publicRequest';

const PAGE_LIMIT = 3; // Items per page

export default function SegmentedTabs(props) {
    const { t } = useTranslation();
    const { lang } = useContext(LanguageContext);
    const navigate = useNavigate();
    
    // Tab selection state
    const options = ['News', 'Events'];
    const [currentOption, setCurrentOption] = useState("News");
    
    // Map UI option values to API category values
    const tabToCategory = {
        'News': 'news',
        'Events': 'events'
    };
    
    // State to track pagination data for each tab
    const [tabsState, setTabsState] = useState({
        news: { currentPage: 1, data: [], total: 0 },
        events: { currentPage: 1, data: [], total: 0 },
    });
    
    // Get the current tab's API category value
    const selectedTab = tabToCategory[currentOption].toLowerCase();
    
    // Compute query params based on the selected tab
    const computeQuery = useMemo(() => {
        return {
            page: tabsState[selectedTab]?.currentPage || 1,
            limit: PAGE_LIMIT,
            category: selectedTab === "news" ? ["news"] : ["event"],
        };
    }, [selectedTab, tabsState]);

    // Fetch data with React Query
    const { data, isLoading } = useQuery({
        queryKey: ["blogs", computeQuery],
        queryFn: () => fetchBlogs(computeQuery),
        staleTime: 1000 * 60 * 5, // 5 minutes
        cacheTime: 1000 * 60 * 10, // 10 minutes
    });

    // Update the tab's data when new data is fetched
    useEffect(() => {
        if (data?.code === 200 && !isLoading) {
            setTabsState((prev) => ({
                ...prev,
                [selectedTab]: {
                    ...prev[selectedTab],
                    data: 
                        // If it's the first page, replace data; otherwise append
                        computeQuery.page === 1 
                            ? [...data.data.results]
                            : [...prev[selectedTab].data, ...data.data.results],
                    total: data.data.meta?.total_count || 0,
                },
            }));
        }
    }, [data, isLoading, selectedTab]);

    // Handle tab change
    const handleChangeTab = (value) => {
        setCurrentOption(value);
        
        // Reset to page 1 when changing tabs
        const newSelectedTab = tabToCategory[value].toLowerCase();
        
        // Only reset if we haven't loaded any data for this tab yet
        if (tabsState[newSelectedTab].data.length === 0) {
            setTabsState((prev) => ({
                ...prev,
                [newSelectedTab]: {
                    ...prev[newSelectedTab],
                    currentPage: 1,
                },
            }));
        }
    };

    // Handle "Load More" button click
    const handleLoadMore = () => {
        if (
            tabsState[selectedTab].currentPage * PAGE_LIMIT >= tabsState[selectedTab].total
        ) {
            return; // Stop loading if all data is fetched
        }

        setTabsState((prev) => ({
            ...prev,
            [selectedTab]: {
                ...prev[selectedTab],
                currentPage: prev[selectedTab].currentPage + 1, // Increment page
            },
        }));
    };

    const handleItemClick = (item) => {
        navigate(`/resources/${selectedTab}/${item._id}`);
    };

    // Get the current dataSource based on selected tab
    const dataSource = tabsState[selectedTab]?.data || [];
    
    // Determine if we should show "Load More" button
    const hasMoreData = tabsState[selectedTab]?.total > (tabsState[selectedTab]?.currentPage * PAGE_LIMIT);

    // Render "Load More" button
    const loadMore = (
        <div
            style={{
                textAlign: 'center',
                marginTop: "0.75rem",
                height: "2rem",
                lineHeight: '2rem',
                display: hasMoreData ? 'block' : 'none'
            }}
        >
            <Button
                size='large'
                shape='round'
                iconPosition='end'
                icon={
                    <ArrowSvg
                        transform="rotate(270deg)"
                        width='0.625rem'
                        height='0.625rem'
                    />
                }
                onClick={handleLoadMore}
                loading={isLoading}
            >
                {t("Load more")}
            </Button>
        </div>
    );

    const getTags = (tags) => {
        if (tags?.length > 0) {
            return (tags[0] && tags[0][lang]?.name) || "N/A"
        }
        return "N/A";
    };

    return (
        <div className='flex flex-col justify-center items-center gap-[1.875rem] pb-[2.5rem]'>
            <Segmented
                rootClassName='root-segmentedTab'
                options={options}
                cellPadding={100}
                value={currentOption}
                onChange={handleChangeTab}
            />

            <div className='w-full'>
                <List
                    grid={{
                        xs: 1,
                        sm: 2,
                        md: 2,
                        lg: 2,
                        xl: 2,
                        xxl: 3,
                    }}
                    loading={isLoading}
                    dataSource={dataSource}
                    renderItem={(item) => (
                        <div className='px-[1.25rem] py-[0.938rem]' onClick={() => handleItemClick(item)}>
                            <div className='std-card-wrapper'>
                                <div>
                                    <img className="std-card-image" src={item?.cover} alt={item?.cover} />
                                </div>
                                <div className='p-[0.5rem] lg:p-[1.25rem] flex flex-col gap-1 lg:gap-2'>
                                    <div className='flex items-center justify-start gap-1' style={{ color: "#00000080" }}>
                                        <TagsSvg className="size-[0.75rem] lg:size-[1.25rem]" />
                                        <div className='line-clamp-1 text-[0.75rem] lg:text-[1.25rem]'>{getTags(item.tags)}</div>
                                    </div>
                                    <h1 className='text-[1rem] lg:text-[1.5rem] line-clamp-1 !text-black'>{item[lang]?.title}</h1>
                                </div>
                            </div>
                        </div>
                    )}
                />
                {/* Load More button is placed outside the List component */}
                {loadMore}
            </div>
        </div>
    );
}