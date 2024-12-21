import React from 'react'
import { SvgProp } from './SvgProps'

export default function ArrowSvg(props = SvgProp) {
    const { height, width, color, backgroundColor, transform, className } = props;
    return (
        <svg className={className} style={{ color: color, backgroundColor: backgroundColor, transform: transform }} width={width} height={height} viewBox="0 0 15 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 20.8993L15 1.09877C14.9994 0.898303 14.9491 0.701799 14.8544 0.530414C14.7596 0.359029 14.6242 0.219253 14.4625 0.126132C14.3008 0.0330099 14.1191 -0.00993218 13.9368 0.00192963C13.7546 0.0137914 13.5787 0.080007 13.4282 0.193448L0.404972 10.0937C-0.134991 10.504 -0.134991 11.4919 0.404972 11.9033L13.4282 21.8036C13.5784 21.9182 13.7543 21.9854 13.9369 21.9979C14.1194 22.0104 14.3016 21.9677 14.4636 21.8745C14.6257 21.7813 14.7613 21.6411 14.8559 21.4692C14.9504 21.2973 15.0003 21.1002 15 20.8993Z" fill="currentColor" />
        </svg>
    )
}
