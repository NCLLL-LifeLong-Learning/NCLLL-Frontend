import { Carousel } from 'antd';
import React from 'react'
import ArrowSvg from '../../assets/svgs/ArrowSvg';
import { antdResponsive } from '../../utils/Utils';
import { useTranslation } from 'react-i18next';

export default function SwiperBackgroundImage({ onClick, dataSource, title, description }) {
    const { t } = useTranslation();

    return (
        <div className='flex flex-col items-center container mx-auto'>
            <div>
                <h1 className='std-title'>{t(title)}</h1>
            </div>
            <div className='px-2 text-center'>
                <p className='std-content'>{t(description)}</p>
            </div>
            <div className='w-full px-[30px] sm:px-[60px] lg:px-[100px]'>
                <Carousel
                    responsive={antdResponsive({
                        lg: {
                            slidesToShow: 3
                        },
                        md: {
                            slidesToShow: 2
                        },
                        xs: {
                            slidesToShow: 2
                        },
                        xxs: {
                            slidesToShow: 1,
                            rows: 1
                        }
                    })}
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
                            <div className='p-[5px] md:p-[15px]'>
                                <div className='std-feature-card-wrapper' onClick={onClick}>
                                    <img className="std-feature-image" src={data.imageUrl} alt={data.imageUrl} />
                                    <div className='custom-feature-blur w-full !absolute bottom-0 min-h-[120px] !rounded-none p-4'>
                                        <p>
                                            {t(data.title)}
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
