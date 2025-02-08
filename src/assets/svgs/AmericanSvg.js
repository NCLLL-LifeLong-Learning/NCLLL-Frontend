import React from 'react'
import { SvgProp } from './SvgProps'
import ENGLISH_FLAG from "../../assets/images/English.webp";

export default function AmericanSvg(props = SvgProp) {
    const { height, width } = props;

    return (
        <div className='h-fit rounded-full overflow-hidden'>
            <img src={ENGLISH_FLAG} alt={"Englsih"} style={{ width: width, height: height }} />
        </div>
    )
}
