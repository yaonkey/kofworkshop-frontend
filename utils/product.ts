export default class Product {
  id: number;
  title: string;
  price?: number;
  old_price?: number;

  constructor(
    id: number,
    title: string,
    price: number | undefined,
    old_price: number | undefined
  ) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.old_price = old_price;
  }
}
