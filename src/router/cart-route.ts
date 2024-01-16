import express from 'express'

import { createCart, deleteCart } from '../controller/cart-controller'


export default (router: express.Router) =>{
    router.post('/cart/create',createCart);
    router.delete('/cart/:id',deleteCart);
}