// The browser creates an Event Object and performs 3 phases:

// 1. Capturing Phase
// 2. Target Phase
// 3. Bubbling Phase


// Event Bubbling
// What it means ?? Event bubbling means: when an event happens on a child element, it first runs on that element, and then it moves upward to its parent, then grandparent, and so on.

// So this: button → div → body → html → document

// is bubbling upward.



var parents = document.getElementById("parent")

function parent(){
    console.log("parent click")

}
parents.addEventListener("click" , parent)

var  childs = document.getElementById("child")

function child(){
    console.log("child click")
}

childs.addEventListener("click" , child)



var  grandparent1 = document.getElementById("grandparent")



grandparent1.addEventListener("click" , function(){
    console.log("grandparent click")
})


// // event.target vs event.currentTarget
// var  parent1 = document.getElementById("parent")
// parent.addEventListener("click", function (event) {
//   console.log("target:", event.target.id);
//   console.log("currentTarget:", event.currentTarget.id);
// });


list.addEventListener("click", function(event) {
    console.log("Clicked:", event.target.textContent);
    console.log("Listener on:", event.currentTarget.id);
});


//Stopping bubbling



var  child = document.getElementById("child")
child.addEventListener("click", function (event) {
  console.log("Child");
  event.stopPropagation();
});

var parent = document.getElementById("parent");
parent.addEventListener("click", function () {
  console.log("Parent");
});


var parents = document.getElementById("parent")

function parent(){
    console.log("parent click")

}
parents.addEventListener("click" , parent)

var  childs = document.getElementById("child")

function child(){
    console.log("child click")
}

childs.addEventListener("click" , child )



var  grandparent1 = document.getElementById("grandparent")



grandparent1.addEventListener("click" , function(){
    console.log("grandparent click")
})





// Event Capturing
// What it means

// Capturing is the opposite direction.

// The event starts from the top of the DOM tree and moves down to the target.

// document → html → body → parent → child

// It happens before the target phase.

// How to enable capturing

// By default, listeners use bubbling. To use capturing, pass true as the third argument or use { capture: true }.



// var p1 = document.getElementById("p")

// function parent11(){
//     console.log("parent click")

// } 
// p1.addEventListener("click" , parent11 ,true )

// var  c1 = document.getElementById("c")

// function child11(){
//     console.log("child click")
// }

// c1.addEventListener("click" , child11 ,true )



// var  gp1 = document.getElementById("gp")



// gp1.addEventListener("click" , function(){
//     console.log("grandparent click")
// } ,true)

// Capturing plus bubbling together

var p1 = document.getElementById("p")

function parent111(){
    console.log("parent click")

} 
p1.addEventListener("click" , parent11 )

var p1 = document.getElementById("p")

function parent11(){
    console.log("parent click")

} 
p1.addEventListener("click" , parent11 ,true )

var  c1 = document.getElementById("c")

function child11(event){
    console.log("child click")
    event.stopPropagation();
}

c1.addEventListener("click" , child11 ,true )



function child11(){
    console.log("child click")
}

c1.addEventListener("click" , child11  )

var  gp1 = document.getElementById("gp")



gp1.addEventListener("click" , function(){
    console.log("grandparent click")
} )

var  gp1 = document.getElementById("gp")



gp1.addEventListener("click" , function(){
    console.log("grandparent click")
} ,true)

// Event Delegation
// What it means

// Event delegation is not a new phase. It is a technique.

// It means:

// Attach one listener to a parent, and handle events from its children using bubbling.

// This works because child events bubble up to the parent.

