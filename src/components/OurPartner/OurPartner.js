import React, { useMemo } from "react";
import { Button, Skeleton } from "antd";
// import AutoScroll from "../AutoScroll/AutoScroll";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { fetchOurPartner } from "../../api/publicRequest";
import { CACHE_TIME, PARTNERS, STALE_TIME } from "../../constants/CacheAPI";
import Slider from "react-slick";

const OurPartner = ({ description, title, onClick }) => {
  const { t } = useTranslation();
  const { data, isLoading } = useQuery({
    queryKey: [PARTNERS, 100],
    queryFn: () => fetchOurPartner({ limit: 100 }),
    staleTime: STALE_TIME,
    cacheTime: CACHE_TIME,
  });

  const dataSource = useMemo(() => {
    let res = data;
    let results = res?.data?.results || [];

    if (results.length === 0) {
      return [];
    }

    // Ensure at least 8 items by duplicating existing ones
    while (results.length < 20) {
      results = [...results, ...results]; // Duplicate the array
    }

    return results;
  }, [data, isLoading]);


  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 0, // or 0 + cssEase:'linear' for continuous scroll
    speed: 4000,
    cssEase: 'linear',
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2,
    swipeToSlide: true,
    draggable: true,
    pauseOnHover: true,
    arrows: false,
    dots: false,
    // prevArrow: <div><ArrowSvg className="std-feature-arrow-prev" /></div>,
    // nextArrow: <div><ArrowSvg className="std-feature-arrow-next" transform="scale(-1)" /></div>,
    responsive: [
      {
        breakpoint: 1836, // xl
        settings: {
          slidesToShow: 4,
          rows: 2,
        },
      },
      {
        breakpoint: 1536, // xl
        settings: {
          slidesToShow: 3,
          rows: 2,
        },
      },
      {
        breakpoint: 1280, // lg
        settings: {
          slidesToShow: 3,
          rows: 2,
        },
      },
      {
        breakpoint: 992, // md
        settings: {
          slidesToShow: 2,
          rows: 2,
        },
      },
      {
        breakpoint: 640, // xs
        settings: {
          slidesToShow: 2,
          rows: 1,
        },
      },
      {
        breakpoint: 480, // xxs
        settings: {
          slidesToShow: 2,
          rows: 1,
        },
      },
    ],
  };

  return (
    <div className="flex text-center sm:text-start flex-col sm:grid grid-cols-4 gap-[1.875rem] sm:gap-[10%] px-[5%] min-h-[9.375rem] sm:min-h-[25rem]">
      <div className="w-full col-span-2 flex flex-col justify-center gap-[1.563rem]">
        <h1 className="std-title m-0">{t(title)}</h1>
        <div>
          <p className="std-content m-0">{t(description)}</p>
        </div>
        <Button className="std-btn" onClick={onClick}>{t("Become a partner")}</Button>
      </div>
      <div className="w-full col-span-2 space-y-0 sm:space-y-[1.875rem] overflow-hidden max-w-[100%]">
        <Slider {...settings} className="root-feature-carousel cursor-grab">
          {
            isLoading ?
              Array.from({ length: 20 }).map((_, index) => (
                <Skeleton.Image
                  key={index}
                  active
                  className="std-our-partner-logo w-auto !my-3 !h-[11.25rem] !aspect-square !flex"
                />
              ))
              :
              dataSource.map((data, index) => (
                <div className="mx-3" key={`${data?._id}-${index}`}>
                  <img
                    className="std-our-partner-logo my-3 w-auto !h-[11.25rem] !aspect-square object-contain"
                    src={data?.logo}
                    alt={`Partner logo duplicate ${index}`}
                  />
                </div>
              ))
          }
        </Slider>

        {/* <Carousel
          responsive={antdResponsive({
            xl: {
              slidesToShow: 4,
              row: 2
            },
            lg: {
              slidesToShow: 3,
              row: 2
            },
            md: {
              slidesToShow: 2,
              row: 2
            },
            xs: {
              slidesToShow: 2,
              rows: 1
            },
            xxs: {
              slidesToShow: 1,
              rows: 1
            }
          })}
          rootClassName='root-partner-dynamic-carousel root-feature-carousel cursor-grab hide-arrow center-arrow'
          autoplay
          swipeToSlide
          draggable
          infinite
          slidesToShow={4}
          rows={2}
          pauseOnHover
          pauseOnDotsHover
          arrows
          verticalSwiping
          dots={false}
          prevArrow={<div><ArrowSvg className="std-feature-arrow-prev" /></div>}
          nextArrow={<div><ArrowSvg className="std-feature-arrow-next" transform="scale(-1)" /></div>}
        >
          {
            isLoading ?
              Array.from({ length: 20 }, (_, index) => (
                <Skeleton.Image active
                  key={index}
                  className="std-our-partner-logo w-auto !my-3 !h-[11.25rem] !aspect-square !flex"
                />
              ))
              :
              dataSource.map((data, index) => (
                <div className="mx-3" key={`${data?._id}-${index}`}>
                  <img
                    key={`clone-${index}`}
                    className="std-our-partner-logo my-3 w-auto !h-[11.25rem] !aspect-square object-contain"
                    src={data?.logo}
                    alt={`Partner logo duplicate ${index}`}
                  />
                </div>
              ))
          }
        </Carousel> */}

        {/* <AutoScroll dataSource={dataSource} className="!hidden sm:!flex" />
        <AutoScroll dataSource={dataSource} scroll={"right"} className="!hidden sm:!flex" />
        <AutoScroll dataSource={dataSource} /> */}
      </div>
    </div>
  );
};

export default OurPartner;

