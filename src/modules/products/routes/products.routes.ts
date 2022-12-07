import { Router } from "express";
import ProductsController from "../controllers/ProductsController";

const productRouter = Router();
const productsController = new ProductsController();


productRouter.get('/', productsController.index);
productRouter.post('/:id', productsController.show);
productRouter.post('/', productsController.create);
productRouter.put('/:id', productsController.update);
productRouter.delete('/:id', productsController.delete);

//lembrar de importar na routes->index

export default productRouter;