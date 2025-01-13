import React from 'react'
import { SvgProp } from './SvgProps';

export default function PhoneSvg(props = SvgProp) {
    const { height, width, color, backgroundColor, className } = props;
    return (
        <svg className={className} style={{ color: color, backgroundColor: backgroundColor }} width={width} height={height} viewBox="0 0 19 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.1384 13.4567L14.4519 13.15C14.136 13.1129 13.8158 13.1478 13.5153 13.2523C13.2149 13.3567 12.942 13.5278 12.7173 13.7529L10.7711 15.699C7.76876 14.1716 5.32833 11.7312 3.80097 8.72883L5.75769 6.7721C6.21249 6.3173 6.43461 5.68268 6.36057 5.03749L6.05384 2.37211C5.9941 1.85606 5.74655 1.38003 5.35837 1.03476C4.9702 0.689502 4.46855 0.499154 3.94905 0.500003H2.11925C0.924071 0.500003 -0.0701525 1.49423 0.00388538 2.68942C0.564458 11.7221 7.78844 18.9355 16.8105 19.4961C18.0057 19.5702 18.9999 18.5759 18.9999 17.3807V15.5509C19.0105 14.4827 18.2066 13.5836 17.1384 13.4567Z" fill="currentColor" />
        </svg>)
}
