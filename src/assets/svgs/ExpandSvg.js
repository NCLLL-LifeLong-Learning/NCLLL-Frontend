import React from 'react'
import { SvgProp } from './SvgProps';

export default function ExpandSvg(props = SvgProp) {
    const { height, width, color, className, backgroundColor } = props;
    return (
        <svg className={className} style={{ color: color, backgroundColor: backgroundColor }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height={height} width={width} xmlns="http://www.w3.org/2000/svg">
            <path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"></path>
        </svg>
    )
}
