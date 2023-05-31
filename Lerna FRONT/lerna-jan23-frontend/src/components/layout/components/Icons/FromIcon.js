import React from 'react'

export default function FromIcon(props) {
    const { color, size } = { color: props.color, size: props.size };

    return (
        <svg fill={color} xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 96 960 960" width={size}><path d="M80 816V336h60v480H80Zm559 1-43-42 169-169H239v-60h526L597 377l42-42 241 241-241 241Z"/></svg>
    )
}