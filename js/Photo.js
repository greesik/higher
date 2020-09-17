import React from 'react';

const Photo = ({url, author}) => {
    return (
        <div className="photo-wrapper">
            <img className="photo" src={url} alt={`Photo by ${author}`} />
        </div>
    );
};

export default Photo;