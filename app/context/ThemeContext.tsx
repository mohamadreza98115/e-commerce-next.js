'use client'
import React from 'react';
import {ThemeProvider} from "@material-tailwind/react";

type Props = {
    children: React.ReactNode
}

const ThemeContext = ({children}: Props) => {

    return (
        <ThemeProvider>
            {children}
        </ThemeProvider>
    );
};

export default ThemeContext;