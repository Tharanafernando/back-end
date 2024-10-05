import {createCategoryDto} from "./dto/categories.js";
import Category from "./database/Schemas/Category.js";



export const getCategories = async(req, res) => {
  const categories = await Category.find();
  return res.status(200).json(categories);
};

export const createCategory = async(req, res) => {
  //! We need to make sure that the data is always in the correct format
  const category = createCategoryDto.safeParse(req.body);

  if (!category.success) {
    return res.status(400).json({ message: "Invalid data" });
  }

  await Category.create({
    name: category.data.name
  });

  return res.status(201).send();
};

export const getCategoryById = (req, res) => {
  const id = req.params.id;
  const category = categories.find((category) => category.id === id);
  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }

  return res.status(200).json(category);
};
