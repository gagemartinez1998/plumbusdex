import fs from "fs";
import fetch from "node-fetch";

const getAllData = async () => {
  let myData = [];
  for (let i = 1; i < 43; i++) {
    await fetch(`https://rickandmortyapi.com/api/character/?page=${i}`)
      .then((res) => res.json())
      .then((data) => myData.push(...data.results));
  }
  return myData;
};

getAllData().then((data) => {
  // console.log(data);
  fs.writeFile("./allChars.json", JSON.stringify(data), (err) => {
    console.log(err);
  });
});
