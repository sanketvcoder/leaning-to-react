import React from 'react';

export default function Fruits({ fruits }) {
    const fruiit = fruits;
    console.log(fruiit);
    return (
        <div>
            hello I am fruits 
            {fruiit.map((fruiitt, index) => (
                <h1 key={index}>{fruiitt}</h1>
            ))}
        </div>
    );
}
