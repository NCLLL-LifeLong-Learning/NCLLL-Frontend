import React from 'react'
import { SvgProp } from './SvgProps';

export default function DownloadSvg(props = SvgProp) {
    const { height, width, color, className, backgroundColor } = props;
    return (
        <svg width={width} height={height} className={className} style={{ color: color, backgroundColor: backgroundColor }} fill="none" viewBox="0 0 29 31" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 22.6471V25.8235C2 26.666 2.32924 27.4739 2.91529 28.0696C3.50134 28.6653 4.2962 29 5.125 29H23.875C24.7038 29 25.4987 28.6653 26.0847 28.0696C26.6708 27.4739 27 26.666 27 25.8235V22.6471M6.6875 13.1176L14.5 21.0588M14.5 21.0588L22.3125 13.1176M14.5 21.0588V2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}
