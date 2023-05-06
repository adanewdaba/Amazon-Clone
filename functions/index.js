const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51N1HoODAxUFo3k0x6mnd5TM661yopvfWIQ5h4L11Jwk7txOwCsQRUAcEMuIEm6VgJ0edirSTxWx5oer098triTCc00jAZJ3F6D"
);

// - App config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// -Listen command
exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/oct-269d5/us-central1/api
