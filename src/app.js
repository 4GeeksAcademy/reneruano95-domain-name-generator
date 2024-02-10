/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".net", ".us", ".io"];

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let l = 0; l < noun.length; l++) {
        for (let k = 0; k < domain.length; k++) {
          console.log(`${pronoun[i]}${adj[j]}${noun[l]}${domain[k]}`);

          const para = document.createElement("li");
          const node = document.createTextNode(
            `${pronoun[i]}${adj[j]}${noun[l]}${domain[k]}`
          );
          para.appendChild(node);

          const element = document.getElementById("list");
          element.appendChild(para);

          const list = document.querySelectorAll("li");
          list.forEach(item => {
            item.classList.add("list-group-item");
          });
        }
      }
    }
  }
};
