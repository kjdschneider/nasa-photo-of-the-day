// My attempts to get a video player working through React


import React from 'react';
import {Player} from 'video-react';

const DisplayVideo = props => {
    return (
        <div>
            <div className='title'>
                <h1>Astronomy Video of the Day - {props.title}</h1>
                <h2 className='date'>{props.apodDate}</h2>
            </div>
            <div className='img-contain'>
                <Player playsInline src={props.url} alt='NASA Astronomy Video of the Day' />
            </div>
            <div className='info'>
                <p className='explanation'>{props.explanation}</p>
                <p className='copy'>{props.copywright}</p>
            </div>
        </div>
    )
}

export default DisplayVideo;