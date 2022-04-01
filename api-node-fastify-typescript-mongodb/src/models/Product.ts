import {Schema, Document, model, Model} from 'mongoose';

 export interface ProductDocument extends Document{
    name: string;
    description: string;
    price: Number;
    category: string;
    createdAt: string;
    updatedAt: string;
}

export const productSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        },
    }
)

export const Product = model<ProductDocument>('Product', productSchema);