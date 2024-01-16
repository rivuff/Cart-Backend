import express from 'express'

const router = express.Router();
import cartRoute from './cart-route';
export default (): express.Router =>{
    cartRoute(router)
    return router;
}