import { CartModel } from "../model/cart";
import express from 'express'


export const createCart = async(req: express.Request, res: express.Response)=>{
    try {
        const { ProductTitle, ProductDescription, quantity, size, color, available } = req.body;
    
        const newItem = new CartModel({
          ProductTitle,
          ProductDescription,
          quantity,
          size,
          color,
          available
        });
    
        const savedItem = await newItem.save();
    
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
  }
}

export const deleteCart =async (req: express.Request, res: express.Response) => {
    try {
        const itemId = req.params.id;
    
        const deletedItem = await CartModel.findByIdAndDelete(itemId);
    
        if (!deletedItem) {
          res.status(404).json({ error: "Item not found" });
          return;
        }
        
        console.log("item deleted");        
        res.json(deletedItem);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
  }
}