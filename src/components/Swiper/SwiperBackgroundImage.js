import { Carousel } from 'antd';
import React, { useContext, useMemo } from 'react'
import ArrowSvg from '../../assets/svgs/ArrowSvg';
import { antdResponsive } from '../../utils/Utils';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../../i18n/LanguageProvider';
import { useQuery } from '@tanstack/react-query';
import { CACHE_TIME, MODULES, STALE_TIME } from '../../constants/CacheAPI';
import { fetchModules } from '../../api/publicRequest';
import { NavLink } from 'react-router-dom';

export default function SwiperBackgroundImage({ module, title, description }) {
    const { t } = useTranslation();
    const { lang } = useContext(LanguageContext);

    const { data, isLoading } = useQuery({
        queryKey: [MODULES, { mainCategory: module, subCategory: "", limit: 100 }],
        queryFn: () => fetchModules({ mainCategory: module, subCategory: "", limit: 100 }),
        staleTime: STALE_TIME,
        cacheTime: CACHE_TIME,
    });

    const { dataSource, total } = useMemo(() => {
        let res = data;
        let results = res?.data?.results || [];
        if (results.length === 0) {
            return { dataSource: [], total: 0 };
        }

        while (results.length < 10) {
            results = [...results, ...results]
        }

        return { dataSource: results, total: res?.data?.meta?.total_count };
    }, [data, isLoading]);

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
                                <NavLink role='button' to={"/program/" + data?._id}>
                                    <div className='std-feature-card-wrapper'>
                                        <img className="std-feature-image" src={data.cover} alt={data.cover} />
                                        <div className='custom-feature-blur w-full !absolute bottom-0 min-h-[120px] !rounded-none p-4'>
                                            <p>
                                                {t(data[lang]?.title)}
                                            </p>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}
