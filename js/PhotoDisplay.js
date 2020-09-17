import React, {useState, useEffect} from 'react';
import Photo from "./Photo";
import NextArrow from "./NextArrow";
import PreviousArrow from "./PreviousArrow";

const PhotoDisplay = () => {

    const [data, setData] = useState(false);

    const [page, setPage] = useState(1);

    const handleNextPage = () => {
        setPage(page => page+1);
    };

    const handlePreviousPage = () => {
        if (page > 1){
        setPage(page => page-1)
        }
    };

    const slug = (url) => url.split('/').pop();

    useEffect(() => {
        fetch(`https://picsum.photos/v2/list?limit=3&page=${page}`)
            .then(response => response.json())
            .then(photos => setData(photos))
            .catch(err => {
            console.log("Something went wrong", err);
        });
    }, [page]);

    if(!data){
        return "Loading..."
    }

    return (
        <div className="photos-container">

            <a className="arrow" onClick={handlePreviousPage}>
                <PreviousArrow/>
            </a>

            {data.map((photo) =>
                <Photo key={photo.id} url={`http://source.unsplash.com/${slug(photo.url)}`} author={photo.author}/>)
            }

            <a className="arrow" onClick={handleNextPage}>
                <NextArrow/>
            </a>

        </div>
    );
};

export default PhotoDisplay;