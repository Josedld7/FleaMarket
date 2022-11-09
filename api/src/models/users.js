import mongoose from 'mongosee';
const { Schema } = mongoose;

const schema = new Schema({
    name: {
        fistname:{
            type: String,
            required: true,
            trim: true
        },
        lastname:{
            type:String,
            required: true,
            trim: true
        }
    },
    password:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
    },
    country: {
        type: String,
        required: true
    },
    addres: {
        city: {type: String},
        codePostal: {type: Number},
        street: {type: String},
        required: true
    },
    telephone:{
        type: Number
    },
    roles: [String],
    /*products: [{
        id:{
            type: Schema.ObjectId,
            ref: 'Products'
        }
    }]*/
});

const Users = mongoose.model('Users', schema)

export default Users;