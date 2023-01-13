 const express = require('express');
const signup = require('../controllers/auth.controller');

 const routes = express.Router({
    mergeParams: true
 });

 routes.get('/', signup )


 module.exports = routes;