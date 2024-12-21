import React from 'react'
import { SvgProp } from './SvgProps'

export default function OutletArrowSvg(props = SvgProp) {
    const { height, width, color, backgroundColor, transform, className } = props;
    return (
        <svg className={className} style={{ color: color, backgroundColor: backgroundColor, transform: transform }} width={width} height={height} viewBox="0 0 36 63" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.37664 1.38673C0.495174 2.27491 -1.52089e-07 3.4794 -2.06986e-07 4.7353C-2.61883e-07 5.99119 0.495174 7.19568 1.37664 8.08387L24.6508 31.5286L1.37663 54.9733C0.520154 55.8666 0.0462355 57.063 0.0569471 58.3048C0.0676587 59.5467 0.562146 60.7346 1.43391 61.6128C2.30567 62.4909 3.48495 62.989 4.71776 62.9998C5.95056 63.0106 7.13826 62.5332 8.02504 61.6705L34.6234 34.8772C35.5048 33.989 36 32.7845 36 31.5286C36 30.2727 35.5048 29.0682 34.6234 28.18L8.02504 1.38673C7.14331 0.498805 5.9476 -1.31363e-06 4.70084 -1.36813e-06C3.45407 -1.42263e-06 2.25836 0.498805 1.37664 1.38673Z" fill="black" />
        </svg>
    )
}
