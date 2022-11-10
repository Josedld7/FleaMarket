import express from "express";
import Products from "../models/products.js";

const router = express();

// Route de creacion de producto 
router.post("/product", async (req, res) => {
    try {
        const newProduct = Products(req.body);
        await newProduct.save()
        return res.json(newProduct);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

// Route de detalle por params
router.get("/product/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const found = await Products.findById(id).populate('user');
        if (found) {
            return res.json(found)
        } else {
            return res.status(500).send("No se encontraron datos");
        }

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});


// Route que obtiene los productos por query name
router.get("/product", async (req, res) => {
    try {
        const { name } = req.query; //http://localhost:3001/api/product?name=
        if(name){
            const allCoincidence= await Products.find({ name: name });
            return res.json(allCoincidence);
        }

        const allProducts = await Products.find()
        return res.json(allProducts)

    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
});

// route que me trae todos los productos con su usuario
router.get("/productuser", async (req, res) => {
    try {
            const products_user = await Products.find().populate('user');
            return res.json(products_user);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
});

//ruta de filtros combinados para revisar, filtra por una sola y por combinadas
router.get("/productfilter", async (req, res) => {
    try{
        let { condition, category, ordPrice } = req.query;

            const filter = await Products.find({condition: new RegExp(condition, "i"), category: new RegExp(category, "i")}).sort({price: ordPrice})
            res.status(200).send(filter);
    } catch(error){
        res.status(500).send(error.message)
    }
});

// Route para actualizar un producto 
router.put("/product/:id", async (req, res) => {
    try {
        let { id } = req.params
        let { name, category, stock, description, price, image, condition } = req.body
        
        await Products.updateOne({ _id: id }, {$set: {name, category, stock, description, price, image, condition}})
        res.status(200).send("Producto actualizado!");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

// Route para eliminar un producto por id
router.delete("/product/:id", async (req, res) => {
    try {
        let { id } = req.params
        await Products.deleteOne({ _id: id })
        res.status(200).send("Producto removido!");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

export default router;