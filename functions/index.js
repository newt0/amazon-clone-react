const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HRezEEXPZBl4fvfAljqbmEyzT2mtyme7CcrbPh68sLG51YfalDZilcB3da2t8g3XTgSB62Na5DE1vqLhtnqQomj00WkJmLmSP"
);

// App config
const app = express();

// middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payment/create", async (request, response) => {
  const total = request.query.total;

  // console.log("Payment Request!>>>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // OK --created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// listen command
exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-react-9f042/us-central1/api