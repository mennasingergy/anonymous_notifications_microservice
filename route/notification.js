//const express = require('express');
import express from 'express';
import { createNotification } from '../controller/App.js';
//const {createNotification}= require('../../controller/App.js');
const router=express.Router();



 //router.get('/', getProducts);
 //router.get('/{order_id}',getShipment);
 router.post('/',createNotification);
 //router.patch('/',updateShipment);
//update->patch
//new doc => post
//delete => delete

export default router;