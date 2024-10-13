import { sql } from "@vercel/postgres";
import validate from "~/utils/params_validator";
const params = {
  title: "string",
  old_price: "number",
  price: "number",
  description: "string",
  type: "string",
  file: "string",
  is_available: "boolean",
  image: "string",
};
let result = false;
if (validate(params)) {
  result = sql`INSERT INTO products VALUES ${params.title}, ${params.old_price}, ${params.price}, ${params.description}, ${params.type}, ${params.file}, ${params.is_available}, ${params.image}`;
}

export default defineEventHandler(async (event) => {
  return result;
});
