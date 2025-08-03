const express=require('express');
const router=express.Router();

const {fileread,webfile,getProduct,getProdById}=require('../controllers/products');

const path=require('path');

const products=require('../data/products');

router.get('/fileread', fileread );

router.get('/webfile', webfile );

router.get('/products', getProduct );

router.get('/products/:id', getProdById );

module.exports=router;