import React, {useState, useEffect} from 'react';
import Photo from "./Photo";

const PhotoDisplay = () => {

    const [data, setData] = useState(false);

    useEffect(() => {
        fetch(`https://picsum.photos/v2/list`)
            .then(response => response.json())
            .then(photos => setData(photos));
    }, []);

    if(!data){
        return "Loading..."
    }

    return (
        <>
            {data.map((photo, index) =>
                <Photo key={index} url={photo.download_url} author={photo.author}/>)}
        </>
    );
};

export default PhotoDisplay;