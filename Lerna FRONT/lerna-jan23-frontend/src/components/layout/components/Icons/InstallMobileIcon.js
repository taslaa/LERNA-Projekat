import React from 'react'

export default function InstallMobileIcon(props) {
    const { color, size } = { color: props.color, size: props.size };

    return (
        <svg fill={color} xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 96 960 960" width={size}><path d="M260 1016q-24.75 0-42.375-17.625T200 956V196q0-24.75 17.625-42.375T260 136h320v150H260v580h440V736h60v220q0 24.75-17.625 42.375T700 1016H260Zm473.867-387Q728 629 723 627.5q-5-1.5-10-6.5L569 477q-9-9-9-21t9-21q9-9 21-8.5t21 8.5l93 92V256q0-12.75 8.675-21.375 8.676-8.625 21.5-8.625 12.825 0 21.325 8.625T764 256v271l93-92q9-8 21-8.5t21 8.5q9 9 9 21t-9 21L755 621q-5 5-10.133 6.5-5.134 1.5-11 1.5Z" /></svg>
    )
}