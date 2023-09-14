import React from 'react';
import {Button} from "@material-tailwind/react";


const Categories = () => {
    return (
        <div className="flex flex-row gap-1">
            <Button size="small" variant="outlined">All</Button>
            <Button variant="outlined">Man</Button>
            <Button variant="outlined">Woman</Button>
        </div>
    );
};

export default Categories;
