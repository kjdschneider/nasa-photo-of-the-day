import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DisplayAPOD from './DisplayAPOD';

const APOD = () => {
    const [date, setDate] = useState('2012-03-14');
    const [nasa, setNasa] = useState({});
    

    // const today = new Date();
    // const year = today.getFullYear();
    // const month = today.getMonth();
    // const day = today.getDate();

    // setDate(`${year}-${month}-${day}`);

    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
            .then(res => setNasa(res.data))
            .catch(err => console.log(err))
    }, [])
    
    return (
        <div>
            <DisplayAPOD title={nasa.title} apodDate={date} url={nasa.url} explanation={nasa.explanation} copywright={nasa.copywright} />
        </div>
    )
}

export default APOD;