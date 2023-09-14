import React from 'react';

// When use two score braces this catch all route is optional if the parent folder
// don't have page file it is optional we don't have error

type Props = {
    params: { slug: string[] }
}

const Page = ({params: {slug}}: Props) => {
    return (
        <div>
            Product slug: {slug}
        </div>
    );
};

export default Page;