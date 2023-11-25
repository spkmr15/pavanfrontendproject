import express from 'express';
import dotenv from 'dotenv';
import Stripe from 'stripe';
//const express = require('express');

dotenv.config();
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile("index.html", {root: "public"});
});
app.get("/success", (req, res) => {
    res.sendFile("success.html", {root: "public"});
});

app.get("/cancel", (req, res) => {
    res.sendFile("cancel.html", {root: "public"});
});


let stripeGateway = Stripe('sk_test_51OG0iRSHxlx8g8kVK1kzi5akKfkwiix25Zh3FTfdBueHQOoUqh3k4M3A2rihpQJOzuaeKrDTfR90SaGeMrfMj5iA00bLSQEwkF');
let DOMAIN = 'http://localhost:3000';
app.post("/stripe-checkout", async (req, res) => {
    const lineItems = req.body.items.map((item) => {
        const unitAmount = parseInt(item.price.replace(/[^0-9.-]+/g, "") * 100);
        console.log("item-price:", item.price);
        console.log("unitAmount:", unitAmount);
        return {
            price_data: {
                currency: "inr", 
                product_data: {
                    name: item.title,
                    images: [item.productImg],
                },
                unit_amount: unitAmount, 
            },
            quantity: item.quantitty,
        };
    });
    console.log("lineItems:", lineItems);
    const session = await stripeGateway.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        success_url: `${DOMAIN}/success`,
        cancel_url: `${DOMAIN}/cancel`,
        line_items: lineItems,
        billing_address_collection: "required"
    });
    res.json(session.url);
});



app.listen(3000, () => {
    console.log("listening on port 3000; ");
});
