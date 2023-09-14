import mongoose, {Schema} from "mongoose";

const ProductSchema = new Schema({
    title: {
        type: String,
        required: [true, 'please enter product title']
    },
    price: {
        type: Number,
        required: [true, 'please enter product price']
    },
    category: {
        type: String,
        required: [true, 'please enter product category'],
        enum: {
            values: [
                "smartphones",
                "laptops",
                "fragrances",
                "skincare",
                "groceries",
                "home-decoration",
                "furniture",
                "tops",
                "womens-dresses",
                "womens-shoes",
                "mens-shirts",
                "mens-shoes",
                "mens-watches",
                "womens-watches",
                "womens-bags",
                "womens-jewellery",
                "sunglasses",
                "automotive",
                "motorcycle",
                "lighting"
            ],
            message: 'please select correct category'
        }
    },
    description: {
        type: String,
        required: [true, 'please enter product description']
    },
    thumbnail: {
        type: String,
        required: [true, 'please enter product thumbnail']
    },
    brand: {
        type: String,
        required: [true, 'please enter product brand']
    },
    discountPercentage: {
        type: Number,
        default: 0
    },
    images: {type: [String]},
    stock: {
        type: Number,
        required: [true, "please enter product stock"]
    },
    rating: {
        type: Number,
        default: 0
    },
    // reviews: [
    //     {
    //         rating: {
    //             type: Number,
    //             required: true
    //         },
    //         comment: {
    //             type: String,
    //             required: true
    //         },
    //         createdAt: {
    //             type: Date,
    //             default: Date.now
    //         }
    //     }
    // ],
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {timestamps: true});

const Product = mongoose.models.Product || mongoose.model('Product', ProductSchema);

export default Product;