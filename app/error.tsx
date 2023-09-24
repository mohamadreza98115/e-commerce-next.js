'use client' // Error components must be Client Components

import {useEffect} from 'react'
import {Button} from "@/app/Components/MaterialTailwindExporter";

interface Props {
    error: Error;
    reset: () => void
}

export default function Error({error, reset}: Props) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div
            className={'h-screen flex flex-col items-center justify-center px-5 text-gray-700'}>
            <h2 className={'mb-3'}>Something went wrong!</h2>
            <Button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </Button>
        </div>
    )
}