import React from 'react'
import ArrowSvg from '../../assets/svgs/ArrowSvg';
import { Carousel } from 'antd';
import { antdResponsive } from '../../utils/Utils';
import { useTranslation } from 'react-i18next';

export default function MinistriesPartner({ dataSource, description, title, onClick }) {
    const { t } = useTranslation();

    return (
        <div className='min-h-[350px] md:min-h-[450px] flex items-center container mx-auto'>
            <div className='text-center w-full'>
                <h1 className='std-title m-0'>{t(title)}</h1>

                <p className='std-content m-0 pt-[20px] pb-[40px]' style={{
                    color: "var(--primary-color)"
                }}>
                    {t(description)}
                </p>

                <div className='max-w-[calc(165px*6)] px-[5px] md:px-[20px] lg:px-0 w-full mx-auto'>
                    <Carousel
                        responsive={antdResponsive({
                            md: {
                                slidesToShow: 4
                            },
                            xs: {
                                slidesToShow: 2
                            },
                            xxs: {
                                slidesToShow: 2
                            },
                        })}
                        rootClassName='root-partner-list slick-item-center hide-arrow center-arrow cursor-grab'
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
                                <div className='px-[5px] md:px-[10px]'>
                                    <div className='rounded-[10px] w-[145px] h-[165px] flex justify-center items-center bg-white' onClick={onClick}>
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
