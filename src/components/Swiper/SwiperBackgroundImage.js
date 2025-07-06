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
import { MODULES_TYPE } from '../../constants/Bridge';

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
        <div className='flex flex-col items-center container mx-auto px-[1.875rem] sm:px-[3.75rem] lg:px-[6.25rem]'>
            <div>
                <h1 className='std-title'>{t(title)}</h1>
            </div>
            <div className='px-2 text-center'>
                <p className='std-content'>{t(description)}</p>
            </div>
            <div className='w-full'>
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
                        dataSource.map((data, index) => (
                            <div className='p-[0.313rem] md:p-[0.938rem]' key={`${data?._id}-${index}`}>
                                <NavLink role='button' to={(module === MODULES_TYPE.FOCUS_AREA ? "/focus-area/" : "/program/") + data?._id}>
                                    <div className='std-feature-card-wrapper'>
                                        <img className="std-feature-image" src={data.cover} alt={data.cover} />
                                        <div className='custom-feature-blur w-full !absolute bottom-0 min-h-[7.5rem] !rounded-none p-4'>
                                            <p className='line-clamp-2'>
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



// import React, { useContext, useMemo } from 'react';
// import Slider from 'react-slick';
// import { NavLink } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
// import { useQuery } from '@tanstack/react-query';
// import { LanguageContext } from '../../i18n/LanguageProvider';
// import { fetchModules } from '../../api/publicRequest';
// import { CACHE_TIME, MODULES, STALE_TIME } from '../../constants/CacheAPI';
// import { MODULES_TYPE } from '../../constants/Bridge';
// import { Skeleton } from 'antd';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// export default function SwiperBackgroundImage({ module, title, description }) {
//     const { t } = useTranslation();
//     const { lang } = useContext(LanguageContext);

//     const { data, isLoading } = useQuery({
//         queryKey: [MODULES, { mainCategory: module, subCategory: "", limit: 100 }],
//         queryFn: () => fetchModules({ mainCategory: module, subCategory: "", limit: 100 }),
//         staleTime: STALE_TIME,
//         cacheTime: CACHE_TIME,
//     });

//     const dataSource = useMemo(() => {
//         let results = data?.data?.results || [];
//         while (results.length > 0 && results.length < 12) {
//             results = results.concat(results);
//         }
//         return results;
//     }, [data]);

//     const slickSettings = {
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: 0,
//         speed: 8000,
//         cssEase: "linear",
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         draggable: true,
//         swipe: true,
//         swipeToSlide: true,
//         arrows: false,
//         pauseOnHover: true,
//         responsive: [
//             { breakpoint: 1280, settings: { slidesToShow: 3 } },
//             { breakpoint: 992, settings: { slidesToShow: 2 } },
//             { breakpoint: 640, settings: { slidesToShow: 1 } },
//         ]
//     };

//     return (
//         <div className="flex flex-col items-center container mx-auto">
//             <h1 className="std-title">{t(title)}</h1>
//             <p className="std-content text-center px-4">{t(description)}</p>

//             <div className="w-full px-[1.875rem] sm:px-[3.75rem] lg:px-[6.25rem] mt-6">
//                 {isLoading ? (
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                         {Array.from({ length: 4 }).map((_, idx) => (
//                             <div key={idx}>
//                                 <Skeleton.Image style={{ width: '100%', height: 160 }} active />
//                                 <Skeleton paragraph={{ rows: 2 }} active />
//                             </div>
//                         ))}
//                     </div>
//                 ) : dataSource.length > 0 ? (
//                     <Slider {...slickSettings} className="root-feature-carousel cursor-grab hide-arrow center-arrow">
//                         {dataSource.map((item, index) => (
//                             <div key={`${item?._id}-${index}`} className="p-[0.313rem] md:p-[0.938rem]">
//                                 <NavLink
//                                     role="button"
//                                     to={(module === MODULES_TYPE.FOCUS_AREA ? "/focus-area/" : "/program/") + item?._id}
//                                 >
//                                     <div className="std-feature-card-wrapper">
//                                         <img className="std-feature-image" src={item.cover} alt={item.cover} />
//                                         <div className="custom-feature-blur w-full !absolute bottom-0 min-h-[7.5rem] !rounded-none p-4">
//                                             <p className="line-clamp-2">{t(item[lang]?.title)}</p>
//                                         </div>
//                                     </div>
//                                 </NavLink>
//                             </div>
//                         ))}
//                     </Slider>
//                 ) : (
//                     <p className="text-gray-400 text-center py-4">{t("No data available")}</p>
//                 )}
//             </div>
//         </div>
//     );
// }