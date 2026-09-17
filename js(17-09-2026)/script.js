// DOM Selection


const title =
document.getElementById("title");


const description =
document.getElementById("description");


const priority =
document.getElementById("priority");


const category =
document.getElementById("category");


const addBtn =
document.getElementById("addBtn");


const container =
document.getElementById("taskContainer");


const search =
document.getElementById("search");


const filter =
document.getElementById("filter");


const sort =
document.getElementById("sort");



// Local Storage

let tasks =
JSON.parse(localStorage.getItem("tasks"))
|| [];



// Session Storage

sessionStorage.setItem(
"user",
"Sandy"
);




// Edit Variable

let editId=null;





// Add Task


addBtn.addEventListener(
"click",
()=>{


if(title.value===""){

document.getElementById("error")
.innerHTML=
"Title required";

return;

}



if(editId){


let task =
tasks.find(
t=>t.id===editId
);



task.title=title.value;

task.description=
description.value;

task.priority=
priority.value;

task.category=
category.value;


editId=null;



}

else{


tasks.push({

id:Date.now(),

title:title.value,

description:description.value,

priority:priority.value,

category:category.value,

completed:false,

date:new Date()
.toLocaleDateString()


});


}



save();

render();


clear();


});






// Render Function


function render(){


container.innerHTML="";



let data=[...tasks];




// Filter


if(filter.value==="completed"){

data=data.filter(
t=>t.completed
);

}


if(filter.value==="pending"){

data=data.filter(
t=>!t.completed
);

}



// Search


data=data.filter(
t=>

t.title
.toLowerCase()
.includes(
search.value.toLowerCase()
)

);




// Sorting


if(sort.value!=="none"){


let order={
High:1,
Medium:2,
Low:3
};


data.sort(
(a,b)=>

order[a.priority]
-
order[b.priority]

);


}




data.forEach(task=>{


let div =
document.createElement("div");


div.className=
`task ${task.priority.toLowerCase()}`;



div.dataset.id=
task.id;



div.innerHTML=`

<div>


<h3 class="${task.completed?"completed":""}">

${task.title}

</h3>


<p>
${task.description}
</p>


<p>
📌 ${task.category}
</p>


<p>
⚡ ${task.priority}
</p>


</div>


<div>


<button class="complete">
✔
</button>


<button class="edit">
✏
</button>


<button class="delete">
❌
</button>


</div>


`;



container.appendChild(div);



});



updateDashboard();


}





// Event Delegation


container.addEventListener(
"click",
(e)=>{


let id =
Number(
e.target
.closest(".task")
.dataset.id
);



let task =
tasks.find(
t=>t.id===id
);



// Complete


if(
e.target.classList
.contains("complete")
){

task.completed=
!task.completed;

}



// Delete


if(
e.target.classList
.contains("delete")
){


tasks=
tasks.filter(
t=>t.id!==id
);


}



// Edit


if(
e.target.classList
.contains("edit")
){


title.value=
task.title;


description.value=
task.description;


priority.value=
task.priority;


category.value=
task.category;


editId=id;


}



save();

render();


});







// Search Debounce


function debounce(fn,delay){


let timer;


return function(){


clearTimeout(timer);


timer=setTimeout(
fn,
delay
);


}


}



search.addEventListener(

"input",

debounce(
render,
500
)

);






filter.addEventListener(
"change",
render
);



sort.addEventListener(
"change",
render
);






// Dashboard


function updateDashboard(){


document
.getElementById("totalCount")
.innerHTML=
tasks.length;



document
.getElementById("completeCount")
.innerHTML=

tasks.filter(
t=>t.completed
)
.length;



document
.getElementById("pendingCount")
.innerHTML=

tasks.filter(
t=>!t.completed
)
.length;


}






// Save


function save(){

localStorage.setItem(
"tasks",
JSON.stringify(tasks)
);

}






// Clear Form


function clear(){

title.value="";

description.value="";

}







// Keyboard Event


document.addEventListener(
"keydown",
(e)=>{


if(e.ctrlKey && e.key==="Enter"){

addBtn.click();

}


});







// Date


document.getElementById("date")
.innerHTML=
new Date()
.toDateString();






// Dark Mode


document
.getElementById("themeBtn")
.addEventListener(
"click",
()=>{


document.body
.classList.toggle("dark");


});






render();
