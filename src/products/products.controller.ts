import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post()
  async addProduct(
    @Body('title') ProdTitle: string,
    @Body('desc') ProdDesc: string,
    @Body('price') ProdPrice: number,
  ) {
    const generatedId = await this.productService.insertProduct(
      ProdTitle,
      ProdDesc,
      ProdPrice,
    );

    return { id: generatedId };
  }

  @Get()
  async getAllproducts() {
    const products = this.productService.getProducts();

    return products;
  }

  @Get(':id')
  async getProduct(@Param('id') id: string) {
    return await this.productService.getSingleProduct(id);
  }

  @Patch(':id')
  updateProduct(
    @Body('title') ProdTitle: string,
    @Body('desc') ProdDesc: string,
    @Body('price') ProdPrice: number,
  ) {}
}
