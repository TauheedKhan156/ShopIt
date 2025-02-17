import express from 'express'
import cartController from '../controllers/cartController.js'
import authUser from '../middleware/auth.js'

const {addToCart, updateCart, getUserCart} = cartController;

const cartRouter = express.Router()

cartRouter.post('/get',authUser, getUserCart)
cartRouter.post('/add',authUser, addToCart)
cartRouter.post('/update',authUser, updateCart)

export default cartRouter