import React from 'react'

export default function MenuIcon(props) {
    const { color, size } = { color: props.color, size: props.size };

    return (
        <svg fill={color} xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 96 960 960" width={size}><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" /></svg>
    )
}