require('dotenv').config();
const express = require('express');
const nonce = require('nonce')
const app = express();

const port = 5000;

const apiKey = process.env.SHOPIFY_API_KEY;
const apiSecret = process.env.SHOPIFY_API_SECRET_KEY;
const scope = 'write_products';
const forwardingAddress = `https://fb30e395.ngrok.io/auth/callback`;


app.get('/shopify', (req, res) => {
    const shop = req.query.shop;
    if(shop) {
        const state = nonce();
        const redirectUri = forwardingAddress + '/shopify/callback';
        const installUrl = 'https://' + shop + '/admin/oauth/authorize?client_id=' + apiKey +
        '&scope=' + scopes +
        '&state=' + state +
        '&redirectUri=' + redirectUri;
        
    }else{
        return res.status(400).send("Missing shop parameter. Please add ?shop=your-development-shop.myshopify.com to your request")
    }
})

app.listen(port, console.log(`PORT LISTENING ON ${port}`))
