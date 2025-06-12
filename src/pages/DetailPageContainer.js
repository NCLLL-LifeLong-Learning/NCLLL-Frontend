import React from 'react'
import { Outlet } from 'react-router'

export default function DetailPageContainer() {
    return (
        <div className='std-container'>
            <div className='mt-4'>
                <Outlet />
            </div>
        </div>
    )
}
