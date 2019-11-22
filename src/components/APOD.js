import React, {useEffect, useState} from 'react';
import axios from 'axios';
import DisplayAPOD from './DisplayAPOD';

const APOD = () => {
    const [date, setDate] = useState('2012-03-14');
    const [nasa, setNasa] = useState({});
    

    const today = new Date();
    const year = today.getFullYear();
    const month = (Number(today.getMonth()) + 1).toString();
    const day = today.getDate();

    useEffect(() => {
        setDate(`${year}-${month}-${day}`);
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
            .then(res => {setNasa(res.data); console.log(res)})
            .catch(err => console.log(err))
    }, [])
    
 
    return (
        <div>
            <DisplayAPOD title={nasa.title} apodDate={date} url={nasa.url} explanation={nasa.explanation} copyright={nasa.copyright} />
        </div>        
    )
}

export default APOD;