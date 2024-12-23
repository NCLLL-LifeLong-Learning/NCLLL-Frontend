import React from 'react'
import { useOutletContext } from 'react-router';

export default function OurProgramPage() {
    const { title, description, onChildAction } = useOutletContext();
    return (
        <div>OurProgramPage</div>
    )
}
