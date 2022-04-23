import express from "express";
import Product from "../models/productModel.js";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

// router.get("/", getProducts);
// router.get("/:id", getProductById);

router.get("/profile/:username", async (req, res) => {
  try {
    console.log(req.params.username);
    const userna = req.params["username"];
    const products = await Product.find({})
      .where("seller")
      .equals(req.params.username)
      .exec();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.post("/", async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const savedProducts = await newProduct.save();
    res.status(200).json(savedProducts);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
