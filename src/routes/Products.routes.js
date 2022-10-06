import { Router } from 'express'
import * as productsControllers from '../controllers/Products.controllers.js'

const router = Router()

router.get('/', productsControllers.getProducts)
router.get('/:id', productsControllers.getProductById)
router.post('/', productsControllers.createProduct)
router.put('/:id', productsControllers.updateProduct)
router.delete('/:id', productsControllers.deleteProduct)

export default router
