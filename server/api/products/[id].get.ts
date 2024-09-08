import { sql } from "@vercel/postgres";

export default defineEventHandler((event) => {
  const productId = getRouterParam(event, 'id')
  const rows = sql`SELECT p.id as id, p.title as title, p.old_price as old_price, p.price as price, p.description as description, p.type as type, p.file as file, p.is_available as is_available, i.path as image FROM products p LEFT JOIN product_images pi on pi.product_id=p.id LEFT JOIN images i on p.id=pi.image_id where p.id=${productId};`;
  return rows;
});