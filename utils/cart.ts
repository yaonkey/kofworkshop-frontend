import type Product from "./product";

export default class Cart {
  products: Product[];

  constructor() {
    this.products = [];
  }

  addProduct(product: Product): void {
    this.products[product.id] = product;
    localStorage.setItem("cart", this.products.toString());
  }

  removeProduct(product: Product): void {
    delete this.products[product.id];
  }

  getProducts(): Product[] {
    return this.products;
  }
}
