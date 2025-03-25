import { Carousel, message, Skeleton } from 'antd'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { antdResponsive } from '../../utils/Utils';
import httpClient from '../../api/httpClient';
import { LIST_BANNER } from '../../api/URLs';

export default function BannerCarousel() {
    const [loading, setLoading] = useState(true);
    const [dataSource, setDataSource] = useState([
        // {
        //     "_id": "67dfb7d73b642de5375c7570",
        //     "title": "Hello ",
        //     "imageUrl": "https://picsum.photos/512/513",
        //     "created_at": "2025-03-23T07:27:19.994Z",
        //     "updated_at": "2025-03-23T07:27:19.994Z",
        //     "__v": 0
        // }
    ]);

    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await httpClient.get(LIST_BANNER).then(res => res.data).catch(error => { throw error });

            if (res?.code === 200) {
                setDataSource([...res?.data]);
            } else {
                setDataSource([]);
            }
        } catch (error) {
            message.error("Internal Server Error!");
        } finally {
            setLoading(false);
        }
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
                    loading ?
                        Array.from({ length: 3 }, (_, index) => (
                            <div className='px-[5px] md:px-[15px]'>
                                <div className='custom-blur'>
                                    <Skeleton.Image active={true} className="std-banner-image" />
                                </div>
                            </div>
                        ))
                        :
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
