const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controller/productControllers");
//@desc    GET all products from db
//@route   GET /api/products
//@access  public
router.get("/", getProducts);
//router.get("/", (req, res)=> { productController });
//@desc    GET a products by id from db
//@route   GET /api/products
//@access  public
router.get("/:id", getProductById);
//router.get("/:id", (req, res)=> { productController });

module.exports = router;