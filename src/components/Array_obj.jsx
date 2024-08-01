import React from 'react';
import NewFruit from './NewFruit';

export default function Array_obj({ arr_obj }) {
    console.log(arr_obj);
    return (
        <ul>
            {arr_obj.map((item) => (
                <NewFruit name = {item.name} price = {item.price}/>
            ))}
        </ul>
    );
}
