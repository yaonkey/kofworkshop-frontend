import fs from "fs";
import csv from "csv-parser";
const fileName = "data.csv";
// const csvFile = fs.createWriteStream(fileName);
const ddata = `id,name,age
1,Johny,45
2,Mary,20`;

if (!fs.existsSync(fileName)) {
  fs.writeFile(fileName, ddata, "utf-8", (err: any) => {
    if (err) console.log(err);
    else console.log("Data saved");
  });
}

export default defineEventHandler(async (event) => {
  const data: any = fs.readFileSync(fileName);
    return data;
});
