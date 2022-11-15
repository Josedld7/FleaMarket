import dotenv from 'dotenv'
dotenv.config()


const DB_USER = process.env.DB_USER;

const DB_PASSWORD = process.env.DB_PASSWORD;

const DB_HOST = process.env.DB_HOST;

const DB_PORT = process.env.DB_PORT;

const DB_NAME = process.env.DB_NAME;

export const PORT = process.env.PORT || 3001;

export const MONGO_ATLAS_URI = process.env.MONGO_ATLAS_URI || 'mongodb+srv://josedld7:flea-app@cluster0.lbpuk0j.mongodb.net/FleaMarketdb?retryWrites=true&w=majority' 