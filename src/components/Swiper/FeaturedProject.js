import { Carousel } from 'antd';
import React, { useEffect, useState } from 'react'
import ArrowSvg from '../../assets/svgs/ArrowSvg';
export default function FeaturedProject() {
    const [dataSource, setDataSource] = useState([]);

    const fetchData = async () => {
        const res = [];

        const tempTitle = [
            "",
            "Lifelong Learning for all",
            "Comprehensive and Flexible learning Program",
            "Lifelong Learning Environment",
            "Professional Development",
            "Accreditation and Recognition",
            "Collaboration and Support"
        ];

        let title = 1;
        for (let i = 1; i < 20; i++) {
            res.push({
                imageUrl: "/assets/images/feature/feature-" + title + ".png",
                title: tempTitle[title]
            })
            title++;
            if (title === 7) {
                title = 1;
            }
        }

        setDataSource([...res]);
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className='flex flex-col items-center container mx-auto'>
            <div>
                <h1 className='std-title'>Featured Project</h1>
            </div>
            <div>
                <p className='std-content'>Our focus areas enhance lifelong learning through flexible, inclusive, and comprehensive initiatives that meet the changing needs of individuals and communities</p>
            </div>
            <div className='w-full'>
                <Carousel
                    rootClassName='root-feature-carousel cursor-grab hide-arrow center-arrow'
                    autoplay
                    swipeToSlide
                    draggable
                    slidesToShow={4}
                    rows={dataSource.length < 4 ? 1 : 2}
                    pauseOnHover
                    pauseOnDotsHover
                    arrows
                    verticalSwiping
                    dots={false}
                    prevArrow={<div><ArrowSvg className="std-feature-arrow-prev" /></div>}
                    nextArrow={<div><ArrowSvg className="std-feature-arrow-next" transform="scale(-1)" /></div>}
                >
                    {
                        dataSource.map(data => (
                            <div className='p-[15px]'>
                                <div className='std-feature-card-wrapper'>
                                    <img className="std-feature-image" src={data.imageUrl} alt={data.imageUrl} />
                                    <div className='custom-feature-blur w-full !absolute bottom-0 min-h-[120px] !rounded-none p-4'>
                                        <p>
                                            {data.title}
                                        </p>
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
