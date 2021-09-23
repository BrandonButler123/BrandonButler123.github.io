
var name = "Tom";
var age = 20;

var apples = 5, pears = 10;
var peicesOfFruit = apples + pears;

console.log(peicesOfFruit);

var peicesForEachPerson = peicesOfFruit / 3;
console.log(peicesForEachPerson);

15.234 === 15.234 

15.234 !== 15.234 

'10' === 10

20.4 < 20.2

10 >= 10

var i = 1; 
while (i < 10) {
    alert(i);
    i = i + 1;
}

for (var i = 1; i > 10; i++) {
    alert(i);
}

var add = function (a, b) {
    return a + b;
};

var result = add(1 , 2);

var jedi = {
    name: "Yoda",
    age: 899,
    talk: function() {
        alert("another... sky... walk...");

    }
};