import mongoose, { Schema } from 'mongoose';
import Users from './users.js';
import category from './category.js';

const productschema = new mongoose.Schema(
  {
    title: {
      type: String,
      requerid: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      maxlength: 500,
    },
    image: {
      type: String,
    },
    rating: {
      type: Number,
      requerid: true,
    },
    stock: {
      type: Number,
      requerid: true,
      min: [1, "At least one product is needed to publish it"],
    },
    condition: {
      type: String,
      enum: ["Nuevo", "Usado"],
    },
    user: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: Users,
    },
    category: {
      type: Schema.Types.ObjectId,
      require: true,
      ref: category,
    },
    brand: {
      type: String
    },
    ram: {
      type: Number
    },
    processor: {
      type: String
    },
    battery: {
      type: Number
    },
    bluetooth: {
      type: String,
      enum: ["Si", "No"],
    }
  }
);

export default  mongoose.model('Products', productschema)