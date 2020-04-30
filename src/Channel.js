import React, { useState } from 'react';

export function Channel(props) {
    const [favourite, setFavourite] = useState(false);

    return (
        <li className="nobull">
            <span >{props.channel.name}</span>
            {' '}
            <i className={favourite ? 'fas fa-heart' : 'far fa-heart'}
               onClick={() => setFavourite(!favourite)}
            />
        </li>
    );
}