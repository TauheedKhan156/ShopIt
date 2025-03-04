import express from 'express'
import orderController from '../controllers/orderController.js'
import adminAuth  from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus} = orderController;

const orderRouter = express.Router()

// Admin Features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)

// Payment Features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

// User Feature 
orderRouter.post('/userorders',authUser,userOrders)

// verify payment
// orderRouter.post('/verifyStripe',authUser, verifyStripe)
// orderRouter.post('/verifyRazorpay',authUser, verifyRazorpay)

export default orderRouter