import { Button, Carousel, Skeleton } from 'antd'
import React, { useMemo } from 'react'
import { antdResponsive } from '../../utils/Utils';
import { useQuery } from '@tanstack/react-query';
import { fetchBanners } from '../../api/publicRequest';
import { useNavigate } from 'react-router';

export default function BannerCarousel() {
    const navigate = useNavigate();
    const { data, isLoading } = useQuery({
        queryKey: ["banners"],
        queryFn: fetchBanners,
        staleTime: 5 * 60 * 1000,
        cacheTime: 30 * 60 * 1000, // Keep cache for 30 minutes
    });

    const dataSource = useMemo(() => {
        let res = data;
        if (res?.code === 200 && !isLoading) {
            return [...res?.data?.results || []];
        } else {
            return [
                // {
                //     "_id": "67dfb7d73b642de5375c7570",
                //     "title": "Hello ",
                //     "imageUrl": "https://picsum.photos/512/513",
                //     "created_at": "2025-03-23T07:27:19.994Z",
                //     "updated_at": "2025-03-23T07:27:19.994Z",
                //     "__v": 0
                // }
            ];
        }
    }, [data, isLoading])

    const navigateDetail = (record) => {
        navigate(`/blog/${record?._id}`);
    }

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
                    isLoading ?
                        Array.from({ length: 3 }, (_, index) => (
                            <div className='px-[5px] md:px-[15px]' key={index}>
                                <div className='custom-blur'>
                                    <Skeleton.Image active className="std-banner-image" />
                                </div>
                            </div>
                        ))
                        :
                        dataSource.map((data, index) => (
                            <div className='px-[5px] md:px-[15px] relative' key={`${data?._id}-${index}`}>
                                <div className='custom-blur'>
                                    <img className="std-banner-image" src={data.cover} alt={data.cover} />
                                </div>
                                <div className='absolute bottom-[25px] w-full flex justify-center z-[5]'>
                                    <Button className='std-btn' onClick={() => navigateDetail(data)}>
                                        Qucik Link
                                    </Button>
                                </div>
                            </div>
                        ))
                }
            </Carousel>
        </div>
    )
}
