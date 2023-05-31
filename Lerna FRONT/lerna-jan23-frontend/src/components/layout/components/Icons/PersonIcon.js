import React from 'react'

export default function PersonIcon(props) {
    const { color, size } = { color: props.color, size: props.size };

    return (
        <svg fill={color} xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 96 960 960" width={size}><path d="M479.796 562q-77.203 0-126-48.796Q305 464.407 305 387.204 305 310 353.796 261q48.797-49 126-49Q557 212 606.5 261T656 387.204q0 77.203-49.5 126Q557 562 479.796 562ZM229 934q-40.05 0-67.025-27.5Q135 879 135 840v-27q0-44 22.633-77.417Q180.266 702.167 217 685q69-31 133.5-46.5T479.731 623q66.731 0 130.5 16Q674 655 742 685q38 16 61 49.5t23 78.5v27q0 39-27.269 66.5Q771.463 934 731 934H229Z" /></svg>
    )
}