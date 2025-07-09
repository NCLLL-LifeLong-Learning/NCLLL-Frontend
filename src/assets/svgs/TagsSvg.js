import React from 'react'
import { SvgProp } from './SvgProps';

export default function TagsSvg(props = SvgProp) {
    const { height, width, className } = props;
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={height} height={width} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            <line x1="8" y1="8" x2="16" y2="8" />
        </svg>
    )
}
