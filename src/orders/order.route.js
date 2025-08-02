const express = require('express');
const { createAOrder, getOrderbyEmail } = require('./order.controller');

const router = express.Router();

// create order endpoint
router.post("/", createAOrder)

// get orders by user email
router.get("/email/:email", getOrderbyEmail);

module.exports = router; 