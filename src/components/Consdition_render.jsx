import React from 'react';
import fruit_obj from './obj';
import Fruite from './Fruite';

export default function Condition_render() {
    return (
        <ul>
            {fruit_obj.map((fruit, index) => {
                if (fruit.price >= 0) {
                    return (
                        <>
                            <Fruite name={fruit.name} price={fruit.price} soldout = {fruit.soldout} />
                        </>
                    );
                } else {
                    return null;
                }
            })}
        </ul>
    );
}
