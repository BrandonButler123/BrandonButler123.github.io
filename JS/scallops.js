
var down = document.getElementById('location'); 
  
var arr = ["Tasty!", "This looks delicious", "yummy", "Get in my belly"];
  

function random(mn, mx) { 
    return Math.random() * (mx - mn) + mn; 
} 
  
function insert() {
    down.innerHTML = arr[Math.floor(random(1, 5))-1];
}
