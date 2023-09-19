import React from 'react';
import {Spinner} from "@/app/Components/MaterialTailwindExporter";

const Loading = () => {
    return (
        <Spinner className="h-8 w-8" color={'blue'}/>
    );
};

export default Loading;