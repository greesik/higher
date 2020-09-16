import React, {useState, useEffect} from 'react';
import Photo from "./Photo";

const PhotoDisplay = () => {

    const [data, setData] = useState(false);

    const slug = (url) => url.split('/').pop();

    useEffect(() => {
        fetch(`https://picsum.photos/v2/list`)
            .then(response => response.json())
            .then(photos => setData(photos));
    }, []);

    if(!data){
        return "Loading..."
    }

    return (
        <div className="photos-container">
            {data.map((photo, index) =>
                <Photo key={index} url={`http://source.unsplash.com/${slug(photo.url)}`} author={photo.author}/>)}
        </div>
    );
};

export default PhotoDisplay;