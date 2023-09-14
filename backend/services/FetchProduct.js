const FetchProduct = async (id) => {
    const response = await fetch(`${process.env.LOCAL_API_URL}/products/${id}`);
    if(!response.ok) {
        throw new Error('Failed to fetch product');
    }
    return await response.json();
}

export default FetchProduct;