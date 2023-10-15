import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const { id } = useParams();
    console.log(id);
    const items = useLoaderData();
    console.log(items);
    return (
        <div>
            {items.name}
        </div>
    );
};

export default Details;
