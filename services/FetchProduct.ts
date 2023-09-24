import axios from "axios";

interface Product {
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

const FetchProduct = async (id: string) => {
    const {data} = await axios.get<Product>(`${process.env.LOCAL_API_URL}/products/${id}`);
    return data
}

export default FetchProduct;