
const down1 = document.getElementById('location1');  
const arr1 = ["Tasty!", "This looks delicious!!!", "Yummy!", "Get in my belly!"];
  
function random(mn, mx) { 
    return Math.random() * (mx - mn) + mn; 
} 
  
function insert1() {
    down1.innerHTML = arr1[Math.floor(random(1, 5))-1];
}

const node1 = document.createTextNode(insert1());

//-----------------------Trying to get the 2nd comment in here------------------------------------------//


const down2 = document.getElementById('location2');
const arr2 = ["Falvorful!", "Scrumptious!", "Delish!", "Heavenly!"];

function insert2() {
    down2.innerHTML = arr2[Math.floor(random(1, 5))-1];
}

const node2 = document.createTextNode(insert2());