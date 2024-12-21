import React from 'react'

export default function AutoScroll(props) {
    const { dataSource, className, scroll } = props;
    return (
        <div className={`flex h-[100px] active ms-5 scrolling-container ${scroll === "right" ? "scroll-right" : "scroll-left"} ${className}`}>
            {dataSource.map((data, index) => (
                <img
                    key={index}
                    className="std-our-partner-logo"
                    src={data.imageUrl}
                    alt={`Partner logo ${index}`}
                />
            ))}
            {dataSource.map((data, index) => (
                <img
                    key={`clone-${index}`}
                    className="std-our-partner-logo"
                    src={data.imageUrl}
                    alt={`Partner logo duplicate ${index}`}
                />
            ))}

            {/* <div>
                <div className={`w-full h-full flex ${className}`}>
                    {
                        dataSource.map(data => (
                            <img className="std-our-partner-logo mx-4 w-full h-full" src={data.imageUrl} alt={data.imageUrl} />
                        ))
                    }
                </div>
            </div>
            <div>
                <div className={`w-full h-full flex ${className}`}>
                    {
                        dataSource.map(data => (
                            <img className="std-our=partner-logo mx-4 w-full h-full" src={data.imageUrl} alt={data.imageUrl} />
                        ))
                    }
                </div>
            </div> */}
        </div>
    )
}
