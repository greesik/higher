import React from 'react';

const Photo = ({url, author}) => {
    return (
        <div>
            <img src={url} alt={`Photo by ${author}`}/>
        </div>
    );
};

export default Photo;