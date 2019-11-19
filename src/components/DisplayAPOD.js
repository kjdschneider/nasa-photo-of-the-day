import React from 'react';

const DisplayAPOD = props => {
    return (
        <div>
            <div className='title'>
                <h1>Astronomy Photo of the Day - {props.title}</h1>
                <h2 className='date'>{props.apodDate}</h2>
            </div>
            <div className='img-contain'>
                <img src={props.url} alt='NASA Astronomy Photograph of the Day' />
            </div>
            <div className='info'>
                <p className='explanation'>{props.explanation}</p>
                <p className='copy'>{props.copywright}</p>
            </div>
        </div>
    )
}

export default DisplayAPOD;