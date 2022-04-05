import {Schema, Document, model, Model} from 'mongoose';

 export interface AdminDocument extends Document{
    name: string;
    username: string;
}

export const adminSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
    }
)

export const Admin = model<AdminDocument>('Admin', adminSchema);