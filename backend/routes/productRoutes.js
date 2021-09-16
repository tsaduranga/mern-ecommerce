import express from 'express'
const router = express.Router()

import {
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct,
    createProductReview,
    getTopProducts,
  } from '../controllers/productController.js'
import { protect, admin } from '../middlewares/authMiddleware.js'


// / ( get => get all products, post => create product)
router.route('/').get(getProducts).post(protect, admin, createProduct)

// /:id/reviews (post => create product Review)
router.route('/:id/reviews').post(protect, createProductReview)

// /top ( get => get top products)
router.get('/top', getTopProducts)

// /:id ( get => get product by id, put => update product, delete => delete product )
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)



export default router