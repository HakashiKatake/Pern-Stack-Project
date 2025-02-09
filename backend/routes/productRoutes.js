import express from "express";
import { getProducts } from "../controllers/productController.js";
import { createProduct,
    getProduct,
    updateProduct,
    deleteProduct
 } from "../controllers/productController.js";
const router = express.Router();


router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;