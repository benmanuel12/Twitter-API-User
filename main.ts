const dotenv = require('dotenv')

const Twitter = require('twitter')

dotenv.config();

let client = new Twitter({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_KEY_SECRET,
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

async function searchTweets(keyword: string){
    
}