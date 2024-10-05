import {createProductDto} from "./dto/products.js";
import Product from "./database/Schemas/Product.js";
import {ValidationError} from "../errors/ValidationError.js";




export const getProducts = async(req, res) => {
  console.log(req.query);

  if (req.query.categoryId) {
    const categoryId = req.query.categoryId;
    const filteredProducts = await Product.find({categoryId:categoryId});
   // const filteredProducts = products.filter((product) => product.categoryId === categoryId);
    return res.status(200).json(filteredProducts);
  }

  const product = await Product.find();
  return res.status(200).json(product);
};

export const createProduct = async(req, res, next) => {

  //! We need to make sure that the data is always in the correct format
  try{
    const product = createProductDto.safeParse(req.body); 
    if (!product.success) {
      throw new ValidationError(product.error.message);
    }
    await Product.create({
      categoryId:product.data.categoryId,
      image: product.data.image,
      name: product.data.name,
      price: product.data.price,
      description: product.data.description
    })
  
    return res.status(201).send();
  }
  catch(error){
    next(error)
    

  }

  
  
}
 


 

export const getProductById = async(req, res) => {
  const id = req.params.id;
  //  const product = products.find((product) => product.id === id);
  const product = await Product.findById(id).populate(categoryId);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  return res.status(200).json(product);
};
