const express = require('express');
const router = express.Router();

const services = [
  {
    id: 1,
    name: 'Rakuten',
    description: 'Description',
    activated: false,
    promocode: 'promo-Rakuten',
  },
  {
    id: 2,
    name: 'Coupons.com',
    description: 'Description',
    activated: false,
    promocode: 'promo-Coupons.com',
  },
  {
    id: 3,
    name: 'RetailMeNot',
    description: 'Description',
    activated: false,
    promocode: 'promo-RetailMeNot',
  },
  {
    id: 4,
    name: 'RedPlum',
    description: 'Description',
    activated: false,
    promocode: 'promo-RedPlum',
  },
  {
    id: 5,
    name: 'SmartSource',
    description: 'Description',
    activated: false,
    promocode: 'promo-SmartSource',
  },
  {
    id: 6,
    name: 'ShopAtHome',
    description: 'Description',
    activated: false,
    promocode: 'promo-ShopAtHome',
  },
  {
    id: 7,
    name: 'Savings.com',
    description: 'Description',
    activated: false,
    promocode: 'promo-Savings.com',
  },
  {
    id: 8,
    name: 'Slick Deals',
    description: 'Description',
    activated: false,
    promocode: 'promo-Slick Deals',
  },
];

/* GET services listing. */
router.get('/', function(req, res, next) {
  res.send(services);
});

module.exports = router;
