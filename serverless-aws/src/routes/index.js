const express = require('express')
const router = express.Router()
const Order = require('../shema')

router.get('/', async (req, res, next) => {
  const orders = await Order.find();

  res.status(200).send(orders);
})

router.post('/', async (req, res, next) => {
  const order = await Order.create(req.body);

  res.status(200).send(order);
})

router.delete('/', async (req, res, next) => {
  const order = await Order.remove({});

  res.status(200).send(order);
})



module.exports = router