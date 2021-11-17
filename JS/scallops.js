



const comments = ["Tasty!", "This looks delicious", "yummy"];

const para = document.createElement("p");
node = document.createTextNode(comments[1]);
para.appendChild(node);
const element = document.getElementById("content4-1");
element.appendChild(para);

//figure out how to randomize array comment being pushed to node