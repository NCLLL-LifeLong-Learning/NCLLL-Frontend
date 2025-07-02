import React, { useContext, useMemo } from 'react';
import ArrowSvg from '../../assets/svgs/ArrowSvg';
import { Skeleton } from 'antd';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../../i18n/LanguageProvider';
import { useQuery } from '@tanstack/react-query';
import { fetchMinistryPartner } from '../../api/publicRequest';
import { CACHE_TIME, MINISTRIES, STALE_TIME } from '../../constants/CacheAPI';

export default function MinistriesPartner({ description, title, onClick }) {
    const { t } = useTranslation();
    const { lang } = useContext(LanguageContext);

    const { data, isLoading } = useQuery({
        queryKey: [MINISTRIES],
        queryFn: fetchMinistryPartner,
        staleTime: STALE_TIME,
        cacheTime: CACHE_TIME,
    });

    const dataSource = useMemo(() => {
        if (data?.code === 200 && !isLoading) {
            let resData = [...data.data.map(d => ({
                imageUrl: d[lang]?.imageUrl,
                name: d[lang]?.name,
            }))];

            if (resData.length <= 6) {
                while (resData.length <= 12) {
                    resData = [...resData, ...resData]; // duplicate to allow looping
                }
            }
            return resData;
        }

        if (isLoading) {
            return Array.from({ length: 8 }, (_, index) => ({
                imageUrl: "",
                name: "",
                skeleton: true,
            }));
        }

        return [];
    }, [data, isLoading, lang]);

    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 4000,
        cssEase: 'linear',
        slidesToShow: 8,
        slidesToScroll: 1,
        draggable: true,
        swipe: true,
        swipeToSlide: true,
        arrows: false,
        // prevArrow: <div><ArrowSvg className="std-feature-arrow-prev" /></div>,
        // nextArrow: <div><ArrowSvg className="std-feature-arrow-next" transform="scale(-1)" /></div>,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1536, // xl
                settings: {
                    slidesToShow: 6,
                },
            },
            {
                breakpoint: 1280, // lg
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 992, // md
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 640, // xs
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480, // xxs
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };

    return (
        <div className='min-h-[21.875rem] md:min-h-[28.125rem] flex items-center container mx-auto'>
            <div className='text-center w-full'>
                <h1 className='std-title m-0'>{t(title)}</h1>

                <p className='std-content m-0 pt-[1.25rem] pb-[2.5rem]' style={{ color: "var(--primary-color)" }}>
                    {t(description)}
                </p>

                <div className='max-xxs:max-w-[12.813rem] max-w-[calc(10.313rem*8)] px-[0.313rem] md:px-[1.25rem] lg:px-0 w-full mx-auto'>
                    <Slider
                        {...settings}
                        className='root-partner-list cursor-grab'
                    >
                        {dataSource.map((data, index) => (
                            <div
                                className='px-[0.513rem] md:px-[0.625rem]'
                                key={`partner-${index}`}
                            >
                                <div
                                    className='rounded-[0.625rem] w-[9.063rem] h-[10.313rem] flex justify-center items-center bg-white'
                                    onClick={onClick}
                                >
                                    {data.skeleton ? (
                                        <Skeleton.Image active className='std-partner-logo' />
                                    ) : (
                                        <img className='std-partner-logo' src={data.imageUrl} alt={data.name} />
                                    )}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
