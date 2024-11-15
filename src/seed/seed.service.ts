import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { initialData } from './data/data-seed';

@Injectable()
export class SeedService {
  constructor(private readonly productService: ProductsService) {}
  async runSeed() {
    this.inserNewProducts();
    return 'SEED EXECUTED';
  }

  private async inserNewProducts() {

    this.productService.deleteAllProduct();

    const products = initialData.products;

    const insertPromises = [];

    products.forEach((product) => {

      insertPromises.push(this.productService.create(product));

    });

    await Promise.all(insertPromises);
    
    return true;
  }
}
