import axios from "axios";

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[]
}

const FetchProducts = async () => {
    const {data} = await axios.get(`${process.env.API_URL}/products`);
    const products: Product[] = data.products;
    return products;
}

export default FetchProducts;