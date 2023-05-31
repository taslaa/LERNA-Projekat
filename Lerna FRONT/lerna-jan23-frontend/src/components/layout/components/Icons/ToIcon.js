import React from 'react'

export default function ToIcon(props) {
    const { color, size } = { color: props.color, size: props.size };

    return (
        <svg fill={color} xmlns="http://www.w3.org/2000/svg"  height={size} viewBox="0 96 960 960" width={size}><path d="m480 817-43-42 169-169H80v-60h526L438 377l42-42 241 241-241 241Zm340-1V336h60v480h-60Z"/></svg>
    )
}