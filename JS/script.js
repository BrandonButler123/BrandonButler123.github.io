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
const div = document.getElementById("comments");


//---TAKE A LOOK AGAIN THIS IS THE CODE YOU CULDNT FIGURE OUT 

div.innerHTML = div.innerHTML + "<div class='something'>" +"<br>"+ document.getElementById("comment").value + "</div>";

}

//------------------------prevent page refresh upon button click ------------------------------------------//

document.getElementById("buttonClick").addEventListener("click", function(event){
    event.preventDefault()
});


//------------------add border to comment when button is clicked ---------------------------------------------//

// function addBorder() {
//     document.getElementById('comments').style.border = '1px solid black';
//   };
  
  
// Creating array for images 

// Attempt #1

const down3 = document.getElementById('picture1');
const arrImage = new Array();

arrImage[0] = new Image();
arrImage[0].src = '/images/avatar1.png';

arrImage[1] = new Image();
arrImage[1].src = '/images/avatar2.png';

arrImage[2] = new Image();
arrImage[2].src = '/images/avatar3.png';
  
arrImage[3] = new Image();
arrImage[3].src = '/images/avatar4.png';

function insert3() {
    down3.innerHTML = arrImage[Math.floor(random(1, 5))-1];
}

const node3 = document.createElement(insert3());


// Attempt #2

// const imageArray = [
//     { name: 'avatar1', image: '/images/avatar1.png'},
//     { name: 'avatar2', image: '/images/avatar2.png'},
//     { name: 'avatar3', image: '/images/avatar3.png'},
//     { name: 'avatar4', image: '/images/avatar4.png'},
// ];

// function getRandomItem(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
//   };

// for (let i = 0; i < arrpicture1.length; i += 1) {
//     const fruit = getRandomItem(imageArray);
//     arrpicture1[i].innerHTML = fruit.name + '<img src="'+fruit.image+'">';
// };




