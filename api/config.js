import dotenv from 'dotenv'
dotenv.config()

export const DB_USER = process.env.DB_USER || "josedld7"
export const DB_PASSWORD = process.env.DB_PASSWORD || 'flea-app'
export const DB_NAME = process.env.DB_NAME || 'FleaMarketdb'
export const DB_HOST = process.env.DB_HOST;
export const MONGO_ATLAS_URI = process.env.MONGO_ATLAS_URI || `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.lbpuk0j.mongodb.net/${DB_NAME}?retryWrites=true&w=majority` 
export const PORT = process.env.PORT || 3001
export const SECRET = process.env.SECRET || 'fleaMarketapp';

export const EMAIL =  process.env.EMAIL || 'fleamarket.appservices@gmail.com'
export const PASS = process.env.PASS || 'lszexysgdylynalk'

export const FRONT_DOMINIO = process.env.FRONT_DOMINIO || "http://localhost:3000"