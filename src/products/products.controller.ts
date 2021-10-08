import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Post()
  addProduct(
    @Body('title') ProdTitle: string,
    @Body('desc') ProdDesc: string,
    @Body('price') ProdPrice: number,
  ) {
    const generatedId = this.productService.insertProduct(
      ProdTitle,
      ProdDesc,
      ProdPrice,
    );

    return { id: generatedId };
  }

  @Get()
  getAllproducts() {
    return this.productService.getProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return this.productService.getSingleProduct(id);
  }

  @Patch(':id')
  updateProduct(
    @Body('title') ProdTitle: string,
    @Body('desc') ProdDesc: string,
    @Body('price') ProdPrice: number,
  ) {}
}
