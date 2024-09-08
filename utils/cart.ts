export default class Cart {
  products: object[];

  constructor() {
    this.products = [];
  }

  addProduct(
    product_id: number,
    title: string,
    price: number,
    old_price: number,
    count: number
  ): void {
    this.products[product_id] = {
      id: product_id,
      title: title,
      price: price,
      old_price: old_price,
      count: count,
    };

    localStorage.setItem("cart", this.products.toString());
  }
}
