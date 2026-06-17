document.getElementById("parent").addEventListener("click", () => {
    console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", () => {
    console.log("Button clicked");
});

document.getElementById("parents").addEventListener(
    "click",
    () => {
        console.log("Parent clicked");
    },
    true
);

document.getElementById("childs").addEventListener(
    "click",
    () => {
        console.log("Button clicked");
    },
    true
);

gp.addEventListener("click", () =>
    console.log("Grandparent")
);

p.addEventListener("click", () =>
    console.log("Parent")
);

c.addEventListener("click", () =>
    console.log("Child2")
,true);
p.addEventListener("click", () =>
    console.log("Parent2")
,true);

c.addEventListener("click", () =>
    console.log("Child")
,true);

