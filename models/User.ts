import mongoose, { Schema, Document } from 'mongoose'

export interface IUserDoc extends Document {
    username: string
    password: string
    createdAt: Date
    updatedAt: Date
}

export const UserSchema: Schema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: new Date(),
        },
        updatedAt: {
            type: Date,
            default: new Date(),
        },
    },
    {
        toJSON: {
            virtuals: true
        }
    }
)

UserSchema.index({ username: -1 }, { unique: true })

const User = mongoose.models.User || mongoose.model<IUserDoc>('User', UserSchema)

export default User
