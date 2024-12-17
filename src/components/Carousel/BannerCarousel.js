import { Carousel } from 'antd'
import React from 'react'

export default function BannerCarousel() {
    return (
        <div>

            <Carousel
                autoplay
                swipe
                pauseOnHover
                pauseOnDotsHover
            >
                <div className=''>
                    <div>

                    </div>
                    <img />
                </div>
            </Carousel>
        </div>
    )
}
