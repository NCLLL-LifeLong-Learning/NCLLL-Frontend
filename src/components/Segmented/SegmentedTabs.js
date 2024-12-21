import { Carousel, Segmented } from 'antd'
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react'
import ClockSvg from "../../assets/svgs/ClockSvg";

export default function SegmentedTabs() {
    const [dataSource, setDataSource] = useState([]);
    const [options, setOptions] = useState(['News', 'Events']);

    const fetchData = async () => {
        const res = [];

        for (let i = 1; i < 10; i++) {
            res.push({
                imageUrl: "/assets/images/segmented/event-news.png",
                title: "News Title " + i,
                publishedAt: dayjs().format("DD MMMM YYYY")
            });
        }

        setDataSource([...res]);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='flex flex-col items-center'>
            <Segmented
                rootClassName='root-segmentedTab'
                options={options}
                cellPadding={100}
            />

            <div className='w-full'>
                <Carousel
                    rootClassName='root-segmented-carousel'
                    autoplay
                    swipeToSlide
                    draggable
                    slidesToShow={3}
                    pauseOnHover
                    centerMode
                    centerPadding='150px'
                >
                    {
                        dataSource.map(data => (
                            <div className='px-[20px] py-[15px]'>
                                <div className='std-card-wrapper'>
                                    <div>
                                        <img className="std-card-image" src={data.imageUrl} alt={data.imageUrl} />
                                    </div>
                                    <div className='p-[20px]'>
                                        <h1 className='text-lg std-card-title'>{data.title}</h1>
                                        <div className='flex gap-2'>
                                            <div>
                                                <ClockSvg width='20px'  height='20px'/>
                                            </div>
                                            <div>
                                                {data.publishedAt}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}
