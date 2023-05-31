import React from 'react'

export default function ArrowForwardIcon(props) {
    const { color, size } = { color: props.color, size: props.size };

    return (
        <svg fill={color} xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 96 960 960" width={size}><path d="M447 872q-14-13-14-32.5t14-33.5l183-183H196q-20 0-33.5-13.5T149 576q0-20 13.5-33.5T196 529h434L447 345q-14-13-14-33t14-34q14-13 33.5-13t33.5 13l265 265q7 7 10.5 15.5T793 576q0 9-3.5 17.5T779 609L514 874q-14 14-33.5 13T447 872Z" /></svg>
    )
}