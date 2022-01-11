const { Router } = require('express');
const path = require('path');

const apiList = require('../mock-api/V1/categories/list.json');
const categoryOne = require('../mock-api/V1/categories/1.json');
const categoryTwo = require('../mock-api/V1/categories/2.json');
const categoryThree = require('../mock-api/V1/categories/3.json');

const routes = Router();

routes.get('/api/v1/categories/list', (req, res) => res.status(200).json(apiList));

routes.get('/api/v1/categories/:id', (req, res) => {

    if(req.params.id === '1'){
        res.status(200).json(categoryOne);      
    }
    else if(req.params.id === '2'){
        res.status(200).json(categoryTwo);      
    }
    else if(req.params.id === '3'){
        res.status(200).json(categoryThree); 
    }
});

module.exports = routes;