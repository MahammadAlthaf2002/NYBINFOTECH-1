// // window.location.href = "https://google.com";
// // console.log(window.location.href);

// let result = confirm("Do you want to continue?");

// console.log(result);

// // let name = prompt("Enter your name");

// // console.log(name);

// window.open("https://Google.com");

// // window.close();

// // window.print();


// // location.href="https://chatgpt.com/c/6a3dfd70-6020-83ee-8ad6-7d36eab6275c"

// // console.log(location.href);
// // console.log(location.hostname);
// // console.log(location.protocol);

// // history.back();
// console.log(screen.width);

// console.log("Hello");
// console.error("Error");
// console.warn("Warning");
// console.table([
//   {name: "Alice", age: 20},
//   {name: "Bob", age: 22}
// ]);

// setTimeout(function(){
//     alert("Hello");
// }, 3000);

// localStorage.setItem("name", "John");

// console.log(localStorage.getItem("name"));

// localStorage.removeItem("name");

// localStorage.clear();

function addValue(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    try {
        document.getElementById("display").value =
            eval(document.getElementById("display").value);
    } catch {
        alert("Invalid Expression");
        clearDisplay();
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}


function calculate(){

    let number1 =
    Number(document.getElementById("num1").value);

    let number2 =
    Number(document.getElementById("num2").value);

    let operator =
    document.getElementById("operator").value;

    let answer;

    if(operator=="+")
    {
        answer=number1+number2;
    }

    else if(operator=="-")
    {
        answer=number1-number2;
    }

    else if(operator=="*")
    {
        answer=number1*number2;
    }

    else if(operator=="/")
    {
        if(number2==0)
        {
            answer="Cannot Divide By Zero";
        }
        else
        {
            answer=number1/number2;
        }
    }

    document.getElementById("result").innerHTML=
    "Result : "+answer;

}


 function getStudent(){

        return new Promise((resolve,reject)=>{

            setTimeout(()=>{

                resolve({
                    name:"Mahammad althaf",
                    age:23,
                    course:"JavaScript"
                });

            },1000);

        });

    }

    // Generator (Iterator)
    function* numbers(){

        yield 100;
        yield 200;
        yield 300;

    }

    async function showData(){

        try{

            // Async/Await
            const student = await getStudent();

            // Destructuring
            const {name,age,course} = student;

            // Local Storage
            localStorage.setItem("studentName",name);

            // Session Storage
            sessionStorage.setItem("course",course);

            // API Integration
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

            const apiData = await response.json();

            // Generator
            const gen = numbers();

            document.getElementById("output").innerHTML =

            `
            <b>Student Name:</b> ${name}<br><br>

            <b>Age:</b> ${age}<br><br>

            <b>Course:</b> ${course}<br><br>

            <b>API User:</b> ${apiData.name}<br><br>

            <b>Generator Values:</b>

            ${gen.next().value},
            ${gen.next().value},
            ${gen.next().value}
            `;

        }

        catch(error){

            document.getElementById("output").innerHTML =
            "Error : " + error;

        }

    }


    