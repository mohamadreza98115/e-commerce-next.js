import {Button, Card, CardBody, CardFooter, CardHeader, IconButton, Typography} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";

// SVG components
const HeartSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
        <path
            d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
    </svg>
);

const StarSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
         className="-mt-0.5 h-5 w-5 text-yellow-700">
        <path fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"/>
    </svg>
);

const ProductItem = ({product}) => {
    const {_id, thumbnail, title, rating, description} = product;

    return (
        <Card className="w-full max-w-[26rem] shadow-lg">
            <CardHeader floated={false} color="blue-gray">

                <Image className="h-66 w-full object-cover object-center" width={260} height={320} src={thumbnail}
                       alt="Product"/>
                <div
                    className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 "/>
                <IconButton size="sm" color="red" variant="text" className="!absolute top-4 right-4 rounded-full">
                    <HeartSVG/>
                </IconButton>
            </CardHeader>
            <CardBody>
                <div className="mb-3 flex items-center justify-between">
                    <Link href={`/products/${_id}`}>
                        <Typography variant="h5" color="blue-gray" className="font-medium">
                            {title}
                        </Typography>
                    </Link>
                    <Typography color="blue-gray" className="flex items-center gap-1.5 font-normal">
                        <StarSVG/>
                        {rating}
                    </Typography>
                </div>
                <Typography color="gray">
                    {description?.substring(0, 80)}...
                </Typography>
            </CardBody>
            <CardFooter className="pt-3">
                <Button size="lg" className="bg-blue-700" fullWidth>
                    Add to Cart
                </Button>
            </CardFooter>
        </Card>
    );
}

export default ProductItem;
