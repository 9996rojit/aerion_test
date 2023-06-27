import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: `${path.join(__dirname, './../../.env')}` });

const DB_URI = process.env.DB_URI;
const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 4410;

export { DB_URI, NODE_ENV, PORT };
