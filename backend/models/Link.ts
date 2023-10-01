const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        link:{
            type:String,
            required:"true"
        }
    },
    {
        timestamps: true,
    }
);

const Product = mongoose.model("products", ProductSchema);
module.exports = Product;
