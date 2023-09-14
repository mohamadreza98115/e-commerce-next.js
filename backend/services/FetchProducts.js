import axios from "axios";

const FetchProducts = async () => {
    const {data} = await axios.get(`${process.env.LOCAL_API_URL}/api/products`);
    return await data;

}

export default FetchProducts;