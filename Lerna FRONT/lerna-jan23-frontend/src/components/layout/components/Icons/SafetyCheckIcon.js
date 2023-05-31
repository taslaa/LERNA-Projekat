import React from 'react'

export default function SafetyCheckIcon(props) {
    const { color, size } = { color: props.color, size: props.size };

    return (
        <svg fill={color} xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 96 960 960" width={size}><path d="M480 768q79 0 136-57t57-136q0-79-57-136t-136-57q-79 0-136 57t-57 136q0 79 57 136t136 57Zm17-195 69 63q6 5 6.5 13t-5.5 14q17-17-2.5-6t-23.5 7l-81-75q-1-1-5-11V470q0-9 6-15t15-6q9 0 15 6t6 15v103Zm-17 400q-4 0-7.5-.5T466 971q-134-40-220-164.5T160 533V337q0-19 11-34.5t28-22.5l260-97q11-4 21-4t21 4l260 97q17 7 28 22.5t11 34.5v196q0 149-86 273.5T494 971l-14 2Z" /></svg>
    )
}