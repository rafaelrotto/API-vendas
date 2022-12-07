export default class ProductsController{
    public async index(request: Request, response: Response) :
    Promisse<Response>{
        const listProducts = new ListProductsService();
        const products = await listProducts.execute();
        return response.json(products);
    }
    public async show(request: Request, response: Response) :
    Promisse<Response>{
        const { id } = new request.params;
        const showProduct = new ShowProductService();
        const product = await showProduct.execute({ id });
        return response.json(product);
    }
    public async create(request: Request, response: Response) :
    Promisse<Response>{
        const { name, price, quantity } = request.body;
        const createProduct = new CreateProductService();
        const product = await createProduct.execute({ name, price, quantity });
        return response.json(product);
    }
    public async update(request: Request, response: Response) :
    Promisse<Response>{
        const { id } = request.params;
        const { name, price, quantity } = request.body;
        const updateProduct = new UpdateProductService();
        const product = await updateProduct.execute({ id, name, price, quantity });
        return response.json(product);
    }
    public async delete(request: Request, response: Response) :
    Promisse<Response>{
        const { id } = new request.params;
        const deleteProduct = new DeleteProductService();
        await deleteProduct.execute({ id });
        return response.json([]);
    }
}