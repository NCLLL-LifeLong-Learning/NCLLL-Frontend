import { Button, List, Segmented } from 'antd'
import React, { useState } from 'react'
import TagsSvg from '../../assets/svgs/TagsSvg';
import ArrowSvg from '../../assets/svgs/ArrowSvg';

export default function SegmentedTabs({ total, onLoadMore, dataSource, options, defaultOpitons, onChange }) {
    const [currentOption, setCurrentOption] = useState(defaultOpitons);

    const handleChangeDefault = (value) => {
        setCurrentOption(value);
        onChange(value);
    }

    const loadMore =
        total > dataSource.length ? <div
            style={{
                textAlign: 'center',
                marginTop: 12,
                height: 32,
                lineHeight: '32px',
            }}
        >
            <Button
                size='large'
                shape='round'
                iconPosition='end'
                icon={
                    <ArrowSvg
                        transform="rotate(270deg)"
                        width='10px'
                        height='10px'
                    />
                }
                onClick={onLoadMore}
            >
                Load more
            </Button>
        </div> : null;

    return (
        <div className='flex flex-col justify-center items-center gap-[30px] pb-[40px]'>
            <Segmented
                rootClassName='root-segmentedTab'
                options={options}
                cellPadding={100}
                value={currentOption}
                onChange={handleChangeDefault}
            />

            <div className='w-full'>
                <List
                    grid={{
                        xs: 1,
                        sm: 2,
                        md: 2,
                        lg: 2,
                        xl: 2,
                        xxl: 3,
                    }}
                    loadMore={loadMore}
                    dataSource={dataSource}
                    renderItem={(data) => {
                        return <div className='px-[20px] py-[15px]'>
                            <div className='std-card-wrapper'>
                                <div>
                                    <img className="std-card-image" src={data.imageUrl} alt={data.imageUrl} />
                                </div>
                                <div className='p-[20px] flex flex-col gap-2'>
                                    <div className='flex items-center justify-start gap-1' style={{ color: "#00000080" }}>
                                        <TagsSvg width='20px' height='20px' />
                                        <div>{data.tags}</div>
                                    </div>
                                    <h1 className='text-lg !text-black std-card-title'>{data.title}</h1>
                                </div>
                            </div>
                        </div>
                    }}
                />
                {/* <Carousel
                    responsive={antdResponsive({
                        xl: {
                            slidesToShow: 3,
                        },
                        lg: {
                            slidesToShow: 2,
                        },
                        md: {
                            slidesToShow: 2,
                            centerPadding: '60px'
                        },
                        xxs: {
                            slidesToShow: 1,
                            centerPadding: '30px'
                        }
                    })}
                    rootClassName='root-segmented-carousel'
                    autoplay
                    swipeToSlide
                    draggable
                    pauseOnHover
                    centerMode
                    slidesToShow={3}
                    centerPadding='100px'
                >
                    {
                        dataSource.map(data => (
                            <div className='px-[20px] py-[15px]'>
                                <div className='std-card-wrapper'>
                                    <div>
                                        <img className="std-card-image" src={data.imageUrl} alt={data.imageUrl} />
                                    </div>
                                    <div className='p-[20px]'>
                                        <h1 className='text-lg std-card-title'>{data.title}</h1>
                                        <div className='flex gap-2'>
                                            <div>
                                                <ClockSvg width='20px' height='20px' />
                                            </div>
                                            <div>
                                                {data.publishedAt}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </Carousel> */}
            </div>
        </div>
    )
}
