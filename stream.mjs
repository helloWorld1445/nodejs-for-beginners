import fs from "fs";

const writer = fs.createWriteStream("target.log");

writer.write("Muhammad Azzam" + " ");
writer.write("Nur Alwi" + " ");
writer.write("Mansyur");
writer.end();

const reader = fs.createReadStream("target.log");
reader.addListener("data", (data) => {
  console.info(data.toString());
});
