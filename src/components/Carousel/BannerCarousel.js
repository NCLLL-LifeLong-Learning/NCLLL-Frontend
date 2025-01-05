import { Carousel } from 'antd'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { antdResponsive } from '../../utils/Utils';

export default function BannerCarousel() {
    const [dataSource, setDataSource] = useState([
        {
            _id: "1",
            imageUrl: "/assets/images/banner/banner-1.jpg"
        },
    ]);

    const fetchData = async () => {
        setDataSource([
            {
                _id: "1",
                imageUrl: "/assets/images/banner/banner-1.jpg"
            },
            {
                _id: "2",
                imageUrl: "/assets/images/banner/banner-2.jpg"
            },
            {
                _id: "3",
                imageUrl: "/assets/images/banner/banner-3.jpg"
            }
        ]);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='pb-[40px]'>
            <Carousel
                responsive={antdResponsive({
                    lg: {
                        centerPadding: '40px'
                    },
                    md: {
                        centerPadding: '40px'
                    },
                    xxs: {
                        centerPadding: '15px'
                    }
                })}
                rootClassName='root-banner-carousel'
                autoplay
                swipeToSlide
                draggable
                slidesToShow={1}
                verticalSwiping
                pauseOnHover
                pauseOnDotsHover
                centerMode
                centerPadding='100px'
                dotPosition='bottom'
                dots={true}
            >
                {
                    dataSource.map(data => (
                        <div className='px-[5px] md:px-[15px]'>
                            <div className='custom-blur'>
                                <img className="std-banner-image" src={data.imageUrl} alt={data.imageUrl} />
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}
