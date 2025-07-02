import React, { useContext, useMemo } from 'react'
import ArrowSvg from '../../assets/svgs/ArrowSvg';
import { Carousel, Skeleton } from 'antd';
import { antdResponsive } from '../../utils/Utils';
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
        let res = data;
        if (res?.code === 200 && !isLoading) {
            const resData = [...res?.data.map(data => ({
                imageUrl: data[lang]?.imageUrl,
                name: data[lang]?.name,
            }))];

            if (resData.length <= 6) {
                let newData = [...resData];
                while (newData.length <= 6) {
                    newData = [...newData, ...resData]; // Duplicate until length > 6
                }
                return newData;
            } else {
                return [...resData];
            }
        } else {
            if (isLoading) {
                return Array.from({ length: 20 }, (_, index) => ({
                    imageUrl: "",
                    name: "",
                    skeleton: true
                }));;
            } else {
                return [
                    // imageUrl: "/assets/images/partner/partner-" + title + ".png",
                    // name: listTitle[title - 1]
                ];
            }
        }
    }, [data, isLoading, lang])

    return (
        <div className='min-h-[21.875rem] md:min-h-[28.125rem] flex items-center container mx-auto'>
            <div className='text-center w-full'>
                <h1 className='std-title m-0'>{t(title)}</h1>

                <p className='std-content m-0 pt-[1.25rem] pb-[2.5rem]' style={{
                    color: "var(--primary-color)"
                }}>
                    {t(description)}
                </p>

                <div className='max-xxs:max-w-[12.813rem] max-w-[calc(10.313rem*8)] px-[0.313rem] md:px-[1.25rem] lg:px-0 w-full mx-auto'>
                    <Carousel
                        responsive={antdResponsive({
                            xl: {
                                slidesToShow: 6
                            },
                            lg: {
                                slidesToShow: 4
                            },
                            md: {
                                slidesToShow: 3
                            },
                            xs: {
                                slidesToShow: 2
                            },
                            xxs: {
                                slidesToShow: 1
                            },
                        })}
                        rootClassName='root-partner-list slick-item-center hide-arrow center-arrow cursor-grab'
                        autoplay
                        swipeToSlide
                        draggable
                        slidesToShow={8}
                        pauseOnHover
                        pauseOnDotsHover
                        arrows
                        verticalSwiping={false}
                        dots={false}
                        prevArrow={<div><ArrowSvg className="std-feature-arrow-prev" /></div>}
                        nextArrow={<div><ArrowSvg className="std-feature-arrow-next" transform="scale(-1)" /></div>}
                    >
                        {
                            isLoading ?
                                dataSource.map((data, index) => (
                                    <div className='px-[0.313rem] md:px-[0.625rem]' key={`${data?._id}-${index}`}>
                                        <div className='rounded-[0.625rem] w-[9.063rem] h-[10.313rem] flex justify-center items-center bg-white' onClick={onClick}>
                                            <Skeleton.Image active className='std-partner-logo' />
                                        </div>
                                    </div>
                                ))
                                :
                                dataSource.map((data, index) => (
                                    <div className='px-[0.313rem] md:px-[0.625rem]' key={`${data?._id}-${index}`}>
                                        <div className='rounded-[0.625rem] w-[9.063rem] h-[10.313rem] flex justify-center items-center bg-white' onClick={onClick}>
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
