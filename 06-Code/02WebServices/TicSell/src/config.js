import{ config } from 'dotenv';
config();
module.exports = {
    PORT: process.env.PORT,
    mongoURI: process.env.URI,
}