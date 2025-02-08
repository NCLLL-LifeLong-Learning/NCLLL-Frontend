import React from 'react'
import { SvgProp } from './SvgProps';

export default function SideWayArrowSvg(props = SvgProp) {
    const { height, width, color, backgroundColor } = props;
    return (
        <svg xmlns="http://www.w3.org/2000/svg" style={{ color: color, backgroundColor: backgroundColor }} viewBox="0 0 11 11" width={height} height={width} fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M1.59984 10.3333L0.666504 9.39998L8.39984 1.66665H3.99984V0.333313H10.6665V6.99998H9.33317V2.59998L1.59984 10.3333Z" fill="currentColor" />
            <path d="M1.59984 10.3333L0.666504 9.39998L8.39984 1.66665H3.99984V0.333313H10.6665V6.99998H9.33317V2.59998L1.59984 10.3333Z" stroke="currentColor" />
        </svg>

    )
}
