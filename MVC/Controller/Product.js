const productModel = require("../model/ProductModel")

const createProduct = async(req,res)=>{
    const data = await productModel.create(req.body)
    res.send(data)
}

const getAllproduct = async(req,res)=>{
    const data = await productModel.find()(("categoryId"))
    res.send(data)
}

const updateProduct = async(req,res)=>{
   const id = req.params.id
   const data = await productModel.findByIdAndUpdate(id,(req.body))
   res.send(data)
}

const deleteproduct = async(req,res)=>{
    const data = await productModel.create(req.body)
    res.send(data)
}