async function login(password) {

    if(password !== "1234") {
        throw new Error("Invalid Password");
    }

    return "Login Success";
}

async function run() {

    try {
        const result =
            await login("1111");

        console.log(result);
    }
    catch(error) {
        console.log(error.message);
    }
}

run();

var  user = {
    name:"John",
    age:25
};

const { name, age } = user;

console.log(name);
console.log(age);

var  user = {
    name:"David"
};

const {
    name: fullName
} = user;

console.log(fullName);

function* ids() {

    let id = 100;

    while(true) {
        yield id++;
    }
}

var gen = ids();

console.log(gen.next().value);
console.log(gen.next().value);

function* fruits() {
    yield "Apple";
    yield "Mango";
    yield "Banana";
}

var gen = fruits();

console.log(gen.next());
console.log(gen.next());