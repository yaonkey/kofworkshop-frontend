import { sql } from "@vercel/postgres";
const rows = sql`SELECT p.id as id, p.title as title, p.old_price as old_price, p.price as price, p.description as description, p.type as type, p.file as file, p.is_available as is_available, i.path as image FROM products p LEFT JOIN product_images pi on pi.product_id=p.id LEFT JOIN images i on p.id=pi.image_id;`;
const url =
  "https://api.vk.com/method/market.get?v=5.84&access_token=$access_token&owner_id=$owner_id&count=200&offset=$offset&oauth=1";
const access_token =
  "219686262196862621968626a82284405b22196219686264263c1277e122d3be3861129";
const owner_id = "-161176754";
const offset = 20;
const vk_key = "62ue3CQvhRkgfUHcArmp";
const vk_api =
  "219686262196862621968626a82284405b22196219686264263c1277e122d3be3861129";
const app_id = "	51562109";

//getAlbums -- для подборок
export default defineEventHandler((event) => {
  console.log(
    `https://api.vk.com/method/market.get?v=5.199&access_token=${access_token}&owner_id=${owner_id}&count=20&offset=${offset}&oauth=1`
  );
  // return $fetch(`https://api.vk.com/method/market.get?v=5.84&access_token=${access_token}&owner_id=${owner_id}&count=20&offset=${offset}&oauth=0`);
  return rows;
});
