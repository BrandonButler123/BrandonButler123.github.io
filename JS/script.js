let requests = [];

const addRequest = (ev)=>{
    ev.preventDefault(); 
    let request = {
        id: Date.now(),
        name: document.getElementById('full-name').value,
        email: document.getElementById('email-address').value,
        message: document.getElementById('message').value
    }
    requests.push(request);
    document.forms[0].reset(); 
    
    console.warn('added' , {requests} );

}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById('btn').addEventListener('click', addRequest);
});









const down1 = document.getElementById('location1');  
const arr1 = ["Tasty!", "This looks delicious!!!", "Yummy!", "Get in my belly!"];
  
function random(mn, mx) { 
    return Math.random() * (mx - mn) + mn; 
} 
  
function insert1() {
    down1.innerHTML = arr1[Math.floor(random(1, 5))-1];
}

const node1 = document.createTextNode(insert1());

//------------adding picture--------------------------------------//










//-----------------------Trying to get the 2nd comment in here------------------------------------------//


const down2 = document.getElementById('location2');
const arr2 = ["Falvorful!", "Scrumptious!", "Delish!", "Heavenly!"];

function insert2() {
    down2.innerHTML = arr2[Math.floor(random(1, 5))-1];
}

const node2 = document.createTextNode(insert2());


//-------------------Adding comment to page upon click ---------------------------------------------------//

window.postComment=function()
{
var div = document.getElementById("comments");

div.innerHTML = div.innerHTML +"<br>"+ document.getElementById("comment").value;

}

//------------------------prevent page refresh upon button click ------------------------------------------//

document.getElementById("buttonClick").addEventListener("click", function(event){
    event.preventDefault()
});


//------------------add border to comment when button is clicked ---------------------------------------------//

function addBorder() {
    document.getElementById('comments').style.border = '1px solid black';
  };
  
  