// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51N3QrZFPKuANCBaTQxbqJySgVIzXDkGC8kbjos1cofvUNm4KMI7Ck2bmwVCkyGJ7Tf0rnmZAghksY92q6FXBFf8R0099HDcshm");

// - API

// - APP Config
const app = express()

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API Routes
app.get('/', (req, res) => res.status(200).send('Hello World'))

// - Listen Commands
exports.api = functions.https.onRequest(app);