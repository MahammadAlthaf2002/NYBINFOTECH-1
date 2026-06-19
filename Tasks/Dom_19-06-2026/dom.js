// Create and Consume Promises

const myPromise = new Promise((resolve, reject) => {

    let success = true;

    if(success){
        resolve("Data Loaded Successfully");
    }else{
        reject("Failed to Load Data");
    }

});

myPromise
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});


function fetchData(){

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve("User Data Fetched");
        },2000);

    });

}

fetchData()
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
});

function getUser(callback){

    setTimeout(()=>{
        callback("Rahul");
    },2000);

}




const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const status = document.getElementById("status");

function saveTask(task, callback){

    const promise = new Promise((resolve,reject)=>{

        setTimeout(()=>{

            if(task.trim() !== ""){
                resolve(task);
            }else{
                reject("Task cannot be empty");
            }

        },1000);

    });

    promise
    .then((data)=>{
        callback(data);
    })
    .catch((err)=>{
        status.innerText = err;
    });

}

addBtn.addEventListener("click",()=>{

    const task = taskInput.value;

    saveTask(task,(savedTask)=>{

        const li = document.createElement("li");
        li.innerText = savedTask;

        taskList.appendChild(li);

        taskInput.value = "";

        status.innerText = "Task Added Successfully";

        setTimeout(()=>{
            status.innerText = "";
        },2000);

    });

});

taskList.addEventListener("click",(e)=>{

    if(e.target.tagName === "LI"){

        e.target.remove();

    }

});