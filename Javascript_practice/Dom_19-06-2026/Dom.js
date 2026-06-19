var newheading =document.createElement("h1")
newheading.innerText="hi ,How are you"
console.log(newheading )

let print = document.querySelector("body")
print.append(newheading)

let starting=document.querySelector("body")
starting.prepend(newheading)

let remove=document.querySelector("p")
remove.remove()

let btn1 = document.getElementById("btn")

btn1.onclick = () => {
    console.log("btn1 was clicked");
};


btn1.addEventListener("click",() => {
    console.log("clciked 1")
})



btn1.addEventListener(" mouseover",() =>{
    console.log("clciked 1")
})


// Promise

// What is a Promise in JavaScript?

// A Promise is an object that represents the eventual completion (success) or failure of an asynchronous operation

// A Promise can be in one of three states:

// Pending (initial state)
// Fulfilled (resolved successfully)
// Rejected (failed)

let readbook = new Promise( (resolve , rejected) =>{
    let read = true
    if (read ===true ){
        reslove=("read reade successfully")
    }
    else
    {
        rejected = ("not readed on time rejected")
    }
})
console.log(readbook)

//then 

readbook.then =(
    success =>console.log("successfully ")
)

//catch
readbook.catch=(
    rejected=console.log("rejected")
)



const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Success");
    } else {
        reject("Failed");
    }
});

myPromise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });


    const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve("Data fetched");
    }, 3000);

});

promise.then((data) => {
    console.log(data);
});


const promise1= new Promise((resolve) => {
    resolve(10);
});

promise1
    .then((num) => {
        console.log(num);
        return num * 2;
    })
    .then((num) => {
        console.log(num);
        return num * 3;
    })
    .then((num) => {
        console.log(num);
    });