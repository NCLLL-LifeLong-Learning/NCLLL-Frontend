import React, { useEffect, useState } from 'react'
import ArrowSvg from '../../assets/svgs/ArrowSvg';
import { Carousel } from 'antd';

export default function MinistriesPartner() {
    const [dataSource, setDataSource] = useState([]);

    const fetchData = async () => {
        const res = [];


        let title = 1;
        for (let i = 1; i < 13; i++) {
            res.push({
                imageUrl: "/assets/images/partner/partner-" + title + ".png",
            })
            title++;
            if (title === 5) {
                title = 1;
            }
        }

        setDataSource([...res]);
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className='min-h-[450px] flex items-center container mx-auto'>
            <div className='text-center w-full'>
                <h1 className='std-title m-0'>Ministries Partner</h1>

                <p className='std-content m-0 pt-[20px] pb-[40px]' style={{
                    color: "var(--primary-color)"
                }}>Our focus areas enhance lifelong learning through flexible, inclusive, and comprehensive initiatives that meet the changing need.</p>
                
                <div className='max-w-[calc(165px*6)] w-full mx-auto'>
                    <Carousel
                        rootClassName='root-partner-list hide-arrow center-arrow cursor-grab'
                        autoplay
                        swipeToSlide
                        draggable
                        slidesToShow={6}
                        pauseOnHover
                        pauseOnDotsHover
                        arrows
                        verticalSwiping={false}
                        dots={false}
                        prevArrow={<div><ArrowSvg className="std-feature-arrow-prev" /></div>}
                        nextArrow={<div><ArrowSvg className="std-feature-arrow-next" transform="scale(-1)" /></div>}
                    >
                        {
                            dataSource.map(data => (
                                <div className='px-[10px]'>
                                    <div className='rounded-[10px] w-[145px] h-[165px] flex justify-center items-center bg-white'>
                                        <img className='std-partner-logo' src={data.imageUrl} alt={data.imageUrl} />
                                    </div>
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
