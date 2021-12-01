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

// const down3 = document.getElementById('picture1');
// const arrImage = new Array();

// const arrImage = ['/images/avatar1.png', '/images/avatar2.png', '/images/avatar3.png', '/images/avatar4.png'];



// arrImage[0] = new Image();
// arrImage[0].src = 'images/avatar1.png';

// arrImage[1] = new Image();
// arrImage[1].src = 'images/avatar2.png';

// arrImage[2] = new Image();
// arrImage[2].src = 'images/avatar3.png';
  
// arrImage[3] = new Image();
// arrImage[3].src = 'images/avatar4.png';

// arrImage[4] = new Image();
// arrImage[4].src = 'images/avatar5.png';

// function insert3() {
//     down3.innerHTML = arrImage[Math.floor(random(1, 4))-1];
// }

// const node3 = document.getElementById(insert3()).appendChild;


// let images = ['/images/avatar1.png', '/images/avatar2.png', '/images/avatar3.png', '/images/avatar4.png']

// function myImages () {
//     document.getElementById('images').src = images[0];
// }








// let img = document.createElement("img");
// img.src = ['/images/avatar1.png', '/images/avatar2.png', '/images/avatar3.png', '/images/avatar4.png'];

// let div = document.getElementById("x");
// div.appendChild(img);


const images1 = ['/images/avatar2.png', '/images/avatar2.png', '/images/avatar3.png', '/images/avatar4.png'];
const index1 = 0;

function buildImage1() {
    let img = document.createElement('img')
    img.src = images1[index1];
    document.getElementById('content').appendChild(img);
  };


  const images2 = ['/images/avatar5.png', '/images/avatar6.png', '/images/avatar7.png', '/images/avatar8.png'];
const index2 = 0;

function buildImage2() {
    let img = document.createElement('img')
    img.src = images2[index2];
    document.getElementById('content2').appendChild(img);
  };


  function buildImageMulti() {
      buildImage1();
      buildImage2();
  };

//need function to insert pic upon button click