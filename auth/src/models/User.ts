import mongoose from 'mongoose'
import { Password } from '../services/password'

// An Interface that describes the properties that
// are required to create a new user
interface userAttrs {
	email: string
	password: string
}

// Represents entire users collection
// An Interface that describes the properties
// a user model has
interface UserModel extends mongoose.Model<UserDoc> {
	build(attrs: userAttrs): UserDoc
}

// Represents single user
// An Interface that describes the properties
// a user document has
interface UserDoc extends mongoose.Document {
	email: string
	password: string
}

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		toJSON: {
			transform(doc, ret) {
				ret.id = ret._id
				delete ret._id
				delete ret.password
				delete ret.__v
			},
			// versionKey: false,
		},
	}
)

userSchema.pre('save', async function (done) {
	if (this.isModified('password')) {
		const hashed = await Password.toHash(this.get('password'))
		this.set('password', hashed)
	}
	done()
})

userSchema.statics.build = (attrs: userAttrs) => {
	return new User(attrs)
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema)

export { User }
