import React from 'react'
import { SvgProp } from './SvgProps';

export default function HoldingHeartSvg(props = SvgProp) {
    const { height, width, color, className, backgroundColor } = props;
    return (
        <svg className={className} style={{ color: color, backgroundColor: backgroundColor }} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 64 60" height={height} width={width} xmlns="http://www.w3.org/2000/svg">
            <path d="M57.8264 45C59.5699 45 61.0396 45.6 62.2358 46.8C63.4319 48 64.0198 49.4 63.9995 51L39.5808 60L18.2943 54V27H24.2241L46.3317 35.07C47.9129 35.69 48.7036 36.81 48.7036 38.43C48.7036 39.37 48.359 40.19 47.6697 40.89C46.9804 41.59 46.1087 41.96 45.0545 42H36.5399L31.2182 39.99L30.2147 42.81L36.5399 45H57.8264ZM45.6627 3.69C47.8116 1.23 50.5484 0 53.8732 0C56.6303 0 58.9617 1 60.8673 3C62.773 5 63.7866 7.3 63.9083 9.9C63.9083 11.96 62.8946 14.42 60.8673 17.28C58.84 20.14 56.8432 22.53 54.8767 24.45C52.9102 26.37 49.8389 29.22 45.6627 33C41.4459 29.22 38.3441 26.37 36.3574 24.45C34.3707 22.53 32.3738 20.14 30.3668 17.28C28.3597 14.42 27.3765 11.96 27.4171 9.9C27.4171 7.18 28.4003 4.88 30.3668 3C32.3332 1.12 34.7052 0.12 37.4825 0C40.7262 0 43.4529 1.23 45.6627 3.69ZM0 27H12.2124V60H0V27Z" fill="currentColor" />
        </svg>)
}
