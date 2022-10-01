import mongoose, { Schema, Document } from 'mongoose'

export interface IPasswordDoc extends Document {
    site: string
    identifier: string
    password: string
    createdAt: Date
    updatedAt: Date
}

export const PasswordSchema: Schema = new Schema({
    site: {
        type: String,
        required: true,
    },
    identifier: {
        type: String,
        required: true,
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
})

PasswordSchema.index({ site: 1 }, { unique: false })
PasswordSchema.index({ site: 1, identifier: 1 }, { unique: true })

const Password: mongoose.Model<IPasswordDoc, {}, {}, {}, any> =
    mongoose.models.Password ||
    mongoose.model<IPasswordDoc>('Password', PasswordSchema)

export default Password
